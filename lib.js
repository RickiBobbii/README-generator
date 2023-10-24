const fs = require('fs');
const inquirer = require('inquirer');


//function to render license badge and associated clickable link to license documentation
function renderLicenseBadge(license) {
    let badge = '';
    if (license === 'MIT License') {
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if(license === 'Apache License 2.0'){
        badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    } else if(license === 'GNU General Public License v3.0'){
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else {
        badge = '';
    }
    return badge;
}
//export functions for use in index.js
module.exports = {
    renderLicenseBadge,
}
