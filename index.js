const { prompt } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const path = require("path")
// array of questions for user
const questions = [
    {
        type: "input",
        name: "Github",
        message: "Please enter your Github User Name.",
    },

    {
        type: "input",
        name: "ProjectTitle",
        message: "Please enter your project title.",
    },
   
    {
        type: "input",
        name:"Description",
        message: "Please enter a description of your project.",
            },

    {
        type: "input",
        name:"Installation",
        message:"Please enter any installation instructions.",
    },

    {
        type: "input",
        name:"Usage",
        message:"Please enter your user story.",
    },

    {
        type: "input",
        name:"Contributing",
        message:"Please enter any contributing guidelines.",
        
    },

    {
        type: "input",
        name:"Tests",
        message:"Please enter any test for your application.",
    },

    {
        type: "input",
        name:"Questions",
        message:"Please enter your contact information for questions.",
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
