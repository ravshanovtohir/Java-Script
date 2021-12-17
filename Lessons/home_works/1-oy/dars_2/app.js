//Uy vazifa

//---------------1-masala---------------//
function findMax(num_1, num_2) {
    if (num_1 > num_2) {
        return `${num_1} katta`
    } else if (num_1 === num_2) {
        return "teng"
    } else {
        return `${num_2} katta`
    }
};
// console.log(findMax(32, 32));

//---------------2-masala---------------//
function fizzBuzz(num) {
    if (typeof(num) != 'number') {
        return "NaN"
    } else if (num % 3 == 0 && num % 5 == 0) {
        return "FizzBuzz"
    } else if (num % 3 == 0) {
        return "Fizz"
    } else if (num % 5 == 0) {
        return "Buzz"
    } else if (num % 3 !== 0 && num % 5 !== 0) {
        return num
    }

};
// console.log(fizzBuzz(15));

//---------------3-masala---------------//

function Landscape(boyi_1, eni_1) {
    if (boyi_1 > eni_1) {
        return "Portreit"
    } else {
        return "Landscape"
    }
};
console.log(Landscape(5, 6));

//---------------4-masala---------------//
function showNumbers(arr_1) {
    for (let i of arr_1) {
        return i
    }
};
console.log(showNumbers([1, 3, 4, 5, 6, 7]));