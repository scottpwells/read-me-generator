// function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.ProjectTitle}
  
  ![github](https://img.shields.io/badge/license-${data.License}-blue.svg)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
 

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
`;
}
module.exports = generateMarkdown;
