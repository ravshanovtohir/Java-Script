// function createId(id) {
//     let ids = []
//     for (let i = 0; i < id; i++) {
//         ids.push(`${Date.now()}${i + 1}`)
//     }
//     return ids
// }

// function createUserName(ids) {
//     let userNames = []
//     for (let i = 0; i < ids; i++) {
//         userNames.push("user_" + [i + 1])
//     }

//     return userNames
// }


// function createemail(userNames) {
//     let email = []

//     for (let i = 0; i < userNames; i++) {
//         email.push("user_" + [i + 1] + "@gmail.com")
//     }
//     return email
// }

// function createPassword(userNames) {
//     let password = []
//     for (let i = 0; i < userNames; i++) {
//         let a = Math.floor(Math.random() * 1000000000)
//         password.push(a)
//     }
//     return password
// }

// function createUser(num) {
//     let user_id = createId(num)
//     let user_name = createUserName(num)
//     let user_email = createemail(num)
//     let user_password = createPassword(num)

//     let users = []

//     for (let i = 0; i < num; i++) {
//         users.push({
//             id: user_id[i],
//             UserName: user_name[i],
//             UserEmail: user_email[i],
//             UserPassword: user_password[i]    

//         })
//     }
//     return users
// }

// console.log(createUser(1));


function olma(arr, num) {
    for (let i in arr) {
        for (let j in arr) {
            if (arr[i] + arr[j] === num) {
                console.log(arr[i], arr[j])
            }
        }
    }
}
console.log(olma([1, 2, 3, 4, 5], 5));