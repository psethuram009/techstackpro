const { isUtf8 } = require("buffer");
const { error } = require("console");
const fs = require("fs");



// fs.writeFile('message.txt',"Hello fromnode js",(err)=>{
//     if (err) throw err;
//     console.log("this file has been saved!")
// })

fs.readFile('./message.txt','utf8', (err,data)=>{
    if (err) throw err;
    console.log(data);
});