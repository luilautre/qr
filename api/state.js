export default function handler(req, res) {
    const scannedRecently =
        global.lastScan &&
        Date.now() - global.lastScan < 5000;

    res.json({
        visible: !scannedRecently
    });
}
