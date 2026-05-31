const express = require("express");
const QRCode = require("qrcode");

const app = express();

let lastScan = 0;

app.get("/api/scan", (req, res) => {
    lastScan = Date.now();
    res.redirect("/");
});

app.get("/api/state", (req, res) => {
    res.json({
        visible: Date.now() - lastScan > 5000
    });
});

app.get("/api/qr", async (req, res) => {
    const url = `${req.protocol}://${req.get("host")}/api/scan`;
    const buffer = await QRCode.toBuffer(url);

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
});

app.listen(3000);
