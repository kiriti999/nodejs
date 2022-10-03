
const fs = require('fs');

let inputs = process.argv.splice(2);
let dirPath = inputs[0];

fs.readdir(dirPath, function (err, files) {
    if (err) {
        console.log("No such file or directory::: ", err);
    } else {
        console.log(files);
    }
});

// fs.readdirSync(dirPath).forEach(file => console.log(file));
