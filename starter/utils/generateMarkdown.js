// function to generate markdown for README
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
function generateMarkdown(data) {
  return `# ${data.project_title}
  ## Description
  ${data.project_description}
 ## Table of Contents
 * [Installation](#installation) 
 * [Usage](#usage) 
 * [Tests](#tests) 
 * [Contributing](#contributing) 
 * [Questions](#questions) 
 * [Deployed Site URL](#deployed-site-url) 
 * [License](#license) 

  ## Installation
  ${data.installation_instructions}
  ## Usage
  ${data.usage_information}
  ## Tests
  ${data.tests}
  ## Contributing
  ${data.contributing}
  ## Questions
  You can direct any questions that you may have regarding this project to; \n
  ${'* ' + 'GitHub: ' + '[' + data.github_username + ']' + '(https://github.com/' + data.github_username +')'} \n
  ${'* ' + 'Email: ' + data.email_address}
  ## Deployed Site URL
  ${data.deployed_site_url}
  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;


