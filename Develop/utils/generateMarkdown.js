// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
 let question = [
    {
      type: 'list',
      name: 'badge',
      message: 'Select license badge',
      choices: [
        "APACHE 2.0",
        "BSD 3",
        "GVL-GPL 3.0",
        "MIT",
        "None"
      ]
    },
  ]
}
function init(){
  inquirer
  .prompt(question)
  .then((answers) => {
    return renderLicenseBadge(answers)
  });
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${init()}

`;
}

module.exports = generateMarkdown;
