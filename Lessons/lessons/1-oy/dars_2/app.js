// console.log(a);

// var a = "olma"


// let point = 30;
// let result = point >= 40 ? "passed exam" : "failed the exam";
// console.log(result);


// function exam(point) {
//     return point >= 40 ? "passed exam" : "failed the exam";
// }
// // console.log(exam(30));


// function exam_1() {
//     point = 30
//     console.log(point >= 40 ? "passed exam" : "failed the exam");
// }

// exam_1()




// let a = 5;
// let b = 6;

// if (a === 5) {
//     console.log(true);
// }
// if (a == b) {
//     console.log(false);
// } else {
//     console.log("flase");
// }

// let arr = [1, 3, 4, 4, 5]

// let person = {
//     firstName: "Alisher",
//     lastName: "Qodirov",
//     adress: "Qibray"
// }

// for (let index of person) {
//     console.log(person[index]);
// }

// for (let item in person) {
//     console.log(person[item]);
// }

// function findMax(num_1, num_2) {
//     if (num_1 > num_2) {
//         return `${num_1} katta`
//     } else {
//         return `${num_2} katta`
//     }
// };

// console.log(findMax(45, 50));



// function findArrayMax(arr) {
//     let a = ""
//     for (let i of arr) {
//         a += i
//     }

// }

// console.log(findArrayMax([1, 2, 4, 5, 6, 7]));



const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
];

function votedPeople(arg) {
    for (let i in voters) {
        console.log(arg[i]);
    }
};
console.log(votedPeople(voters));