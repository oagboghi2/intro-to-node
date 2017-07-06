var fs = require("fs");

fs.writeFile('data.txt', "Third String", function(err){
  console.log("it worked");
});
