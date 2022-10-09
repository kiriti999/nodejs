const { spawn, fork, exec, execFile } = require('child_process');
const cpuCount = require('os').cpus().length;

const child = spawn('node', ['-v']);
child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
});
child.stdout.on('data', (data) => {
    console.log(`version: ${data}`);
    console.log(`cpuCount: ${cpuCount}`);
});
child.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});


