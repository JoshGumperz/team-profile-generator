const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNum, position) {
        super(name, id, email, position)
        this.officeNum = officeNum
    }
    getRole(){
        return this.position
    }
    getSchool() {
        return this.officeNum
    }
}

module.exports = Manager