const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

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
        message: 'Describe the project',
    },
    {
        type: 'input',
        name: 'installation_instructions',
        message: 'Provide Installation Instructions for the project',
    },

    {
        type: 'input',
        name: 'usage_information',
        message: 'Provide Usage Information for the project',
    },

    {
        type: 'input',
        name: 'contributing',
        message: 'Provide details for the project Contributor/s',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide details of any test instructions',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Where should users direct their questions?',
    },

    {
        type: 'input',
        name: 'deployed_site_url',
        message: 'Provide the URL for your deployed site',
    },
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
    }

];


// // array for the table of contents
// const tableOfContents = ["Table of Contents", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"];
// // console.log(tableOfContents);

// inquirer.prompt([
//     {
//         type: 'checkbox',
//         message: 'Select license',
//         name: 'license',
//         choices: [
//             {
//                 name: 'MIT',
//             },
//             {
//                 name: 'Other',
//             },
//             {
//                 name: 'GPLv2',
//             },
//             {
//                 name: 'Apache',
//             },]
//     },
// ])
//     .then((answers) => {
//         console.log(JSON.stringify(answers, null, '  '));
//     });






// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile

// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions

// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README



// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,
        (err) => err ? console.log(err) : console.log('Success!'));
        console.log(data.title);
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response));
            console.log(response);
        }
        );
    }


// function call to initialize program
init();
