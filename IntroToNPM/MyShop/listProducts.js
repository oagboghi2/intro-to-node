var faker = require('faker');

//console.log(faker.fake("{{commerce.productName}}, {{commerce.price}}"));

var tenPrintOut = function(){
  for(i = 0; i < 10; i++){
    console.log(faker.fake("{{commerce.productName}} " +  "- ${{commerce.price}}"));
  }
};


tenPrintOut();
