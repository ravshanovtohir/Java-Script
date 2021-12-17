//======================Getter vs Setter================================//

//Masala shartlari
//User class tuziladi
/*
id,
firstName,->o'zgaradi
lastName,->o'zgaradi
age,
email,->o'zgaradi
password->o'zgaradi
*/



class Person {
    constructor(id, firstName, lastName, age, email, password) {
        this._id = this.id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._email = email;
        this._password = password
    }

    set firstName(fN) {
        this._firstName = fN;
    }

    set lastName(lN) {
        this._lastName = lN;
    }

    set email(eml) {
        this._email = eml
    }

    set password(psw) {
        this._password = psw
    }



    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }
    get email() {
        return this._email
    }
    get password() {
        return this._password
    }

}

let new_person = new Person(12544, "Ibo", "Ibrohimov", 18, "asdfga@gamil.com", "845121545")

// console.log(new_person.firstName);

// new_person.firstName = 'Ali'

// console.log(new_person.firstName);


// console.log("eski   -->", new_person.email);

// new_person.email = "hjkgakvhvf@gmail.com"

// console.log("yangi  -->", new_person.email);




//===========================Destruksiya=============================//



let arr = [{
        name: 'John',
        address: 'Chilonzor',
        location: {
            x: 15,
            y: 56
        }
    },
    'John', [1, 2, 3, 4]
]

let [{ location: { x, y } }] = arr

// console.log(x, "\t", y);
//=======================================================================================================================//

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

// console.log(json);

// console.log(JSON.stringify([1, 2, 3]));




// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);

// console.log(recipeMap);

// for (let vegetable of recipeMap.keys()) {
//     console.log(("-->keys \n", vegetable));
// }

// for (let amount of recipeMap.values()) {
//     console.log(("-->", amount));
// }

// for (let entry of recipeMap) {
//     console.log(("-->", entry));
// }

// for (let i of recipeMap) {
//     console.log(i);
// }

// console.log(recipeMap.values)


// let obj = {
//     name: "John",
//     age: 30
// };

// let map = new Map(Object.setPrototypeOf(obj));

// console.log(map.get('name')); // John



let set = new Set(["orange", "apple", "banan"]);

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };


// console.log(set.keys())

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.values());

// for (let i of set) {
//     console.log(i);
// }

// set.forEach((value) => {
//     console.log(value);
// })



function unique(arr) {
    /* your code */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log(unique.prototype)

// function sum() {
//     setTimeout(() => {
//         console.log('Hello');
//         console.log('it is finaly');
//     }, 3000)
//     setTimeout(() => {
//         console.log('hello2');
//     }, 2000)
//     setTimeout(() => {
//         console.log('hello3');
//     }, 1000)
// }



// // function new_prom() {
// //     new Promise((resolve, reject) => {
// //         resolve("hello")
// //     })
// // }

// // let prom = new_prom()


// sum()


// function voqt(vaqt) {
//     setTimeout(() => {}, vaqt)
// }

// const promis1 = new Promise((resolve, reject) => {
//     resolve("hi")
// })
// promis1
//     .then(function(value) {
//         voqt(3000)
//         return value
//     })
//     .then(function(value) {
//         voqt(2000)
//         return value
//     })
//     .then(function(value) {
//         voqt(1000)
//         return value
//     })
//     .finally(() => {
//         return "it is final"
//     })



// let promise = new Promise((resolve, reject) => {
//     resolve("1")
// })

// promise
//     .then(function() {
//         setTimeout(() => {
//             console.log("this is 3000");
//         }, 3000)
//     })

// .then(function() {
//     setTimeout(() => {
//         console.log("this is 2000");
//     }, 2000)
// })


// .then(function() {
//     setTimeout(() => {
//         console.log("this is 1000");
//     }, 1000)
// })


// .finally(function() {
//     console.log("It is final");
// })



new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)
    setTimeout(() => {
        console.log(result); // 1
        return result * 2;
    }, 2000)
}).then(function(result) { // (***)

    console.log(result); // 2
    return result * 2;

}).then(function(result) {

    console.log(result); // 4
    return result * 2;

});