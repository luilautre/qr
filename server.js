const express = require("express");
const QRCode = require("qrcode");

const app = express();

let lastScan = 0;

app.get("/scan", (req, res) => {
    lastScan = Date.now();
    res.redirect("/");
});

app.get("/state", (req, res) => {
    const visible = Date.now() - lastScan > 5000;
    res.json({ visible });
});

app.get("/qr", async (req, res) => {
    const url = `${req.protocol}://${req.get("host")}/scan`;

    const buffer = await QRCode.toBuffer(url);

    res.setHeader("Content-Type", "image/png");
    res.send(buffer);
});

app.use(express.static("public"));

app.listen(3000, () => {
    console.log("Serveur lancé sur port 3000");
});
