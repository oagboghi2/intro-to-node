var scores = [90, 98, 89, 100, 100, 86, 94 ]; //should return 94


function average(scores){

  var totalScores = scores.reduce(function(x,y){
    return x + y;
  });
  total = totalScores / scores.length;
  answer = Math.round(total);
  console.log(answer);
}

average(scores);


/*
var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];

function average2(scores2){
    var totalScores = scores2.reduce(function(x,y){
      return x + y;
    });
    total = totalScores / scores2.length;
    answer = Math.round(total);
    console.log(answer);
  };

average2();
*/
