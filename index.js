//been converted to esm package only due to node fetch version
import { rejects } from 'assert';
import inquirer from 'inquirer';
import { resolve } from 'path';
import fs from 'fs'
import {generateMarkdown} from './utils/generateMarkdown.js'

function init() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: `Write a description for your project!(What was your motivation?, Why did you build this project?, What problem does it solve? What did you learn?)`,
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please answer the question.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: "What are the steps required to install your project? (Provide a step-by-step description)",
            validate: InstallationInput => {
                if (InstallationInput) {
                    return true;
                } else {
                    console.log("Please describe the installation process.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: "Provide instructions and examples for use.",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please provide instructions.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: "How can others contribute to this project?",
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log("There's always room for improvement.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: "Provide examples how to run tests on your project.",
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log("Please provide examples.");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: "What type of license would you like to include? Please visit (https://choosealicense.com/licenses/) for more information on licenses.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: 'input',
            name: 'username',
            message: "What is your github username?",
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please provide your username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please provide your email.");
                    return false;
                }
            }
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(response) { 
    
        fs.writeFile('./dist/README.md', response, (err) => {
            if (err) {
                reject(err);
                return;
            }

            console.log('File Created!')
        });
    
};

// Function call to initialize app
init()
.then(response => generateMarkdown(response))
.then(response =>  writeToFile(response))



