// //===============1-mashq==============//
// function factorize(num) {
//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(factorize(17));


//===============3-mashq==============//
// function product(obj) {

//     let arr = []
//     let arr_1 = []
//     let res_obj = {}
//     for (let i in obj) {
//         arr.push(i)
//         arr_1.push(obj[i])
//         res_obj = Object.keys(arr_1)
//     }

//     for (let i of arr_1) {
//         res_obj = Object.keys(i)
//         for (let j of arr) {
//             res_obj = Object.values(j)
//         }
//     }
//     return res_obj

// }
// console.log(product({ 1: "a", 2: "b" }));


function a(str) {
    let nums = ["0", "2", "3", "4", "5", "6", "7", "8", "9"]
    let count = 0
    for (let i = 0; i <= str.length; i++) {
        for (let j of nums) {
            if (j === str[i]) {
                count++
            }
        }
    }
    return count
}
// console.log(a("25478"));


function b(obj, num) {
    global_arr = []
    let arr = []
    for (let i in obj) {
        arr = []

    }
    return {}
}
// console.log(b({ 1: 50, 2: 60, 3: 40 }, 15));



function highLow(str) {
    let new_arr = []
    let splited = str.split(" ")
    for (let i in splited) {
        new_arr.push(parseInt(splited[i]))
    }

    return {
        high: Math.max(...new_arr),
        low: Math.min(...new_arr)
    }

}
// console.log(highLow("1 2 3 4 5"));


function product(...arg) {


}

console.log(product((1, 2), (4, 5), (7, 8)));