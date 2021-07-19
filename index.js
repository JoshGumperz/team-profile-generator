const inquirer = require('inquirer')
const fs = require("fs")
const generateMarkdown = require("./utils/generateHtml")
const Employee = function(name, position, id, email)  {
    this.name = name
    this.position = position
    this.id = id
    this.email = email
}

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
        message: "Enter team Github:",
        name: "github",
    },
    {
        type: "input",
        message: "Enter team school:",
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
    }
    else if(position === "Software Engineer") {
        questions1.push(questions2[1])
    }
    else {
        questions1.push(questions2[2])
    }
    inquirer.prompt(questions1)
    .then ((data) => {
        employee1 = new Employee(data.name, position, data.id, data.email) 
        console.log(data.officeNum)
        console.log(employee1)
        // const readMePageContent = generateMarkdown(data)
        // fs.writeFile("./Generated-READMEs/README.md", readMePageContent, (err) =>
        // err ? console.log(err) : console.log("successfully created readme!")
        // )
    })
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
