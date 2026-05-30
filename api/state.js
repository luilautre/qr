export default function handler(req, res) {
    const scannedRecently =
        global.lastScan &&
        Date.now() - global.lastScan < 5000;

    res.json({
        visible: !scannedRecently
    });
}import { kv } from "@vercel/kv";

export default async function handler(req, res) {
  const hidden = await kv.get("qrHidden");

  res.status(200).json({
    visible: !hidden
  });
}
