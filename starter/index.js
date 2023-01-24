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
        ]

    },
    {
        type: 'list',
        name: 'badges',
        message: 'Select license badge',
        choices: [
            '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            '[![License: Apache v2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            '[![License: Academic Free v3.0](https://https://img.shields.io/badge/License-AFL_3--Clause-blue.svg)](https://opensource.org/licenses/AFL-3.0)',
            '[![License: Artistic v2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)',
            '[![License: Boost v1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            '[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
            '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            '[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            'Creative Commons license family',
            'Creative Commons Zero v1.0 Universal',
            'Creative Commons Attribution 4.0',
            'Creative Commons Attribution Share Alike 4.0',
            'Do What The F*ck You Want To Public License',
            'Educational Community License v2.0',
            '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
            '[![License: Eclipse Public License 2.0](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)',
            'European Union Public License 1.1',
            '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
            'GNU General Public License family',
            '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
            '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            'GNU Lesser General Public License v2.1 (https://opensource.org/licenses/LGPL-2.1)',
            'GNU Lesser General Public License v3.0 (https://opensource.org/licenses/LGPL-3.0)',
            '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            'LaTeX Project Public License v1.3c (https://opensource.org/licenses/LPPL-1.3c)',
            'Microsoft Public License (https://opensource.org/licenses/MS-PL)',
            '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
            'Open Software License 3.0 (https://opensource.org/licenses/NPOSL-3.0)',
            'PostgreSQL License (https://opensource.org/licenses/PostgreSQL)',
            '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)',
            'University of Illinois/NCSA Open Source License (https://opensource.org/licenses/NCSA)',
            '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
            '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)',
        ],

    },
    {
        type: 'input',
        name: 'insert_license_text',
        message: 'Please insert license text here',
    },

];

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

