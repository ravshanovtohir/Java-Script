// getDateClient --> firstName, lastName, Addres
//getDataToAmin() --> full
//getInfoToModeraor() --> id, lastName, lastName, adress, email, phone, password

let idd = require("./app")

class User {
    constructor(firstName, lastName, adress, email, phone, password) {
        this.id = idd.createId()
        this.firstName = firstName;
        this.lastName = lastName;
        this.adress = adress;
        this.email = email
        this.phone = phone;
        this.password = password;

    }
    getDataToClient() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            adress: this.adress
        }
    }

    getDataToAdmin() {
        return {
            Id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            adress: this.adress,
            email: this.email,
            phone: this.phone,
            password: this.password
        }
    }

    getInfoModerator() {

        return {
            Id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            adress: this.adress,
            email: this.email,
            phone: this.phone
        }
    }

}


module.exports = User