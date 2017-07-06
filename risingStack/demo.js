
const fs = require("fs");
let content;

/*
try{
  content = fs.readFileSync("file.txt", "utf-8");
}catch(ex){
  console.log(ex);
}
console.log(content);


const numbers = [2,4,1,5,4]

function isBiggerThanTwo (num) {
  return num > 2
}

console.log(numbers.filter(isBiggerThanTwo));
*/

console.log("start reading a file...");


fs.readFile('file.txt', 'utf-8', function (err, content) {
  if (err) {
    console.log("error happened during reading the file");
    return console.log(err);
  }

  console.log(content);
});

console.log("end of the file");
