// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What's your project title?",
        name: 'title',
        type: 'input',
        default: 'Project Untitled'
    },
    {
        message: "What's your project description?",
        name: 'description',
        type: 'input',
        default: 'all that what, why, and how jazz'
    },
    {
        message: "What're your installation instructions?",
        name: 'installation',
        type: 'input',
        default: 'Steps to install project'
    },
    {
        message: "What's your usage information",
        name: 'usage',
        type: 'input',
        default: 'Instructions for use'
    },
    {
        message: "What're your contribution guidelines",
        name: 'contribution',
        type: 'input',
        default: 'Contribution guideline here'
    },
    {
        message: "Give credits to resources used",
        name: 'credits',
        type: 'input',
        default: 'help from the web and really smart individuals'
    },
    {
        message: "Choose your badge license",
        name: 'badge',
        type: 'list',
        choices: [
            'MIT',
            'Apache 2.0',
            'WTFPL',
            'GNU GPL 3.0',
            'N/A'
        ]
    },
    {
        message: "What is your GitHub username",
        name: 'GitHub',
        type: 'input',
        default: 'some-name'
    },
    {
        message: "What is your email address",
        name: 'email',
        type: 'input',
        default: 'example@email.com'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, err => {
        if (err) {
            console.log(err);
        } else {
        console.log('done');
        };
    });
};

// TODO: Create a function to initialize app
// inquirer to ask the questions
function init() {
    console.log('im hit');
    inquirer.prompt(questions).then(answers => {
        console.log('---- this is the response from the users ----', answers);
        const markdown = generateMarkdown(answers);
        console.log('--- log this here ---', markdown);
        writeToFile('generated_readme/README', markdown);
    });
};

// Function call to initialize app
init();
