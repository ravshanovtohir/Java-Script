// const Person = require("./index")
// const m = require("./main")

// const person = new Person("John", 35)
// console.log(person.getFullInfo());

// person.firstName = "vali"

// console.log(person.getFullInfo());




function createId() {
    return Date.now()
}

// console.log(createId);

module.exports = { createId }