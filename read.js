var fs = require("fs");

fs.readFile('data.txt', function(err, i){
  console.log(i.toString());
});
