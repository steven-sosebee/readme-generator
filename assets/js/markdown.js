const licenses = require("./Licenses");
const md= (project, ID, description, license) => {
return    `
![badges](https://img.shields.io/github/languages/top/${ID}/${project})

# ${project}

## Description
${description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributions](#contributions)
5. [Tests](#tests)
6. [Questions and Contact Info](#questions-and-contact-info)

## Installation

## Usage

## License
${licenses.licenseType(license, ID, project)}
## Contributions

## Tests

## Questions and Contact Info
`
};
module.exports = { md };

