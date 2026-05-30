export default function handler(req, res) {
    global.lastScan = Date.now();
    res.redirect("/");
}
