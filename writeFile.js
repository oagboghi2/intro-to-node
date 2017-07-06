var fs = require("fs");

fs.writeFile("message.txt", "Hello Node.js", function(err){
  if (err) throw err;
  console.log("The file has been saved");
});
