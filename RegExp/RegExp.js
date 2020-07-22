
let wordString = 'You have my  {{ message }} ... {{message}} ?'

let reg = /{{\s*message\s*}}/;

// let result = reg.exec(wordString);
// console.log(result);

function replaceWords(word) {
    if (reg.exec(word) != null) {
        wordString = word.replace(reg, "奚江華");
        // console.log('#' + wordString);
        replaceWords(wordString);
    }
}
replaceWords(wordString);
console.log(wordString);


