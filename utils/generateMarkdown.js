// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    for(let i = 0; i < license.length; i++) {
      license[i]

      if(license[i] === "MIT") {
        // do something
      } else {
        // return nothing
      }
    }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description

  #### ${data.description}
`;
}

module.exports = generateMarkdown;
