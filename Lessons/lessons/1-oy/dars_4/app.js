/*

    4-dars sinf vazifalari

*/

// console.log(Math.floor(Math.random() * 1 * 100));
// str = "olma"
// for (let i = 0; i <= str.length; i++) {
//     console.log(str[1].toUpperCase());
// }

// let a = "5555"
// console.log(parseInt(a));







// let firstName = ["Olim", "John", "Jakhongir", "Ibrohim", "Avaz", "Baxtiyor", "Tilla", "James", "Aziza", "E'zoza"]
// let lastName = ["komilov", "John", "Jakhongir", "Ibrohim", "Avaz", "Baxtiyor", "Tilla", "James", "Aziza", "E'zoza"]
// let phone = ["65865664", "54654646", "515611", "56464644", "56464646", "8484961", "654646464", "5664161231", "216165", "15421", "514616"]
// let email = ["olim.com", "john.com", "jakhongir.com", "ibrohim.com", "avaz.com", "baxtiyor.com", "yilla.com", "james.com", "aziza.com", "e'zoza.com"]
// let password = ["65865664", "54654646", "515611", "56464644", "56464646", "8484961", "654646464", "5664161231", "216165", "15421", "514616"]
// let arr_1 = []
// let obj_1 = {}

// function createUser(firstName, lastName, phone, email, password) {
//     return {
//         firstName,
//         lastName,
//         phone,
//         email,
//         password
//     }
// };
// let users = []
// for (let i = 0; i < 10; i++) {
//     users.push(createUser(firstName[Math.ceil(Math.random)])),
//         lastName[Math.round(Math.random())],
//         phone,
//         email[Math.round(Math.random())],
//         password[Math.round(Math.random())]
// }
// console.log(users);


// let names = { name: "John" };
// let age = { age: 20 };
// let job = { job: "Programmer" }
// let globalObj = {}

// function anyObjectsToOneObject(arg_1, arg_2, arg_3) {
//     let a = []
//     for (let i in names) {
//         a = Object.keys(names)
//         let = Object.values(names)
//         return a
//     }
// };
// console.log(anyObjectsToOneObject(names, age, job));


function addToObject(obj, key, value, index) {

    // Create a temp object and index variable
    var temp = {};
    var i = 0;

    // Loop through the original object
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {

            // If the indexes match, add the new item
            if (i === index && key && value) {
                temp[key] = value;
            }

            // Add the current item in the loop to the temp obj
            temp[prop] = obj[prop];

            // Increase the count
            i++;

        }
    }

    // If no index, add to the end
    if (!index && key && value) {
        temp[key] = value;
    }

    return temp;

};
// console.log(addToObject({ "afds"));