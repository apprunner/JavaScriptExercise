var title = function (title) {
    console.log('');
    var len = Math.floor((60 - title.length) / 2);
    title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
    console.log(title);
}

var print = (value) => { console.log(value); }

var logType = function (value) {
    console.log(typeof value);
}

//Ex
const pi = 3.1415962;

title('使用String()');
var piString = String(pi);

console.log(piString);
console.log(typeof piString);

title('使用toString()方法');
var ps = pi.toString();
console.log(ps);
console.log(typeof ps);





