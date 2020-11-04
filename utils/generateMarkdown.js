// function to generate markdown for README

function generateMarkdown(data) {

  return `# ${data.ProjectTitle}
  
  ![github](https://img.shields.io/badge/license-${data.License}-blue.svg)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 

  ## Description
  ${data.Description}

  ## Installation
  ${data.Installation}

  ## Usage
  ${data.Usage}

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}
  
  ## Questions
  ${data.Questions}
`;
}
module.exports = generateMarkdown;
