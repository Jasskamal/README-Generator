// TODO: Include packages needed for this application
//const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'describe your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How to install project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Add screen shot or video link showing appearance and functionality of project:',
      },
      {
        type: 'list',
        name: 'licenseBadge',
        message: 'Select your license badge',
        choices:[
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD 2-Clause 'Simplified' License",
          "Mozilla Public License 2.0"
        ]
      },
      {
        type: 'input',
        name: 'copyrightOwner',
        message: 'Enter the name of copyright Owner of project:',
      },
      {
        type: 'input',
        name: 'licenseLink',
        message: 'Enter the link of License',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Enter the name of contributors of project:',
      },
      {
        type: 'input',
        name: 'deployed',
        message: 'Add deployed application link:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Add github repository link:',
      },
]


// TODO: Create a function to write README file
const writeToFile = ({ title, description, installation, usage, copyrightOwner, licenseBadge, licenseLink, contributors, deployed, github }) =>
    `# ${title}
    
## Description
${description}
    
## Installation
${installation}
    
## Usage
The following image shows the web application's appearance and functionality:

![image](${usage})

## License
Copyright [2022] [${copyrightOwner}]

Licensed under the ${licenseBadge} (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at 

    ${licenseLink}

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
    
## Contributors
${contributors}
    
## Github and Link to Deployed Application:
Application: ${deployed}
<br>
Github: ${github}`;

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    const readmePageContent = writeToFile(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });
}

// Function call to initialize app
init();
