// http - protocol-domain - path
// query parameters : ?key=value
const http = require("http");
const fs = require('fs');
const url = require("url");

const myServer = http.createServer((req, res) => {
    if(req.url ==='/favicon.ico')return res.end();
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl)

    fs.appendFile('log1.txt', log, (err,data) => {
        
        switch (myUrl.pathname) {
            case '/':
                return res.end("HomePage");
                break;
            case '/about':
                const username = myUrl.query.myname;
                return res.end(`hi,${username}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                return res.end(`searching for + ${search}`);
            default:
                return res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Server Started"));
