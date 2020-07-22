let allCode = '';
//Ex - 顯示所有的UTF-16 Code
for (let i = 33; i < 65563; i++) {
    // console.log(i + ', ' + String.fromCharCode(i));
    allCode += String.fromCharCode(i);
}

console.log(allCode);


//Ex - 找到你名字的UTF-16 Code
const getCharCode = (char) => {
    for (let i = 0; i < 65536; i++) {
        if (char == String.fromCharCode(i)) {
            return i;
        }
    }
}

console.log(getCharCode('奚'));
console.log(getCharCode('江'));
console.log(getCharCode('華'));

console.log(String.fromCharCode(22874) + String.fromCharCode(27743) + String.fromCharCode(33775));

//Ex - 一次傳完整姓名，顯示出Char Code

const fullCharCode = (name) => {
    let nameArray = name.split();

    if (nameArray.length==0){
        return "";
    }

    let codeArray=[];
    for(let i=0; i< nameArray.length ; i++){
        for (let j = 0; j < 65536; j++) {
            if (nameArray[i] == String.fromCharCode(j)) {
                codeArray.push(i);
                console.log(i);
            }
        }
    }
}

console.log(fullCharCode("奚江華"));

var name ="kevin";
console.log(typeof name);
console.log(typeof(name)=="string");