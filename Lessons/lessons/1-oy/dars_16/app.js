// function job() {
//     return new Promise(function(resolve, reject) {
//         reject()
//     })
// }
// let promise = job()
// promise
//     .finally(function() {
//         console.log("l");
//     })
//     .then(function() {
//         console.log(1);
//     })

// .then(function() {
//     console.log(2);
// })

// .catch(function() {
//         console.log(0);
//     })
//     .then(function() {
//         console.log(1);
//     })



// let new_promise = new Promise()


// Promise.resolve("Hello").then((v) => {
//     console.log(v);
// })

// let a = function main(cond) {
//     new Promise((resolve, reject) => {
//         resolve("resolved")
//     })
// }
// console.log(a);

// function main(val) {
//     return new Promise((resolve, reject) => {
//         if (val) {
//             resolve("Resolved")
//         } else {
//             reject(new Error("Error"))
//         }
//     })
// }
// main(false).finally(() => {
//     console.log("i am finally");
// }).then((value) => console.log(value)).catch((value) => console.log(value))


// Promise.resolve("Resolved").then((value) => {
//     console.log(value);
// })

// Promise.reject("Rejected").catch((error) => {
//     console.log(error);
// })

// let interval = setInterval(() => {
//     console.clear();
//     let date = new Date();
//     console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
// }, 1000)
// setTimeout(() => {
//     clearInterval(interval)
// }, 100000)

// var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// var result = ""

// function printToLetter(number) {
//     var charIndex = number % alphabet.length
//     var quotient = number / alphabet.length
//     if (charIndex - 1 == -1) {
//         charIndex = alphabet.length
//         quotient--;
//     }
//     result = alphabet.charAt(charIndex - 1) + result;
//     if (quotient >= 1) {
//         printToLetter(parseInt(quotient));
//     } else {
//         console.log(result)
//         result = ""
//     }
// }

// console.log(printToLetter(6));

//===================================================//

let letter = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
};

function alphNum(str) {
    let new_arr = []
    for (let j = 0; j < str.length; j++) {
        for (let i in letter) {
            if (i === str[j]) {
                new_arr.push(letter[i])
            }
        }
    }
    return new_arr
};
// console.log(alphNum("JAVASCRIPT"));

//===================================================//


function numOfDigits(num) {
    let a = (num + "").length
    return a
}
// console.log(numOfDigits(1000000000));


function concat(arr) {
    let new_arr = arr.flat(Infinity)
    return new_arr
}
// console.log(concat([
//     [1, 2, 3],
//     [4, 5],
//     [6, 7]
// ]));

//===================================================//


let obj = {
    1: 3,
    2: 2,
    3: 5,
    4: 4,
    5: 7,
    6: 6
}

function boxSeq(num) {
    let result;
    for (let key in obj) {
        if (num == key) {
            result = obj[key]
        }
    }
    return result
}
// console.log(boxSeq(3));

//===================================================//

function shaxmat(str) {
    if (str[0].charCodeAt() % 2 == 1) {
        if (str[1] % 2 == 1) {
            return "BLACK"
        } else {
            return "WHITE"
        }
    } else {
        if (str[1] % 2 == 1) {
            return "WHITE"
        } else {
            return "BLACK"
        }

    }

}

// console.log(shaxmat('d2'))


let r = [true, true, false, false]

function a(arr) {
    let result = arr.reduce((acc, value) => {
        if (value === true) {
            acc++
        }
        return acc
    }, 0)
    return result
}
// console.log(a(r));

function boom(arr) {
    let new_arr = []
    for (let i in )
}
console.log(boom([1, 2, 3, 4, 5, 6, 7]));