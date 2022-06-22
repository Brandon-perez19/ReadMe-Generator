// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseObj = [
  {
    license: "GNU AGPLv3",
    url: "(https://www.gnu.org/licenses/agpl-3.0)",
    badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]'
  },
  {
    license: "GNU GPLv3",
    url: "(https://www.gnu.org/licenses/gpl-3.0)",
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  },
  {
    license: "GNU LGPLv3",
    url: "(https://www.gnu.org/licenses/lgpl-3.0)",
    badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]'
  },
  {
    license: "Mozilla Public License 2.0",
    url: "(https://opensource.org/licenses/MPL-2.0)",
    badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
  },
  {
    license: "Apache License 2.0",
    url: "(https://opensource.org/licenses/Apache-2.0)",
    badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
  },
  {
    license: "MIT License",
    url: "(https://opensource.org/licenses/MIT)",
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  },
  {
    license: "Boost Software License 1.0",
    url: "(https://www.boost.org/LICENSE_1_0.txt)",
    badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]'
  },
  {
    license: "The Unlicense",
    url: "(http://unlicense.org/)",
    badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]'
  },
]

function renderLicenseBadge(license) {
  if (!license) {
    var licenseBadge = ''

  } else {
    const filterLicenseBadge = licenseObj.filter(results => {
      if(results.license === license) {
        var badgeResults= results.license
        return badgeResults
      }
    })
    var licenseBadge = (filterLicenseBadge[0].badge)
    return licenseBadge
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    var licenseLink = ""
    return licenseLink
  } else {
    const licenseLinkResult = licenseObj.filter(results => {
      if(results.license === license) {
        var linkResults= results.license
        return linkResults
      }
    })

    var licenseLink = (licenseLinkResult[0].url)
    return licenseLink
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    var licenseSection = ''
    return licenseSection;
  }
  else {
    var licenseBadge = renderLicenseBadge(license)
    var licenseLink = renderLicenseLink(license);
    var licenseSection = 
  `
  ## License <br>
  ${license} <br>
  ` 

    var licenseSection2 = 
  `
  ## Badges <br>
  ${licenseBadge}${licenseLink} <br>
  `
    
    return licenseSection + licenseSection2
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description <br>
  ${data.description}

  ## Table Of Contents <br>
  [Installation](#installation) <br>
  [Usage](#usage) <br>
  [Credits](#credits) <br>
  [License](#license)

  ## Installation <br>
  ${data.installation}

  ## Usage <br>
  ${data.usage}

  ## Questions <br>
  ${data.username} <br>
  github.com//${data.username} <br>
  Any questions please contact ${data.email} <br>

  ## How to Contribute <br>
  ${data.contribution}

  ## Tests <br>
  ${data.test}
  ` +  
  
  renderLicenseSection(data.license) ;
}

export {generateMarkdown}
