// getDateClient --> firstName, lastName, Addres
//getDataToAmin() --> full
//getInfoToModeraor() --> id, lastName, lastName, adress, email, phone, password

const il = require("./style")

module.exports = class user {
    constructor(firstName, lastName, addres, email, phone) {
        this.id = il.createId()
        this.firstName = firstName,
            this.lastName = lastName,
            this.addres = addres,
            this.email = email,
            this.phone = phone,
            this.password = il.createPasword()
        this.time = il.createTime()
    }

    getDateClient() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            adress: this.addres
        }
    }

    getDataAdmin() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            adress: this.addres,
            email: this.email,
            phone: this.phone,
            password: this.password,
            time: this.time
        }
    }

    getInfoToModerator() {
        return {
            id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            adress: this.addres,
            email: this.email,
            phone: this.phone,
            time: this.time
        }
    }
}