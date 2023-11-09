const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your Project Title?',
    },
    {
      type: 'input',
      message: 'Please provide a description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please provide installation instructions.',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please provide usage information.',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Please provide contribution guidelines.',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Please provide test instructions.',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'What is the License?',
      name: 'license',
      choices: ['MIT', 'Apache', 'Mozilla'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your e-mail address?',
      name: 'email',
    },
  ])
  .then((data) => {
    const text = generateMarkdown(data)

    fs.writeFile('README.md', text, (err) =>
      err ? console.log(err) : console.log('Success!'),

    )
  })
