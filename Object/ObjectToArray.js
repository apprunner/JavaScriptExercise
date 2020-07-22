var employee = {
    name: "Kevin",
    email: "kevin@gmail.com",
    title: "Developer",
    phones: {
        home: "(03)366-4946",
        office: "(03)342-5178",
        mobile: "0922-155342"
    }
}

//Ex - Object.entries() 
console.log(Object.entries(employee));

let newArray = [...Object.entries(employee)];
console.log(newArray);

//Ex - Object.fromEntries() 將陣列轉成Object
let entries = new Map([['name', 'Kevin'], ['email', 'kevin@gmail.com']]);
const person = Object.fromEntries(entries);
console.log(person);


