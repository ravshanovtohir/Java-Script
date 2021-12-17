// function arrayObj(arr) {
//     let obj_1 = {}
//     for (let i of arr) {
//         obj_1[i[0]] = i[1]
//     }
//     return obj_1
// };
// console.log(arrayObj([
//     ["a", 1],
//     ["b", 2],
//     ["c", 5],
//     ["44", "Afd"],
//     ["Asdfasdf", 456454464564]
// ]));


const arr_2 = [11, 2, 3, 4, 5, 6, 78, 22, 2, 2, 1];

function deleteArgumentsFromArray(arr_1, arg_1, arg_2) {
    let natija = []
    for (let i of arr_1) {
        if (i !== arg_1 && i !== arg_2) {
            natija.push(i)
        }
    }
    return natija
};

console.log(deleteArgumentsFromArray(arr_2, 2, 2));