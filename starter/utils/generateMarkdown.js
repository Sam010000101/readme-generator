// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
  ## Description
  ${data.project_description}
  ## Installation
  ${data.installation_instructions}
  ## Usage
  ${data.usage_information}
  ## Tests
  ${data.tests}
  ## Contributing
  ${data.contributing}
  ## Questions
  ${data.questions}
  ## Deployed Site URL
  ${data.deployed_site_url}
  ## License
  ${data.license}

`;
}

module.exports = generateMarkdown;


