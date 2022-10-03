const cluster = require('cluster');
const http = require('http');
const os = require('os');
const numOfCpus = os.cpus().length;

var worker;
if (cluster.isMaster) {
    console.log('Number of cpus: ', numOfCpus);
    console.log('master process with pid:', process.pid);
    console.log(' ');
    for (let index = 0; index < numOfCpus; index++) {
        let worker = cluster.fork();
        console.log('file: index.js :: line 12 :: worker', worker.process.pid);
    }
} else {
    http.createServer((req, res) => {
        const message = `worker process with pid:, ${process.pid}`;
        console.log(message);
        res.end(message)
    }).listen(3000)
}