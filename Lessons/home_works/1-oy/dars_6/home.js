function a(min, max) {
    let arr = []
    for (let i = min; i <= max; i++) {
        arr.push(i)
    }
    if (min < max) {
        return arr
    } else {
        return 'The first number must be bigger than the second'
    }
}
// console.log(a(100, 1000));


function myIncludes(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i]
        if (num === element) {
            return true
        }
    }
    return false

};
// console.log(myIncludes([1, 2, 3, 4, 5, 6, 7, 8], 9));

function deleteElementFromArray(arr_1, arr_2) {
    let a = []
    let b = []
    for (let i of arr_1) {
        for (let j of arr_2) {
            if (i === j) {
                a.push(i)
            }
        }
    }
    return arr_1
};
console.log(deleteElementFromArray([5, 2, 7, 5, 6], [5, 6]));