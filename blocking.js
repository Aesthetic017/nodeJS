// synchronous- blocking and async -non blocking elements 
// line by line - sync
// concurrent - async

//non blocking 
// const fs = require("fs");
// console.log("1")
// fs.readFile("example1.txt","utf-8",(err,data)=>{
//     console.log(data);
// })
// console.log("2")


//blocking 
const fs = require("fs");
console.log("1")
const result = fs.readFileSync('contacts.txt','utf-8')
console.log(result)
console.log("2")
