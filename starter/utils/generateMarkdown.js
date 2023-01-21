// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
  ## Description
  ${data.project_description}
 ## Table of Contents
 ### Installation
 ### Usage
 ### Tests
 ### Contributing
 ### Questions
 ### Deployed Site URL
 ### License

  ## Installation
  ${data.installation_instructions}
  ## Usage
  ${data.usage_information}
  ## Tests
  ${data.tests}
  ## Contributing
  ${data.contributing}
  ## Questions
  You can direct any questions that you may have regarding this project to;
  ${'https://github.com/' + data.github_username}
  ## Deployed Site URL
  ${data.deployed_site_url}
  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;


