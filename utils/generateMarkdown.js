// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const badgeByLicense = {
    "MIT": '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'WTFPL': '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
  };

  return badgeByLicense[license] || "";

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data?.badge?.[0])} 
  # ${data?.title}
  ## Description

  #### ${data?.description}
`;

}

//creating data to test
const testData = {
  title: 'test',
  description: 'test2',
  installation: 'test3',
  usage: 'test4',
  contribution: 'test5',
  test: 'test6',
  badge: [ 'MIT' ],
  GitHub: 'tst7',
  email: 'tets'
}
console.log(generateMarkdown(testData));

//exporting these stuff to be used
module.exports = generateMarkdown;
