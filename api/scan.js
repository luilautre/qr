import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  await kv.set("qrHidden", true);

  res.writeHead(302, {
    Location: "/"
  });

  res.end();
}
