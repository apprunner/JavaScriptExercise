
console.log(performance.now());
console.time("Calc");

let sum = 18592;
for(let i=0; i<10000000; i++){
    sum+=sum*i;
}

console.timeEnd("Calc");

console.log(performance.now());

// console.log("%c%d", "background:red; color:white",)
