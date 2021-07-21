const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school, position) {
        super(name, id, email, position)
        this.school = school
    }
    getRole() {
        return this.position
    }
    getSchool() {
        return this.school
    }
}

module.exports = Intern