import { kv } from "@vercel/kv";

export default async function handler(req, res) {
    await kv.del("qrHidden");

    res.status(200).json({
        success: true
    });
}
