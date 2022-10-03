const { createServer } = require('http');
const { stat, createReadStream } = require('fs');
const { promisify } = require('util');
const fileName = './Sample.mp4';
const fileInfo = promisify(stat);

createServer(async (req, res) => {
    const { size } = await fileInfo(fileName);
    if (condition) {

    }

    res.writeHead(200, { 'Content-Length': size, 'Content-Type': 'video/mp4' });
    createReadStream(fileName).pipe(res);
}).listen(3000, () => console.log('ser er running on port 3000'));