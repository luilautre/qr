import QRCode from "qrcode";

export default async function handler(req, res) {
    try {
        const url = `${req.headers["x-forwarded-proto"] || "https"}://${req.headers.host}/api/scan`;

        const buffer = await QRCode.toBuffer(url, {
            width: 300,
            margin: 2
        });

        res.setHeader("Content-Type", "image/png");
        res.status(200).send(buffer);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}
