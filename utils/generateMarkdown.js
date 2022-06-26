// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const badgeByLicense = {
    "MIT": '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'WTFPL': '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    'GNU GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'N/A': ''
  };

  return badgeByLicense[license] || "";

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const linkByLicense = {
    "MIT": '[MIT license](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[Apache license](https://opensource.org/licenses/Apache-2.0)',
    'WTFPL': '[WTFPL license](http://www.wtfpl.net/about/)',
    'GNU GPL 3.0': '[GNU GPL v3 license](https://www.gnu.org/licenses/gpl-3.0)',
    'N/A': 'nothing'
  };

  return linkByLicense[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
// if (data.badge !== 'N/A') {
//   return `## License
//   How ${data.badge} works`;
// }
//  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data?.badge)} 
  # ${data?.title}
  ### Description
  ${data?.description}

  ## Table of Contents
  - [Installation](###Installation)
  - [Usage](###Usage)
  - [Contribution](###Contribution)
  - [License](###License)
  - [Credits](###Credits)
  - [Questions](###Questions)

  ### Installation
  ${data?.installation}
  ### Usage
  ${data?.usage}
  ### Contribution
  ${data?.contribution}
  ### License
  More about ${renderLicenseLink(data?.badge)}
  ### Credits
  ${data?.credits}
  ### Questions
  github.com/${data?.GitHub}
  ${data?.email}
`;

}

//creating data to test
const testData = {
  title: 'Lego',
  description: 'about legos',
  installation: 'buy them',
  usage: '1000',
  contribution: 'something',
  test: 'something too',
  badge: ['MIT'],
  GitHub: 'legohere',
  email: 'lego@gmail.com'
}
console.log(generateMarkdown(testData));

//exporting these stuff to be used
module.exports = generateMarkdown;
