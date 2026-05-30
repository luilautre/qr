let lastScan = 0;

export default function handler(req, res) {
    lastScan = Date.now();
    global.lastScan = lastScan;
    res.redirect("/");
}
