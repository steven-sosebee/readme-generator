const licenses = require("./Licenses");
const md= (projectName, userID, motivation, solution, lessonsLearned, installation, usage, demo, collaborators, thirdParty, tests, license) => {
return    `
![language](https://img.shields.io/github/languages/top/${userID}/${projectName})
![license](https://img.shields.io/github/license/${userID}/${projectName})


# ${projectName}

## Description

${motivation}

${solution}

${lessonsLearned}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributions](#contributions)
4. [Tests](#tests)
5. [Questions and Contact Info](#questions-and-contact-info)
6. [License](#license)

## Installation

${installation}

## Usage

${usage}

![demo](${demo})

## Contributions

${collaborators}

${thirdParty}

## Tests

${tests}

## Questions and Contact Info

Contact me at: https://github.com/${userID}

## License
${licenses.licenseType(license, userID, projectName)}
`
};
module.exports = { md };

