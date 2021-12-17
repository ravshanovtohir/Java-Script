// const symb = Symbol("id")

// let obj = {
//     id: "1",
//     name: "John Doe",
//     [symb]: "olma"
// }

// for (let i in obj) {
//     console.log(i);
// }

// let b = obj[symb]

// console.log(b);


// Asosiy vazifasi unit qilib beradi. yani xech qachon 2 ta symbol bir biriga teng bolmaydi. teng bolishi uchun ozimiz kod  yozamiz.
"use strict"

// const idSy = Symbol()
// let obj = {
//     name: "John Doe",
//     age: 23,
//     adress: "chilonzor",
//     [idSy]: 1

// }


// Object.defineProperties(obj, 'name', {
//         writable: false
//     })
// Object.defineProperty(obj, "age", {
//     configurable: false
// })
// Object.defineProperty(obj, "adress", {
//     enumerable: false
// })

// obj.name = "olma"
// console.log(obj);

// function ddefineProperties(obj) {
//     for (let key in obj) {
//         Object.defineProperties(obj, key, {
//             writable: false,
//             configurable: false,
//             enurable: false
//         })
//     }
// }
// obj.name = olma
// console.log(ddefineProperties());

// let b = Object.defineProperties(obj, {
//     name: {
//         writable: false,
//         configurable: false,
//         enumerable: false
//     },
//     age: {
//         writable: false,
//         configurable: false,
//         enumerable: false
//     },
//     adress: {
//         writable: false,
//         configurable: false,
//         enumerable: false
//     },
//     [idSy]: {
//         writable: false,
//         configurable: false,
//     }
// })
// obj[idSy] = 1
// console.log(b);

//=================================================================//


// let new_arr = []
// let obj = {}
// class Person {
//     constructor(name, age) {
//         this.name = name,
//             this.age = age
//         obj = {
//             name: name,
//             age: age
//         }
//         this.obj = obj


//     }

//     returnResult() {
//         console.log(this.obj);
//         for (let i in this.obj) {
//             if (this.age === this.obj[i]) {
//                 return (`${this.name} is same age as me`);
//             }
//             if (this.age < this.obj[i]) {
//                 return (`${this.name} is older then me`);


//             }
//             if (this.age > this.obj[i]) {
//                 return (`${this.name} is younger then me`);
//             }
//         }
//     }
// }

// let p1 = new Person("Samuel", 24);
// let p2 = new Person("Andrey", 45);
// let p3 = new Person("Misha", 24);
// console.log(p1.returnResult());



// ==================================================================================//
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    compareAge(person) {
        console.log(person);
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