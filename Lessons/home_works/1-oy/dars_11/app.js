// ==================================================================================//
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        const age = person.age;
        if (age > this.age) {
            return `${person.name} is older than me`
        } else if (age === this.age) {
            return `${person.name} is the same age as me`
        } else {
            `return ${person.name} is younger than me.`
        }
    }
}

const p1 = new Person('Samuel', 34);
const p2 = new Person('Joel', 36);
const p3 = new Person('Lily', 24);

// console.log(p3.compareAge(p1))
// ==================================================================================//


let arr = []
class User {
    constructor(new_user) {
        this.new_user = new_user
    }
    username() {
        arr.push(this.new_user)
        for (let i in arr) {
            return arr[i]
        }
    }
}
let u1 = new User("John Doe")
let u2 = new User("Misha")
let u3 = new User("Andrey")
    // console.log(u1.username());



// ==================================================================================//



class Calculator {
    constructor(num_1, num_2) {
        this.num_1 = num_1,
            this.num_2 = num_2
    }
    add() {
        return `${this.num_1} + ${this.num_2} = ${this.num_1 + this.num_2}`
    }
    subtrac() {
        return `${this.num_1} - ${this.num_2} = ${this.num_1 - this.num_2}`
    }
    kopay() {
        return `${this.num_1} * ${this.num_2} = ${this.num_1 * this.num_2}`
    }
    boluv() {
        return `${this.num_1} / ${this.num_2} = ${this.num_1 / this.num_2}`
    }
}
let result = new Calculator(5, 5)
    // console.log(result.subtrac());