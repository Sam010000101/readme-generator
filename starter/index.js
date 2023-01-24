const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// array of questions for user
const questions = [
    {
        // When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
        type: 'input',
        name: 'github_username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email_address',
        message: 'What is your email address?',
    },
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
        name: 'deployed_site_url',
        message: 'Provide the URL for your deployed site',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select license',
        choices: [
            'MIT',
            'Apache License 2.0',
            'Academic Free License v3.0',
            'Artistic license 2.0',
            'Boost Software License 1.0',
            'BSD 2-clause "Simplified" license',
            'BSD 3-clause "New" or "Revised" license',
            'BSD 3-clause Clear license',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            'Eclipse Public License 1.0',
            'Eclipse Public License 2.0',
            'European Union Public License 1.1',
            'GNU Affero General Public License v3.0',
            'GNU General Public License family',
            'GNU General Public License v2.0',
            'GNU General Public License v3.0',
            'GNU Lesser General Public License family',
            'GNU Lesser General Public License v2.1',
            'GNU Lesser General Public License v3.0',
            'ISC',
            'LaTeX Project Public License v1.3c',
            'Microsoft Public License',
            'Mozilla Public License 2.0',
            'Open Software License 3.0',
            'PostgreSQL License',
            'SIL Open Font License 1.1',
            'University of Illinois/NCSA Open Source License',
            'The Unlicense',
            'zLib License',


        ],
    },
    {
        type: 'input',
        name: 'insert_license_text',
        message: 'Please insert license text here',
    },

];


// // When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// // https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba


const licenseBadges = [
    {
        license: 'MIT',
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    },
    {
        license: 'GPL v3',
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
];

// if (questions.license === 'MIT')
// console.log('MIT');
console.log(questions[9].choices);

// .then((response) =>
// {if (licenseB.badge == "MIT") 
//     licenseB.badge;
// }) 

// // function asignBadge(licenseBadges) {
// //     if (data.license == 'MIT') {
// //         badge == licenseBadges[0].badge
// //       console.log(badge);
// //     }
// // }

// const chosenLicenseBadge = licenseBadges.map(badge => {
//     // Copy the object being iterated over
//     const licenseB = { badge };
//     // Do everything else the same
//     if (licenseB.badge == "MIT") {
//         licenseB.badge;
//     } 
//     // Be sure to return the new obj, not the parameter
//     return licenseB;
//   });

// // licenseBadges.forEach(license => console.log(license.badge));

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
