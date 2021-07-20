const inquirer = require('inquirer')
const fs = require("fs")
const generateHtml = require("./generateHtml/generateMain")
const Manager = require('./utils/Manager')
const SoftwareEngineer = require('./utils/SoftwareEngineer')
const Intern = require('./utils/Intern')
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
            employees.push(new Manager(data.name, position, data.id, data.email, data.officeNum)) 
            questions1.splice(3, 1)
            init()
        })
    }
    else if(position === "Software Engineer") {
        questions1.push(questions2[1])
        inquirer.prompt(questions1)
        .then ((data) => {
            employees.push(new SoftwareEngineer(data.name, position, data.id, data.email, data.github)) 
            questions1.splice(3, 1)
            init()
        })
    }
    else {
        questions1.push(questions2[2])
        inquirer.prompt(questions1)
        .then ((data) => {
            employees.push(new Intern(data.name, position, data.id, data.email, data.school)) 
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
            const employee1 = new Manager(employees[i].name, employees[i].position, employees[i].id, employees[i].email, employees[i].officeNum) 
            const readMePageContent = generateHtml(employee1)
            fs.writeFile("./Generated-Web-Page/team-profile.html", readMePageContent, (err) =>
            err ? console.log(err) : console.log("successfully created Web Page!"))
        }
        else if (employees[i].position === "Software Engineer") {
            const employee1 = new SoftwareEngineer(employees[i].name, employees[i].position, employees[i].id, employees[i].email, employees[i].github) 
            const readMePageContent = generateHtml(employee1)
            fs.writeFile("./Generated-Web-Page/team-profile.html", readMePageContent, (err) =>
            err ? console.log(err) : console.log("successfully created Web Page!"))
        }
        else {
            const employee1 = new Intern(employees[i].name, employees[i].position, employees[i].id, employees[i].email,
            employees[i].school) 
            const readMePageContent = generateHtml(employee1)
            fs.writeFile("./Generated-Web-Page/team-profile.html", readMePageContent, (err) =>
            err ? console.log(err) : console.log("successfully created Web Page!"))
        }
    }
}