const inquirer = require('inquirer')
const fs = require("fs")
const generateHtml = require("./generateHtml/generateMain")
const managerHtml = require("./generateHtml/managerHtml")
const engineerHtml = require("./generateHtml/engineerHtml")
const internHtml = require("./generateHtml/internHtml")
const Manager = require('./utils/Manager')
const SoftwareEngineer = require('./utils/SoftwareEngineer')
const Intern = require('./utils/Intern')
const employeeArrayTemplate = []
const employees = []

const questions1 = [
    {
        type: "input",
        message: "Enter team member name:",
        name: "name",
    },
    {
        type: "input",
        message: "Enter team member ID #:",
        name: "id",
    },
    {
        type: "input",
        message: "Enter team member email:",
        name: "email",
    }
]
const questions2 = [
    {
        type: "input",
        message: "Enter team member office number:",
        name: "officeNum",
    },
    {
        type: "input",
        message: "Enter team member Github:",
        name: "github",
    },
    {
        type: "input",
        message: "Enter team member school:",
        name: "school",
    }
]

function init() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Would you like to add a team member?",
            name: "init",
            choices: ["yes", "no"]
        },
    ])
    .then((data) => {
        if (data.init === "yes") {
            displayInitialPrompt()
        }
        else {
            if(employees.length > 0) {
                renderHtml()
            } else {
                return
            }
        }
    })
}
init();

function displayPromt(position) {
    if(position === "Manager") {
        questions1.push(questions2[0])
        inquirer.prompt(questions1)
        .then ((data) => {
            employees.push(new Manager(ddata.name, data.id, data.email, data.officeNum, position)) 
            questions1.splice(3, 1)
            init()
        })
    }
    else if(position === "Software Engineer") {
        questions1.push(questions2[1])
        inquirer.prompt(questions1)
        .then ((data) => {
            employees.push(new SoftwareEngineer(data.name, data.id, data.email, data.github, position)) 
            questions1.splice(3, 1)
            init()
        })
    }
    else {
        questions1.push(questions2[2])
        inquirer.prompt(questions1)
        .then ((data) => {
            employees.push(new Intern(data.name, data.id, data.email, data.school, position)) 
            questions1.splice(3, 1)
            init()
        })
    }
}

function displayInitialPrompt() {
    inquirer
    .prompt([
        {
            type: "list",
            message: "Enter team member position:",
            name: "position",
            choices: ["Manager", "Software Engineer", "Intern"]
        }
    ])
    .then((data) => {
        displayPromt(data.position)
    })
}

function renderHtml() {
    for (var i = 0; i < employees.length; i++){
        if (employees[i].position === "Manager") {
            const employee1 = new Manager(employees[i].name, employees[i].id, employees[i].email, employees[i].officeNum, employees[i].position) 
            const pageContent = managerHtml(employee1)
            employeeArrayTemplate.push(pageContent)
        }
        else if (employees[i].position === "Software Engineer") {
            const employee1 = new SoftwareEngineer(employees[i].name, employees[i].id, employees[i].email, employees[i].github, employees[i].position) 
            const pageContent = engineerHtml(employee1)
            employeeArrayTemplate.push(pageContent)
        }
        else {
            const employee1 = new Intern(employees[i].name, employees[i].id, employees[i].email, employees[i].school, employees[i].position) 
            const pageContent = internHtml(employee1)
            employeeArrayTemplate.push(pageContent)
        }
    }
    const finalTemplate = employeeArrayTemplate.join("")
    const placeHolder = generateHtml(finalTemplate)
    fs.writeFile("./Generated-Web-Page/team-profile.html", placeHolder, (err) =>
            err ? console.log(err) : console.log("successfully created Web Page!"))
}

