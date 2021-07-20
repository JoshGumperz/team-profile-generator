const inquirer = require('inquirer')
const fs = require("fs")
const generateHtml = require("./utils/generateHtml")
const Manager = require('./utils/Manager')
const SoftwareEngineer = require('./utils/SoftwareEngineer')
const Intern = require('./utils/Intern')

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
            return
        }
    })
}
init();

function displayPromt(position) {
    if(position === "Manager") {
        questions1.push(questions2[0])
        inquirer.prompt(questions1)
        .then ((data) => {
            new Manager(data.name, position, data.id, data.email, data.officeNum) 
        })
    }
    else if(position === "Software Engineer") {
        questions1.push(questions2[1])
        inquirer.prompt(questions1)
        .then ((data) => {
            employee1 = new SoftwareEngineer(data.name, position, data.id, data.email, data.github) 
            console.log(employee1)
        })
    }
    else {
        questions1.push(questions2[2])
        inquirer.prompt(questions1)
        .then ((data) => {
            employee1 = new Intern(data.name, position, data.id, data.email, data.school) 
            console.log(employee1)
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
