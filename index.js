const fs = require('fs');
const inquirer = require('inquirer');
const lib = require('./lib');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your README title? ',
      name: 'title',
    },
    {
      type: 'input',           //checkbox?
      message: 'What is the Description of your project (list ideas like motivation, why build it, what problem does it solve, and what you learned)? ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What Installations are needed? ',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instuctions for Usage: ',
        name: 'usage',
    },
    {
        type: 'list',          //checkbox?
        message: 'What License will you be using? ',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'None'],
    },
    {
        type: 'input',
        message: 'Whom, if any, Contributed to your project? ',
        name: 'credit',
    },
    {
        type: 'input',
        message: 'Provide Tests, if any, here: ',
        name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your Github username for profile reference? ',
      name: 'github',
    },
    {
        type: 'input',
        message: 'Provide contact email for Questions: ',
        name: 'email',
    },
  ])
    .then((answers) => {
        const readMe = 
`# ${answers.title}

## License

${answers.license} ${lib.renderLicenseBadge(answers.license)};

## Description

${answers.description}

## Table of Contents


- [Installation](#installation) 
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}


## Usage

${answers.usage}

## Credits

${answers.credit}



## Tests

${answers.tests}

## Questions

Github Profile for [${answers.github}](https://github.com/${answers.github})

Contact for questions: ${answers.email}
`;

fs.writeFile('./generatedREADME.md', readMe, (err) => {
    if (err)
    console.log(err);
    console.log('Your README has been generated!');
  });
});

