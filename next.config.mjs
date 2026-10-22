/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // BUILD_STANDALONE=1 produces a self-contained server bundle for a normal server or a
  // cPanel Node.js app uploaded over FTP. Vercel and Netlify ignore it.
  ...(process.env.BUILD_STANDALONE ? { output: "standalone" } : {}),
  poweredByHeader: false,
  images: { unoptimized: true },
  // the dashboard needs a Node runtime; better-sqlite3 / pg stay server-only
  serverExternalPackages: ["better-sqlite3", "pg"],
  experimental: {
    // media uploads go through a server action; platforms cap the request body (Vercel ~4.5MB)
    serverActions: { bodySizeLimit: "6mb" },
  },
};
export default nextConfig;
