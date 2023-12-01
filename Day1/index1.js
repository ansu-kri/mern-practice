const fs=require("fs")

//creating a new file
fs.writeFileSync('read.txt','welcome to my first project');



fs.appendFileSync('read.txt',  ' this is the first time im ding this project')



const buf_data = fs.readFileSync('read.txt');

org_data =buf_data.toString();
console.log(org_data)

fs.renameSync('read.txt', 'readwrite.txt')