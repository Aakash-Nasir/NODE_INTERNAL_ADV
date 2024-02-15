console.log("start");

setTimeout(() => { process.nextTick(() => console.log("next tick 2"));  

//callback will be waiting in nextTick queue

Promise.resolve().then(() => console.log("promise2"));
for(let i=0; i<10000000000; i++) {}

},0); // callback will be waiting in timer queue
Promise.resolve()
.then(()=> console.log("Promise 1")); // callback will be waiting in Promise/Microtask queue

process.nextTick(() => console.log("next tick 1")); //callback will be waiting in nextTick queue

 setTimeout(() => console.log("Timer 2"),0);     //callback will be waiting in timer queue
// process.nextTick(() => console.log("next tick 2"));  //callback will be waiting in nextTick queue

// for(let i=0; i<10000000000; i++) {} // by the time this loop complete all the callbacks are in their respective queue

// console.log("end"); 


//Output 
//start
// nexttick 2
// promise2
// nexttick1
// timer2
//promise1