const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, position, id, email, officeNum) {
        super(name, position, id, email)
        this.officeNum = officeNum
    }

}

module.exports = Manager