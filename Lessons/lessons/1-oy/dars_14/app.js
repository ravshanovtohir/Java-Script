// let room = {
//     number: 23
// }

// let meetup = {
//     title: "Conference",
//     occupiedBy: [{ name: "John" }, { name: "Alice" }],
//     place: room
// }

// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(room, function replacer(key, value) {
//     return key == 'occupiedBy' ? undefined : value;
// }));


// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     console.log(value);
//     return value === 'self' ? undefined : key;
// }));



// console.log(room);
// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     // console.log(value);
//     return key === "self" || value === "occupiedBy" ? undefined : key[value]

// }));



let obj = {
    "squadName": "Super hero squad", // < here
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [{
            "name": "Molecule Man", // < here
            "age": 29, // < here
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast" // < here
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}




// let { squadName, members: [{ name, age, powers: [, , a] }] } = obj
// console.log(squadName, name, age, a);

//=================================================//

const chicken_leg = 2;
const cow_leg = 4;
const pig_leg = 4;

function animals(chicken, cow, pig) {
    let new_res = 0;
    new_res += chicken * chicken_leg
    new_res += cow * cow_leg
    new_res += pig * pig_leg
    return new_res
};
// console.log(animals(2, 3, 5));


//=================================================//

function sortByLength(arr) {
    for (let i in arr) {
        arr.sort((a, b) => a.length - b.length)
    }
    return arr
}
// console.log(sortByLength(["jung", "turing", "einstein"]));


//=================================================//

function isOmnipresent(arr, arg) {
    for (let j of arr) {
        if (j.includes(arg) == false) {
            return false
        }
    }
    return true
}
// console.log(isOmnipresent([
//     [5, 5],
//     [5, 6],
//     [4, 5]
// ], 4));

//=================================================//


function highLow(arg) {
    let new_arr = []
    let result = arg.split(" ")
    for (let i of result) {
        new_arr.push(parseInt(i))
    }
    return {
        min: Math.min(...new_arr),
        max: Math.max(...new_arr)
    }
};
// console.log(highLow("5 4 3 2 1"));

//=================================================//
let global_arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function missingNum(arr) {
    for (let i of arr) {
        for (let j of global_arr) {
            if (arr.includes(j) == false) {
                return j
            }
        }
    }
}
// console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));