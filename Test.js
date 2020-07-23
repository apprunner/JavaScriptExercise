

var person1 = {
    name: "Kevin",
    gender: true,
    Phone: {
        Home: "03-3664946",
        Office: "02-2587693",
        Mobile: "0925-155286",
    },
    CWH : [36, 24, 36],
    Friends : ["Mary", "Rose", "Cindy"]
}
var person2 = {
    name: "David",
    gender: true,
    Phone: {
        Home: "03-3664946",
        Office: "02-2587693",
        Mobile: "0925-155286",
    },
    CWH : [36, 24, 36],
    Friends : ["Mary", "Rose", "Cindy"]
}
var person3 = {
    name: "Mary",
    gender: true,
    Phone: {
        Home: "03-3664946",
        Office: "02-2587693",
        Mobile: "0925-155286",
    },
    CWH : [36, 24, 36],
    Friends : ["Mary", "Rose", "Cindy"]
}

var people = {
    Person1 : person1,
    Person2 : person2,
    Person3 : person3
};



// console.log(JSON.stringify(people));

var Members = [person1, person2, person3];

console.log(JSON.stringify(Members));


// console.log(person);
// console.log(person.Phone);
// console.log(person.Phone.Mobile);
// console.log(person.Friends[2]);

