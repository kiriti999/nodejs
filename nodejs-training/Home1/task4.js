// Import Node.js core modules
const http = require('http');
const url = require("url");
const fs = require('fs');
const qs = require('querystring');
const port = 5000;

//create web server
http.createServer(function (req, res) {
    const query = url.parse(req.url, true);
    const route = query.pathname;
    let writeFilePath;
    let body = '';

    req.on('error', (err) => {
        sendError(res, err);
        res.statusCode = 400;
    });

    req.on('data', chunk => {
        body += chunk;
    });

    req.on('end', () => {
        writeFilePath = qs.parse((body)).path;

        // Default
        if (req.url == '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write('<html><body><p>This is home Page.</p></body></html>');
            res.end();
        }

        // Read
        else if (route == "/readFile" && req.method === 'GET') {
            const filePath = JSON.parse(JSON.stringify(query.query)).path;
            readFile(res, filePath);
        }

        //write
        else if (route == "/writeFile" && req.method === 'POST') {
            writeFile(res, writeFilePath);
        }

        //delete
        else if (route == "/deleteFile" && req.method === 'DELETE') {
            deleteFile(res, writeFilePath);
        }

        else
            res.end('Invalid req!');
    });

}).listen(port);
console.log(`Running on port ${port}`);


function readFile(res, path) {
    console.log('read path:', path);
    fs.readFile(path, 'utf8', (err, text) => {
        if (err) {
            sendError(res, err);
        } else {
            res.write(text);
            res.end();
        }
    });
}

function writeFile(res, path) {
    console.log('write path:', path);
    fs.stat(path, (err, stats) => {
        if (err) {
            sendError(res, err);
            console.error(err);
            return
        }
        if (stats.isFile()) {
            fs.writeFileSync(path, JSON.stringify('updated'), { flag: 'w' });
            res.end('file updated');
        } else {
            sendError(err);
        }
    })
}

function deleteFile(res, path) {
    console.log('delete path:', path);
    fs.unlink(path, function (err) {
        if (err) {
            sendError(res, err);
        } else {
            res.end('file deleted!');
        };
    });
}

function sendError(res, err) {
    if (err.errno && err.errno === -4058) {
        res.end(`File not found, Error code: ${err.errno.toString()}`);
    }
    console(err);
    res.end('Error occurred');
    return;
}