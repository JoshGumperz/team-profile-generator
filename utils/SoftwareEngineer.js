const Employee = require("./employee")

class SoftwareEngineer extends Employee {
    constructor(name, position, id, email, github) {
        super(name, position, id, email)
        this.github = github
    }
}

module.exports = SoftwareEngineer