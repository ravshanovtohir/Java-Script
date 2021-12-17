// class User {
//     id = 1
//     constructor(username, age, email, password, id) {
//         this.username = username;
//         this.age = age;
//         this.email = email;
//         this.password = password;
//         this.id = id;
//     }
//     checkUser() {
//         this.checkUserName()
//         return {
//             username: this.checkUserName(),
//             age: this.checkAge(),
//             email: this.checkEmail(),
//             password: this.checkPassword(),
//             id: this.id,

//         }
//     }
//     checkUserName() {
//         if (this.username.length < 2) {
//             throw new Error("Username is not valid")
//         }
//         return this.username.toLowerCase();
//     }
//     checkAge() {
//         if (this.age < 6) {
//             throw new Error("You are not allowed to enter")
//         }
//         return this.age
//     }
//     checkEmail() {
//         if (this.email.length < 5) {
//             throw new Error("Email is not defined")
//         }
//         return this.email.toLowerCase()
//     }
//     checkPassword() {
//         if (this.password.length < 7) {
//             throw new Error("Password is to short")
//         }
//         return this.password
//     }   

// }



// const user = new User("JohnDoe", 35, "JohnDoe@gmail.com", "zxcvvvvvcxz", 1)

// console.log(user);


// --------------------------------------------------------------

// function onlyNumbers(arr) {
//     let new_arr = []
//     for (let i in arr) {
//         if (typeof arr[i] === "number") {
//             new_arr.push(arr[i])
//         }
//     }
//     return new_arr
// }
// console.log(onlyNumbers(["arr", "arr", 5, 5, 5, 0.5]));



// function splitNumbers(num) {
//     let arr = []
//     son = num
//     num = num / 2
//     num = parseInt(num)
//     arr.push(num)
//     num = son - num
//     arr.push(num)
//     return arr
// }
// console.log(splitNumbers(-9));

// function isTrue(arg) {
//     let arr = []
//     arr = arg.split(" ")
//     arr = parseInt(arr)
//     return arr
// }
// console.log(isTrue("2=2"));

// function sortingByLength(arr) {
//     let sorted = arr.sort((a, b) => a.length - b.length)
//     return sorted
// }
// console.log(sortingByLength(["a", "bb", "cccc", "ddd"]));


// function sum(arr) {
//     let = new_arr = []
//     let result = 0
//     for (let i of arr) {
//         result = 0
//         result = i ** 3
//         new_arr.push(result)
//     }
//     let summed = 0
//     for (let i of new_arr) {
//         summed = summed + i
//     }
//     return summed
// }
// console.log(sum([2]));

class Player {
    constructor(playerName, age, height, weight) {
        this.playerName = playerName,
            this.age = age,
            this.height = height,
            this.weight = weight
    }

    // logUserInfo() {
    //     return `${this.playerName} is age ${this.age} /n ${this.playerName} is age ${this.height} /n ${this.playerName} is age ${this.weight}`
    // }

    getAge() {
        return `${this.playerName} is age ${this.age}`
    }
    getHeight() {
        return `${this.playerName} is  ${this.height}sm`
    }
    getWeight() {
        return `${this.playerName} weight ${this.weight}kg`
    }

}

const player = new Player("John Doe", 25, 175, 75)
console.log(player);