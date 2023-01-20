const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'project_description',
        message: 'Provide a description of your project',
    },
    {
        type: 'input',
        name: 'installation_instructions',
        message: 'Provide Installation Instructions for your project',
    },

    {
        type: 'input',
        name: 'usage_information',
        message: 'Provide Usage Information for your project',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide Contributor/s for your project',
    },

    {
        type: 'input',
        name: 'tests',
        message: 'Details of any testing requirements',
    },

    {
        type: 'input',
        name: 'questions',
        message: 'Where to direct any questions',
    },

    {
        type: 'input',
        name: 'deployed_site_url',
        message: 'Provide the URL for your deployed site',
    },

];
inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
});




// const tableOfContents = ["Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"];

// console.log(tableOfContents);

inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Select license',
        name: 'license',
        choices: [
            {
                name: 'MIT',
            },
            {
                name: 'Other',
            },
            {
                name: 'GPLv2',
            },
            {
                name: 'Apache',
            },]
    },
])
    .then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });




// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile

// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions

// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README

// Getting Started
// Here are some guidelines to help you get started:

//// Create a .gitignore file and include node_modules/ and .DS_Store/ so that your node_modules directory isn't tracked or uploaded to GitHub. Be sure to create your .gitignore file before installing any npm dependencies.

// Make sure that your repo includes a package.json with the required dependencies. You can create one by running npm init when you first set up the project, before installing any dependencies.



// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
