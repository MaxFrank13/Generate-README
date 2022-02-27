const inquirer = require('inquirer')
const fs = require('fs')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of the project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter a description:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions:',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What can this project be used for?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How can someone contribute to this project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Record any tests used for the project:',
            name: 'tests'
        },
        {
            type: 'list',
            message: "Choose a license:",
            choices: ["MIT License", "Apache License 2.0", "GNU General Public License v2.0", "Boost Software License 1.0", "BSD 2-Clause License", "BSD 3-Clause 'New' License", "Creative Commons Zero v1.0 Universal License", "Eclipse Public License 2.0", "Mozilla Public License 2.0"],
            name: "license"
        },
        {
            type: 'input',
            message: 'Enter Github username:',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Enter email:',
            name: 'email'
        }
    ])
    .then(({ title, description, installation, usage, contributing, tests, license, github, email }) => {
        let licenseBadge;
        switch (license) {
            case "MIT License":
                licenseBadge = "License-MIT-yellow.svg)](https://opensource.org/licenses/MIT";
                break;
            case "Apache License 2.0":
                licenseBadge = "License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0";
                break;
            case "GNU General Public License v2.0":
                licenseBadge = "License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
                break;
            case "Boost Software License 1.0":
                licenseBadge = "License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt";
                break;
            case "BSD 2-Clause License":
                licenseBadge = "License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause";
                break;
            case "BSD 3-Clause 'New' License":
                licenseBadge = "License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause";
                break;
            case "Creative Commons Zero v1.0 Universal":
                licenseBadge = "License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/";
                break;
            case "Eclipse Public License 2.0":
                licenseBadge = "License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0";
                break;
            case "Mozilla Public License 2.0":
                licenseBadge = "License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0"
                break;
        }
        const readmeString = `
# ${title}

[![License Badge](https://img.shields.io/badge/${licenseBadge})

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Tests

${tests}

## License

This project is covered by the ${license}. Click the badge at the top of the README for more information.

## Questions

[My Github](https://github.com/${github})

Contact me at ${email} with any questions
`
        fs.writeFile("./generated/README.md", readmeString, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    });