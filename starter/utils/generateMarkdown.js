// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project_title}
          ## ${data.project_description}
          ## ${data.installation_instructions}
          ## ${data.usage_information}
          ## ${data.tests}
          ## ${data.contributing}
          ## ${data.questions}
          ## ${data.deployed_site_url}

# Yo
## Yo
## Yo
**Yo**
*Yo*
> Yo
1. Yo
2. Yo
3. Yo
- Yo
- Yo
- Yo
---
[title](https://www.yo.com)
![alt text](yo.jpg)

`;
}

module.exports = generateMarkdown;


