import "server-only";

/**
 * Shipment tracking.
 *
 * The client runs Odoo. The page and the API below are complete; the only thing still to do
 * when the Odoo instance is reachable is to set four environment variables — no code change:
 *
 *   TRACKING_PROVIDER=odoo
 *   ODOO_URL=https://<odoo-host>
 *   ODOO_DB=<database name>
 *   ODOO_USER=<integration user login>
 *   ODOO_PASSWORD=<password or API key>
 *
 * Optional:
 *   ODOO_MODEL=stock.picking            (default)
 *   ODOO_REF_FIELDS=name,carrier_tracking_ref,origin
 *
 * Until then the provider stays `demo`, which answers from a deterministic sample set so the
 * page, its states and its copy can be reviewed exactly as they will behave live.
 */

export type TrackStep = { code: string; at?: string; done: boolean };

export type TrackResult =
  | { found: false; ref: string; reason: "not-found" | "unavailable"; message?: string }
  | {
      found: true;
      ref: string;
      status: StatusCode;
      updatedAt: string;
      origin?: string;
      destination?: string;
      service?: string;
      steps: TrackStep[];
    };

export const STATUS_ORDER = ["received", "processing", "ready", "in_transit", "out_for_delivery", "delivered"] as const;
export type StatusCode = (typeof STATUS_ORDER)[number] | "exception" | "returned";

/* ---------------- Odoo state → our status ---------------- */
const ODOO_STATE: Record<string, StatusCode> = {
  draft: "received",
  waiting: "processing",
  confirmed: "processing",
  assigned: "ready",
  done: "delivered",
  cancel: "exception",
};

const provider = () => (process.env.TRACKING_PROVIDER || "demo").toLowerCase();

export const trackingConfigured = () => provider() === "odoo" && !!process.env.ODOO_URL && !!process.env.ODOO_DB;

/* ---------------- Odoo JSON-RPC ---------------- */
async function rpc(service: string, method: string, args: unknown[]) {
  const url = `${String(process.env.ODOO_URL).replace(/\/$/, "")}/jsonrpc`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ jsonrpc: "2.0", method: "call", params: { service, method, args }, id: Date.now() }),
    cache: "no-store",
    signal: AbortSignal.timeout(8000),
  });
  if (!res.ok) throw new Error(`odoo http ${res.status}`);
  const json = (await res.json()) as { result?: unknown; error?: { data?: { message?: string } } };
  if (json.error) throw new Error(json.error.data?.message || "odoo error");
  return json.result;
}

async function odooTrack(ref: string): Promise<TrackResult> {
  const db = String(process.env.ODOO_DB);
  const user = String(process.env.ODOO_USER || "");
  const pass = String(process.env.ODOO_PASSWORD || "");
  const model = process.env.ODOO_MODEL || "stock.picking";
  const refFields = (process.env.ODOO_REF_FIELDS || "name,carrier_tracking_ref,origin").split(",").map((x) => x.trim()).filter(Boolean);

  const uid = (await rpc("common", "login", [db, user, pass])) as number | false;
  if (!uid) throw new Error("odoo auth failed");

  const domain = [refFields.length > 1 ? "|".repeat(refFields.length - 1) : null, ...refFields.map((f) => [f, "=", ref])].filter(Boolean);
  const rows = (await rpc("object", "execute_kw", [
    db,
    uid,
    pass,
    model,
    "search_read",
    [domain],
    { fields: ["name", "state", "scheduled_date", "date_done", "origin", "carrier_tracking_ref"], limit: 1 },
  ])) as Record<string, unknown>[];

  if (!rows?.length) return { found: false, ref, reason: "not-found" };
  const r = rows[0];
  const status = ODOO_STATE[String(r.state)] || "processing";
  const updatedAt = String(r.date_done || r.scheduled_date || "");
  const idx = STATUS_ORDER.indexOf(status as (typeof STATUS_ORDER)[number]);
  return {
    found: true,
    ref: String(r.carrier_tracking_ref || r.name || ref),
    status,
    updatedAt,
    origin: r.origin ? String(r.origin) : undefined,
    steps: STATUS_ORDER.map((code, i) => ({ code, done: idx >= 0 && i <= idx })),
  };
}

/* ---------------- demo provider ---------------- */
const DEMO: Record<string, { status: StatusCode; at: string; destination: string; service: string }> = {
  "JD-10045821": { status: "out_for_delivery", at: "2026-10-21T08:40:00Z", destination: "الرياض", service: "B2C" },
  "JD-10045822": { status: "delivered", at: "2026-10-20T13:05:00Z", destination: "جدة", service: "B2C" },
  "JD-77120034": { status: "in_transit", at: "2026-10-21T04:15:00Z", destination: "الدمام", service: "B2B" },
  "JD-55009917": { status: "processing", at: "2026-10-21T06:00:00Z", destination: "مكة المكرمة", service: "B2B" },
  "JD-90001234": { status: "exception", at: "2026-10-19T17:22:00Z", destination: "أبها", service: "B2C" },
};

export const demoRefs = Object.keys(DEMO);

function demoTrack(ref: string): TrackResult {
  const hit = DEMO[ref.toUpperCase().trim()];
  if (!hit) return { found: false, ref, reason: "not-found" };
  const idx = STATUS_ORDER.indexOf(hit.status as (typeof STATUS_ORDER)[number]);
  return {
    found: true,
    ref: ref.toUpperCase().trim(),
    status: hit.status,
    updatedAt: hit.at,
    destination: hit.destination,
    service: hit.service,
    steps: STATUS_ORDER.map((code, i) => ({ code, done: idx >= 0 && i <= idx })),
  };
}

/* ---------------- entry point ---------------- */
export async function trackShipment(refRaw: string): Promise<TrackResult> {
  const ref = refRaw.trim();
  if (!ref) return { found: false, ref, reason: "not-found" };
  if (provider() !== "odoo") return demoTrack(ref);
  try {
    return await odooTrack(ref);
  } catch {
    // never leak the backend error to the page
    return { found: false, ref, reason: "unavailable" };
  }
}
