// function showTimeAfter(num) {
//     let start = new Date()
//     start = `${start.getHours()}:${start.getMinutes()}:${start.getSeconds()}`
//     console.log(`I started at ${start}`);

//     setTimeout(function() {
//         console.log("run >>>");
//         let stop = new Date()
//         stop = `${stop.getHours()}:${stop.getMinutes()}:${stop.getSeconds()}`
//         console.log(`I finished at ${stop}`);
//     }, num)




// }
// showTimeAfter(5000)



// function showIntervalAfter(every, after, name) {
//     let res = 1
//     let interval_id = setInterval(function() {
//         console.log(`${name} >>> ${res}`);
//         res++
//         if (res === after + 1) {
//             clearInterval(interval_id)
//         }
//     }, every)

// }
// showIntervalAfter(1000, 5, "Joha")



// function second(time) {
//     setTimeout(function() {
//         console.log(`I am ${time}`);
//     }, time)
// }


// let promise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve("I am 3000")
//     }, 3000)
// })

// promise.then((value) => {
//     console.log(value);
//     second(2000)
// })

// promise.then((value) => {
//     console.log(value);
//     second(1000)
// })

//=====================================================//
// function myReverse(arr) {
//     let a = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//         a.push(arr[i])
//     }
//     return a
// }
// console.log(myReverse([1, 2, 3, 4]));

// for (let i = 0; i < new_arr.length; i++) {
//     if (new_arr[i] > new_arr[i + 1]) {
//         let a = new_arr[i]
//         let b = new_arr[i + 1]
//         new_arr[i] = b
//         new_arr[i + 1] = a
//     }
// }
// return new_arr;







// function sortDesconding(num_1) {
//     let new_arr = []
//     let global_arr = []
//     let str = num_1.toString()
//     str = str.split("")
//     str.sort((a, b) => a - b)
//     for (let j = str.length - 1; j >= 0; j--) {
//         global_arr.push(str[j])
//     }

//     return global_arr
// }
// console.log(sortDesconding(1365481354165));



// let obj = {
//     "joel": 20,
//     "baby": 15,
//     "john": 10
// }

// function afterNYears(arg_1, arg_2) {
//     for (let i in arg_1) {
//         arg_1[i] += arg_2
//     }
//     return arg_1
// }
// console.log(afterNYears(obj, 100));