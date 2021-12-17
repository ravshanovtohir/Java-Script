// let person = {
//     name: "John",
//     lastName: "Doe",
//     phone: "+998995441424",
//     address: "Chilonzor"
// }

// function onlyValue(obj) {
//     for (let i in obj) {
//         console.log(obj[i]);
//     }
// };
// console.log(onlyValue(person));




// let person = {
//     name: "John",
//     lastName: "Doe",
//     phone: "+998995441424",
//     address: "Chilonzor"
// }

// function onlyValue(obj) {
//     let arr = []
//     for (let i in obj) {
//         arr.push(i)
//     }
//     return arr
// };
// console.log(onlyValue(person));



// let listOfStudents = [{
//         id: 1,
//         userName: "@student1",
//         email: "student1@gmail"
//     },
//     {
//         id: 2,
//         userName: "@student2",
//         email: "student2@gmail"
//     },
//     {
//         id: 3,
//         userName: "@student3",
//         email: "student3@gmail"
//     }

// ]

// function fromObjectToArray(arr) {


//     let all_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         let new_arr = []
//         for (let j in arr[i]) {
//             new_arr.push(arr[i][j])
//         }
//         all_arr.push(new_arr)
//     }
//     return all_arr
// };
// console.log(fromObjectToArray(listOfStudents));



// function fromObjectToArray(arr) {


//     let all_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         let new_arr = []
//         let element = arr[i]
//         for (let j in element) {
//             new_arr.push(element[j])
//         }
//         all_arr.push(new_arr)
//     }
//     return all_arr
// };
// console.log(fromObjectToArray(listOfStudents));




// let listOfStudents = [{
//         id: 1,
//         userName: "@student1",
//         email: "student1@gmail"
//     },
//     {
//         id: 2,
//         userName: "@student2",
//         email: "student2@gmail"
//     },
//     {
//         id: 3,
//         userName: "@student3",
//         email: "student3@gmail"
//     }

// ]

// function addValuesToArray(arr) {
//     let all_arr = []
//     for (let i = 0; i < arr.length; i++) {
//         let new_arr = []
//         elements = arr[i]
//         for (let j in elements) {
//             new_arr.push(elements[j])
//         }
//         all_arr.push(new_arr)
//     }
//     return all_arr
// };
// console.log(addValuesToArray(listOfStudents));


arr = [100, 200, 200, 500, 800, 1000]

// function minAndMax(arr) {

//     let min = Math.min(...arr)
//     let max = Math.max(...arr)

//     return {
//         maxNum: max,
//         minNum: min
//     }
// };
// console.log(minAndMax(arr));


// let smallest = arr[0];
// let biggest = arr[0]

// function minMax(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             smallest = arr[i];
//         } else if (arr[i] > biggest) {
//             biggest = arr[i]
//         }
//     }
//     return `Max number is ${biggest}, Min number is ${smallest}`
// }

// console.log(minMax(arr));

// function findMinAndMaxWithReduce(arr) {

// };
// console.log(findMinAndMax);


// function aylanaYuziVaPerimetri(radius) {
//     let perimetr = 2 * Math.PI * radius;
//     let yuzi = Math.PI * (radius ** 2)
//     return {
//         aylanaPerimetri: perimetr,
//         aylanaYuzi: yuzi
//     }
// };
// console.log(aylanaYuziVaPerimetri(8));


// function printMethods(arg) {
//     if (typeof arg === "object") {
//         console.log(Object.getOwnPropertyNames(Object.prototype));
//     } else if (typeof arg === "string") {
//         console.log(String.getOwnPropertyNames(String.prototype));
//     } else if (typeof arg === "array") {
//         console.log(Array.getOwnPropertyNames(Array.prototype));
//     } else if (typeof arg === "number") {
//         console.log(Number.getOwnPropertyNames(Number.prototype));
//     }
// };

// console.log(printMethods([5, 5, 5, 5]));

// let obj = {
//     name: "Olim",
//     surname: "olim"
// }

// function isIn(obj, arg) {
//     for (let i in obj) {
//         if (i === arg) {
//             return true
//         } else {
//             return false
//         }
//     }
// };
// console.log(isIn(obj, "name"));

// function isIn(obj, arg) {
//     let key = Object.keys(obj)
//     return key.includes(arg)
// };
// console.log(isIn(obj, "names"));


// function sumArray(arr) {
//     for (let i in arr) {
//         console.log(i);
//     }
// };
// console.log(sumArray([1, 2, 3, 4[5, 6, 7, 8[1, 5, 7, 2]]]));


// console.log(...[1, 2, 3, 4[5, 6, 7, 8[1, 5, 7, 2]]]);


// function sum_array(arr) {
//     var sum = 0;
//     for (let k in arr) {
//         console.log(k);
//     }
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr[i].length; j++) {
//             sum += (arr[i][j])
//         }
//     }
//     return sum;
// }

// console.log(sum_array([
//     [3, 2],
//     [1, 5, 6, 8],
//     [4, 12]
// ]));


function sumArray(arr) {
    let a = 0
    let sum = []
    for (let i of arr) {
        a = 0
        for (let j of i) {
            a += j
        }
        sum.push(a)
    }
    return Math.min(...sum)
}
console.log(sumArray([
    [0, 2],
    [3, 2],
    [1, 5, 6, 8],
    [4, 12]
]));


function teamRandom(num) {
    let a;
    let randomNums = []
    for (let i = 0; i < num; i++) {

        a = Math.round(Math.random() * 5)
        randomNums.push(a)
    }
    return randomNums
}
// console.log(teamRandom(4));