var Computer = ['CPU', 'DRAM' , 'SSD', 'Mouse'];

var comp = new Array('CPU', 'DRAM' , 'SSD', 'Mouse');

var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];


Fruits[3]="Melon";
console.log(Fruits);

//Ex - Array type
console.log(typeof Fruits);
console.log(Fruits instanceof Array);
console.log(Array.isArray(Fruits));
Fruits=[];
Fruits.length=0;

var Fruits = ["Apple", "Cherry", "Banana"];
Fruits.splice(0, Fruits.length);
console.log(Fruits);


//EX - push & pop
Fruits.push("Orange");
console.log(Fruits);

Fruits.pop();
console.log(Fruits);

//Ex - sort
console.log(Prices.sort());
console.log(Prices.sort().reverse());


//Ex - Find the element
var result = Cars.find(c => c=="Audi");
console.log(result);

//Ex - filter
console.log(Prices.filter(p => p > 250));

//Ex - indexof
var index = Cars.indexOf("Benz");
console.log(index);
console.log(Cars[index]);


//Ex - Merge
var products = Computer.concat(Cars);
console.log(products);

//Ex
var prod =[...Computer, ...Cars];
console.log(prod);

//Ex
Computer.push.apply(Computer,Cars);
console.log(Computer);
