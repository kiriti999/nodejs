const http = require('http')
const cluster = require('cluster')
const numCPUs = require('os').cpus().length
const kill = require('tree-kill');
let master;

if (cluster.isMaster) {
  console.log('this is the master process: ', process.pid)
  for (let i = 0; i < numCPUs; i++) {
    master = cluster.fork()
  }

  cluster.on('exit', (worker) => {
    console.log('worker died with pid: ', process.pid);
    console.log(`only ${Object.keys(cluster.workers).length} remaining`);
    console.log(`starting new worker..`);
    console.log('');
    cluster.fork();
    console.log(`Now ${Object.keys(cluster.workers).length} remaining`);
  })

} else {
  console.log(`started the worker at ${process.pid}`);
  http.createServer((req, res) => {
    const message = `worker ${process.pid}...`
    res.end(message)
    if (req.url === '/kill') {
      kill(process.pid);
    } else if (req.url === '/') {
      console.log('serving from pid:', process.pid);
    }
  }).listen(3000)
}
