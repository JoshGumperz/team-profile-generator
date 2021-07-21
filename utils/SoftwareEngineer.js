const Employee = require("./employee")

class SoftwareEngineer extends Employee {
    constructor(name, id, email, github, position) {
        super(name, id, email, position)
        this.github = github
    }
    getRole(){
        return this.position
    }
    getGithub() {
        return this.github
    }
}

module.exports = SoftwareEngineer