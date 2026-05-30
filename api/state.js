export default function handler(req, res) {
    res.json({
        lastScan: global.lastScan || null,
        now: Date.now(),
        visible: !(global.lastScan && Date.now() - global.lastScan < 5000)
    });
}
