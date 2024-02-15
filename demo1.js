Promise.resolve()
.then(() => console.log("Printing from Promises"));
process.nextTick(() => console.log("Printing from nextTick"));
setTimeout(() => console.log("Printing From Timer"), 0);