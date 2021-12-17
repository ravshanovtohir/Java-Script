// let arr = []
// let arr_2 = new Array()

// console.log(typeof arr_2);

// let arr = new Array(5).fill(1)
// console.log(arr);
// arr = new Array(5).push(1)
// console.log(arr);

// arr = Object.getOwnPropertyNames(Array.prototype)
// console.log(arr);


// arr = ["olma", "nok"].join()
// console.log(arr);

// function tostring(arg) {
//     let a = new String()
//     for (let i of arg) {
//         a += i
//     }
//     return a
// };
// console.log(tostring(arr));

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let shifted = [1, 2, 3, 4]
// shifted.push(1, 1, 1)

// console.log(shifted);
// shifted.unshift(1, 1, 1)


// shifted.splice(2, 4)
// console.log(shifted);

// function mySplice(arg) {
//     arr.splice(2, 3)
//     return arr
// }

// console.log(mySplice(arr));

// function mysplice(arr, num, num_1) {
//     let arrr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {

//         }
//     }
//     return arrr
// }
// console.log(mysplice(arr, 2, 3));

// function remover(array, begin, end) {
//     let tempArray = [];

// if (end >= array.length) {
//     end = array.length;
//     console.log(end);
// }

//     for (let i = begin; i < end; i++) {
//         tempArray.push(array[i]);
//     }
//     return tempArray;
// }

// console.log(remover([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 3));


// function saveBeginAndEnd(arr, begin, end) {
//     let cut = arr.splice(begin, end)
//     return cut
// }
// console.log(saveBeginAndEnd([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 2));

function deletee(arr) {
    let arrr = []
    let element;
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        for (let j = 0; j < element.length; j++) {
            if (!(element == arr[j])) {
                arrr.push(arr[j])
            }
        }
    }
    return arrr
}
// console.log(deletee([1, 2, 3, 4, 5, 5]));

// console.log(Object.getOwnPropertyNames(Array.prototype));


// let a = ['A', 'B', 'A', 'C', 'B'];

// let b = a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
// })
// console.log(b);

// function uniqualvalues(arr) {
//     const unique = new Set(arr);
//     const res = [...unique]
//     return res
// }
// console.log(uniqualvalues([1, 2, 3, 4, 5, 5]));


function potato(str_1, str_2) {
    let a;
    let soz = str_1
    str_1 = str_1.split('')
    str_2 = str_2.split('')
    for (let i in str_1) {
        for (let j in str_2) {
            if (str_1[i] === (str_2[j])) {
                if (soz === str_2) {
                    a++
                }
            }
        }
    }
    return a
};
console.log(potato("potato", "potatoapplepotato"));