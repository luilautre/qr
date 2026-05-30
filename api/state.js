export default function handler(req, res) {
    res.json({
        lastScan: global.lastScan || null,
        now: Date.now()
    });
}
