// function to generate markdown for README
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
function generateMarkdown(data) {
  return `# ${data.project_title}
  
  ${data.badges}

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
  ${'- ' + 'GitHub: ' + '[' + data.github_username + ']' + '(https://github.com/' + data.github_username +')'}
  ${'- ' + 'Email: ' + data.email_address}
  ## Deployed Site URL
  ${data.deployed_site_url}
  ## License
  This project is covered by the ${data.license} license. \n
  ${data.insert_license_text}

`;
}

module.exports = generateMarkdown;


