import { Person } from "./index.js"

// let User = require("./index")
let user = new Person("Olim", "Komilov", 45)

console.log(user.getName());
console.log(user.getSurname());
console.log(user.getAge());
console.log(user.getFullInfo());