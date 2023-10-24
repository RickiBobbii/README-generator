const fs = require('fs');
const inquirer = require('inquirer');
const lib = require('./lib');

//propt user for questions
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your README title? ',
      name: 'title',
      validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
    },
    {
      type: 'input',         
      message: 'What is the Description of your project (list ideas like motivation, why build it, what problem does it solve, and what you learned)? ',
      name: 'description',
      validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
    },
    {
      type: 'input',
      message: 'What Installations are needed? ',
      name: 'installation',
      validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
    },
    {
        type: 'input',
        message: 'Provide instuctions for Usage: ',
        name: 'usage',
        //validate checks if user input is null
        validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
    },
    {
        type: 'list',          
        message: 'What License will you be using? ',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License v3.0', 'None'],
    },
    {
        type: 'input',
        message: 'Whom, if any, Contributed to your project? ',
        name: 'credit',
        validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
    },
    {
        type: 'input',
        message: 'Provide Tests, if any, here: ',
        name: 'tests',
        validate: (input)=>{ if(input){return true} else {return 'Please input a value to continue.'}},
    },
    {
      type: 'input',
      message: 'What is your Github username for profile reference? ',
      name: 'github',
      validate: (input)=>{ if(input){return true} else {return 'Please input a username to continue.'}},
    },
    {
        type: 'input',
        message: 'Provide contact email for Questions: ',
        name: 'email',
        validate: (input)=>{ if(input){return true} else {return 'Please input an email to continue.'}},
    },
  ])
    //takes input answers and populates them into a README.md
    .then((answers) => {
        const readMe = 
`# ${answers.title}

## License

${lib.renderLicenseBadge(answers.license)}   

${answers.license}

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
//writes a file for the prompt answers populated into the readMe with a file name of generatedREADME.md
fs.writeFile('./generatedREADME.md', readMe, (err) => {
    if (err)
    console.log(err);
    console.log('Your README has been generated!');
  });
});

