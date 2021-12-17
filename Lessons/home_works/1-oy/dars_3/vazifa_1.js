// let arr_2 = [11, 2, 3, 4, 5, 6, 78, 22, 2, 2, 1];

// function deleteArgumentsFromArray(arr_1, arg_1, arg_2) {
//     let natija = []
//     for (let i of arr_1) {
//         if (i !== arg_1 && i !== arg_2) {
//             natija.push(i)
//         }
//     }
//     return natija
// };

// console.log(deleteArgumentsFromArray(arr_2, 78, 11));



let arr_1 = [1, 25, 484, 84551, 84848, 5, 1, 7, 5, 8]

function deleteArgumentsFromArray(arr_2, arg_1, arg_2) {
    let natija = []
    for (let i of arr_1) {
        if (i !== arg_1 && i !== arg_2) {
            natija.push(i)
        }
    }
    return natija
};
console.log(deleteArgumentsFromArray(arr_1, 484, 4 k));