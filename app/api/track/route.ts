import { NextResponse } from "next/server";
import { trackShipment } from "@/lib/tracking";

export const dynamic = "force-dynamic";

/** Simple in-process throttle: 20 lookups per minute per IP. */
const hits = new Map<string, { n: number; t: number }>();
function throttled(ip: string) {
  const now = Date.now();
  const cur = hits.get(ip);
  if (!cur || now - cur.t > 60_000) {
    hits.set(ip, { n: 1, t: now });
    if (hits.size > 5000) hits.clear();
    return false;
  }
  cur.n += 1;
  return cur.n > 20;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (throttled(ip)) return NextResponse.json({ error: "rate_limited" }, { status: 429 });

    const body = (await req.json()) as { ref?: string; website?: string };
    if (body.website) return NextResponse.json({ error: "bad_request" }, { status: 400 });

    const ref = String(body.ref || "").trim();
    if (!ref || ref.length > 64) return NextResponse.json({ error: "invalid_ref" }, { status: 400 });

    const result = await trackShipment(ref);
    return NextResponse.json(result, { headers: { "cache-control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
}
