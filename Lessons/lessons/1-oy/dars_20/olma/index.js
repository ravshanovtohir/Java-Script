export class Person {
    constructor(name, surname, age) {
        this.name = name,
            this.surname = surname,
            this.age = age
    }

    getName() {
        return this.name
    }
    getSurname() {
        return this.surname
    }
    getAge() {
        return this.age
    }
    getFullInfo() {
        return `My name is ${this.name}. My surname is ${this.surname}, I am ${this.age} years old`
    }

}

// module.exports = Person