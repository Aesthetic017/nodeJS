const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    const log = `${Date.now()}:${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    // First, append the log asynchronously but don't nest logic inside
    fs.appendFile("log2.txt", log, (err) => {
        if (err) console.error("Error writing to log file:", err);
    });

    // Handle routing
    switch (myUrl.pathname) {
        case "/":
            if (req.method === "GET") return res.end("HomePage");
            break;
        case "/about":
            const username = myUrl.query.myname;
            return res.end(`hi, ${username}`);
        case "/search":
            const search = myUrl.query.search_query;
            return res.end(`searching for ${search}`);
        case "/signup":
            if (req.method === "GET") return res.end("This is signup form");
            else if (req.method === "POST") return res.end("Success");
            break;
        default:
            return res.end("404 Not Found");
    }
});

myServer.listen(8000, () => console.log("Server Started"));
