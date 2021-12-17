const Person = require("./global")
const person = new Person("John", "Doe", "Chilonzor", "@gamil.com", "845646464646", )
const person2 = new Person("John", "Doe", "Chilonzor", "@gamil.com", "845646464646")



console.log(person.getDateClient());
console.log(person.getDataAdmin());
console.log(person.getInfoToModerator());



console.log(person2.getDateClient());
console.log(person2.getDataAdmin());
console.log(person2.getInfoToModerator());