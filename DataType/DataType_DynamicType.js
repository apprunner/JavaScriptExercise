var title = function (title) {
  console.log('');
  var len = Math.floor((60 - title.length) / 2);
  title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
  console.log(title);
}

var print = (value) => { console.log(value); }

var logType=function(value){ 
  console.log(typeof value);
}

//Dynamic typing
title('動態型別');
let p = 'Mobile Phone';  //String
logType(p);

p = 1200;  //Number
logType(p);

p = true;  //Boolean
logType(p);









