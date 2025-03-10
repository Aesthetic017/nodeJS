//create file using writeFileSync handler

const fs = require("fs");
// fs.writeFileSync('./test.txt','Hey There'); //if we change the content it will overwrite the older
//async -
fs.writeFile("./text.txt","hello there async",(err)=>{})

//read file sync
const result=fs.readFileSync("./contacts.txt","utf-8");
console.log(result)
//async
// const res = fs.readFileSync("./contacts.txt","utf-8",(err,result)=>{
//     console.log(res)
// });

//appending to file
fs.appendFileSync("./test.txt",new Date().toLocaleString());

//copying file 
// fs.cpSync("./test.txt","./copy.txt")
//to delete file 
// fs.unlinkSync("./copy.txt")
//to get stats of file
console.log (fs.statSync("./test.txt"));
//to create folder
// fs.mkdirSync("my-docs");
