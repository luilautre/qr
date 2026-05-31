const express = require("express");
const QRCode = require("qrcode");
const { Redis } = require("@upstash/redis");

const app = express();

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_REST_KV_REST_API_TOKEN
});

app.get("/api/scan", async (req, res) => {
    await redis.set("lastScan", Date.now());
    res.redirect("/");
});

app.get("/api/state", async (req, res) => {
    const lastScan = await redis.get("lastScan");

    const visible =
        !(lastScan && Date.now() - Number(lastScan) < 5000);

    res.json({ visible });
});

app.get("/api/qr", async (req, res) => {
    const url = `${req.protocol}://${req.get("host")}/api/scan`;

    const buffer = await QRCode.toBuffer(url, {
        width: 300
    });

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
});

app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
