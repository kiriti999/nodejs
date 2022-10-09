let inputs = process.argv.splice(2);
let arr = JSON.parse(inputs[0]);
const flag = inputs[1];

arr = arr.sort(function (a, b) {
    if (flag === 'asc') {
        return a - b;
    }
    if (flag === 'desc') {
        return b - a;
    }
});

console.log('arr', arr);


