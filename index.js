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
        default: 'About my project goes here'
    },
    {
        message: "What're your installation instructions?",
        name: 'installation',
        type: 'input',
        default: 'How to install here'
    },
    {
        message: "What's your usage information",
        name: 'usage',
        type: 'input',
        default: 'Usage info here'
    },
    {
        message: "What're your contribution guidelines",
        name: 'contribution',
        type: 'input',
        default: 'contribution guideline here'
    },
    {
        message: "What're your test instructions",
        name: 'test',
        type: 'input',
        default: 'test instructions here'
    },
    {
        message: "Choose your badge license",
        name: 'badge',
        type: 'checkbox',
        choices: [
            'MIT',
            'Apache',
        ],
        default: 'badge unknown'
    },
    {
        message: "What is your GitHub username",
        name: 'GitHub',
        type: 'input',
        default: 'GitHub name N/A'
    },
    {
        message: "What is your email address",
        name: 'email',
        type: 'input',
        default: 'no email'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, err => {
        if (err) {
            console.log(err);
        }
        console.log('done');
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log('---- this is the response from the users ----', answers);
        const markdown = generateMarkdown(answers)
        console.log('--- log this here ---', markdown);
        // writeToFile('README', markdown)
    });
};

// Function call to initialize app
// init();
