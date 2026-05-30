import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const hidden = await kv.get("qrHidden");

  res.status(200).json({
    visible: !hidden
  });
}
