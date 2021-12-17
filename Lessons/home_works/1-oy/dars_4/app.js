let names = { name: "John" };
let age = { age: 20 };
let job = { job: "Programmer" }
let data = new Date()
let time = { time: data }
let globalObj = {}

function toObj(arg_1, arg_2, arg_3) {
    globalObj = Object.assign(names, age, job, time)
    return globalObj
}
console.log(toObj(names, age, job));


function minusPlus(obj_1) {
    let item;
    let result;
    for (let i in obj_1) {
        item = Object.values(obj_1)
    }
    for (let i in item) {
        result = item[0] - item[1]
    }
    return result
}
// console.log(minusPlus({ plus: 10, minus: 2 }));


function sizeOfBox(obj_2) {
    let itemm_1;
    let natija;
    for (let i in obj_2) {
        itemm_1 = Object.values(obj_2)
    }
    for (let i in itemm_1) {
        natija = itemm_1[0] * itemm_1[1] * itemm_1[2]
    }
    return natija
};
// console.log(sizeOfBox({ width: 10, length: 3, height: 3 }));

function toUp(arg) {
    let natija = 0
    for (let i = 1; i <= arg; i++) {
        natija = natija + i
    }
    return natija
};
// console.log(toUp(13));