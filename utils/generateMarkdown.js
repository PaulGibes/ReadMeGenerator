function renderLicense(license) {
  switch (license) {
    case "MIT":
      // don't need a break if there is a return
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "Perl":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    default:
      return "";
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.license !== "None" ? "- [License](#license)" : ""}
  - [Collaborators](#collaborators)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

![Screenshot of the deployed project](./Assets/images/screenshotLocation.PNG)

${data.license !== "None" ? "## License" : ""}
${renderLicense(data.license)}

## Collaborators
${data.collaborators}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions don't hesitate to contact me:

Github: ${data.githubLink}

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
