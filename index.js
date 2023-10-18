const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your README title? ',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What the Description of your project? ',
        name: 'description',
      },
    {
      type: 'input',           //checkbox?
      message: 'Check if you want Table of Contents? ',
      name: 'contents',
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
        type: 'input',          //checkbox?
        message: 'What License will you be using? ',
        name: 'license',
    },
    {
        type: 'input',
        message: 'Whom, if any, Contributed to your project? ',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Provide Tests, if any, here: ',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Provide contact email for Questions: ',
        name: 'questions',
    },
  ])
    .then((answers) => {
        const readMe = 
`# ${answers.title}

## Description

${answers.description}

- Motivation?
- Why build this project?
- What problem does this solve?
- What did you learn?

## Table of Contents


- [Installation](#installation) 
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${answers.installation}


## Usage

${answers.usage}

Screenshot

## Credits

${answers.contribute}

-List collaborators, GitHub links if applicable.

-List third-party assets and links.

-List tutorials and links.

## License


## Badges


## Features


## How to Contribute



## Tests

${answers.tests}

## Questions

Email link for questions ${answers.questions}
`;

fs.writeFile('./generatedREADME.md', readMe, (err) => {
    if (err)
    console.log(err);
    console.log('File has been saved!');
  });
});