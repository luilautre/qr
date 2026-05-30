import { notifyScan } from "./events.js";

export default function handler(req, res) {
    notifyScan();

    res.writeHead(302, {
        Location: "https://google.com"
    });

    res.end();
}let lastScan = 0;

export default function handler(req, res) {
    lastScan = Date.now();
    global.lastScan = lastScan;
    res.redirect("/");
}
