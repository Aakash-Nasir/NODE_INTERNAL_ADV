const fs = require('fs');

fs.readFile('./readme.md','utf8',(err,data) => { // I/O queue -> Callback queue 
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
});
process.nextTick(() => console.log("next tick"));

setTimeout(() => console.log("timer"),0);

process.nextTick(() => console.log("next tick "));
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timer1"),0);
setImmediate(() => console.log("Immediate callback"));


for(let i=0;i<10000000000; i++) {} // -> takes more than 5sec
