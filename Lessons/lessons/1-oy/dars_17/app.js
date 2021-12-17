// async function myAsync() {
//     return "I am resolved"
// }
// myAsync().then((value) => {
//     console.log(value);
// })



// async function myAsync_2() {
//     let as_func = await myAsync()
//     return as_func
// }
// myAsync_2().then((value) => {
//     console.log(value);
// })




// function prom() {
//     return Promise.resolve("resolved")
// }
// prom().then((value) => {
//     console.log(value);
// })


// import fetch from "node-fetch"

// let urls = [
//     'https://api.github.com/users/ravshanovtohir'
// ]

// let promises = urls.map(url => fetch(url));

// Promise.allSettled(promises).then(arr => {
//     console.log(arr[0].value);
// })

//==================================================//

async function myAsync() {
    return "I am resolved"
}
myAsync().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function myAsync_1() {
    return "I am resolved"
}
myAsync_1().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function myAsync_2() {
    return "I am resolved"
}
myAsync_2().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function myAsync_3() {
    return "I am resolved"
}
myAsync_3().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function myAsync_4() {
    return "I am resolved"
}
myAsync_4().then((value) => {
    console.log(value);
})

//==================================================//

function prom() {
    return Promise.resolve("resolved")
}
prom().then((value) => {
    console.log(value);
})

//-------------------------------------------//

function prom_1() {
    return Promise.resolve("resolved")
}
prom_1().then((value) => {
    console.log(value);
})

//-------------------------------------------//

function prom_2() {
    return Promise.resolve("resolved")
}
prom_2().then((value) => {
    console.log(value);
})

//-------------------------------------------//

function prom_3() {
    return Promise.resolve("resolved")
}
prom_3().then((value) => {
    console.log(value);
})

//-------------------------------------------//

function prom_4() {
    return Promise.resolve("resolved")
}
prom_4().then((value) => {
    console.log(value);
})

//==================================================//

async function func() {
    let as_func = await myAsync()
    return as_func
}
func().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function func1() {
    let as_func = await myAsync()
    return as_func
}
func1().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function func2() {
    let as_func = await myAsync()
    return as_func
}
func2().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function func3() {
    let as_func = await myAsync()
    return as_func
}
func3().then((value) => {
    console.log(value);
})

//-------------------------------------------//

async function func4() {
    let as_func = await myAsync()
    return as_func
}
func4().then((value) => {
    console.log(value);
})

console.log(true + false);