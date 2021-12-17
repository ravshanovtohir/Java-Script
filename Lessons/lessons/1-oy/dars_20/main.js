// const { createId } = require("./app")
const Person = require("./index")

const person = new Person("Ali", "Vali", "Chuilonzor", "@gamil.com", "99899551", "545213135")

console.log(person.getDataToClient());
console.log(person.getDataToAdmin());
console.log(person.getInfoModerator());


let climbStairs = function(num) {
    if (num == 1 || num == 0) return 1

    let one = 1;
    let two = 2;

    for (let i = 3; i <= num; i++) {
        let three = one + two;
        one = two;
        two = three;
    }
    return two;

};

console.log(climbStairs(9));