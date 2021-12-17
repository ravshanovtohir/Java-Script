// function emptyArray(arr_1) {
//     let result = arr_1
//     arr_1 = []
//     return arr_1
// };
// console.log(emptyArray([1, 2, 3, 4, 5]));


// function emptyarray(arr) {
//     arr = []
//     return arr
// }
// console.log(emptyarray([1, 2, 3, 4, 5]));

// function a(arg) {
//     let result = []
//     for (let i of arg) {
//         result.push(i)

//     }
//     arg = []
//     return arg
// }
// console.log(a([1, 2, 3, 4, 5]));



// let arr_1 = [1, 2, 3]
// let arr_2 = [3, 4, 5]

// function toOneArray(arg_1, arg_2) {
//     let result = []
//     result = [...arg_1, ...arg_2]

//     return result
// }
// console.log(toOneArray(arr_1, arr_2));

// function stringToArray(str) {
//     let arr = str.split(" ")
//     return arr
// }
// console.log(stringToArray("Hello World"));

// let arr = [2, 5, 4]

// function sorting(arg) {
//     for (let i of arg) {

//     }
// };
// console.log(sorting(arr));




// arr = [5, 458, 454, 545]
// let mapping = arr.map((value) => {})
// console.log(mapping);


//CLASSWORK//

// let data = new Date()
// data = `${data.getFullYear()}.${data.getMonth()}.${data.getDay()}`

// let user = [{
//     user_id: 1,
//     userName: "John Doe",
//     email: "JOhnDoe@gmail.com",
//     password: "6565665",
//     date: data
// }]

// function addUser(str_1, str_2, str_3) {
//     let obj = {}
//     obj = user
//     for (let i in obj) {
//         str_1 = Object.values[obj[1]]
//     }
//     return obj
// }
// console.log(user);
// console.log(addUser("anonim", "anonim666@gmail.com", "64554546"));




let data = new Date()
data = `${data.getFullYear()}.${data.getMonth()}.${data.getDay()}`

let user = [{
        user_id: 1,
        userName: "John Doe",
        email: "JOhnDoe@gmail.com",
        password: "6565665",
        date: data
    },

    {
        user_id: 2,
        userName: "anonim",
        email: "anonim666@gmail.com",
        password: "7485165",
        date: data
    }
]

function searchUser(arg) {
    let result;
    if (typeof arg === 'number') {
        for (let i of user) {
            if (arg === i.user_id) {
                result = i
            } else {
                return "not known"
            }
        }
    } else if (typeof arg === 'string') {
        for (let i of user) {
            if (i.userName === arg || i.email === arg) {
                result = i
            } else {
                return 'not known'
            }
        }
    } else {
        return 'String yoki son kiriting'
    }
    return result
}

console.log(searchUser('John Doe'));


// function searchUser(arg) {
//     let result
//     if (typeof arg === 'number') {
//         result = user.filter(function(value) {
//             return value.user_id === arg
//         })
//     } else if (typeof arg === 'string') {
//         result = user.filter(function(value) {
//             return value.userName === arg || value.email === arg
//         })
//     } else {
//         return 'String yoki son kiriting'
//     }
//     return result
// }
// console.log(searchUser(5));




// function func(arg) {
//     for (let i of user) {
//         if (typeof arg === "number") {
//             if (i[0[0]] == arg || i[1[0]] == arg) {
//                 return user[0]
//             }
//         }
//         if (typeof arg === "string") {
//             if (i[0[1]] == arg && i[1[1]] == arg) {
//                 return user[1]
//             }
//         }
//     }
// }
// console.log(func(5));
// // console.log(user[0]);