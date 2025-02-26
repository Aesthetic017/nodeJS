const http = require("http");
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            return res.end("Internal Server Error");
        }

        switch (req.url) {
            case '/':
                return res.end("HomePage");
            case '/about':
                return res.end("I am Ashutosh Deshpande");
            default:
                return res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started"));
