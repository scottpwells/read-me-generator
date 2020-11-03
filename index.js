const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const path = require("path")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "Github",
        message: "What is your username?",
    },
    {
        type: "input",
        name: "ProjectTitle",
        message: "What is your project title?",
    },
   
    {
        type: "input",
        name:"description",
        message: "Please add a description of your project?",
            },
    {
        type: "input",
        name:"tableContents",
        message:"Do your want to add a table of contents section(type section title)?",
    },
    {
        type: "input",
        name:"installation",
        message:"Do you want to add a installation section(type section title)?",
    },
    {
        type: "input",
        name:"usage",
        message:"Do you want to add a usage section(type section title)?",
    },

    {
        type: "input",
        name:"contribution",
        message:"Do you want to add a contribution section(type section title)?",
    },
    {
        type: "input",
        name:"tests",
        message:"Do you want to add a tests section(type section title)?",
    },
    {
        type: "input",
        name:"questions",
        message:"Do you want to add a questions section(type section title)?",
    },
    {
        type: "input",
        name:"license",
        message:"Do you want to add a license section(type section title)?",
    },

    {
        type: "list",
        name: "License",
        message: "What is your project license type?",
        choices: [
            {
                name: "MIT",
                value: "MIT"
            },
            {
                name: "APACHE 2.0",
                value: "APACHE%202.0"
            },
        ]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    prompt(questions).then((answers) => {
        console.log(answers)
        writeToFile("README.md", generateMarkdown({ ...answers }))
    })
}

// function call to initialize program
init();
