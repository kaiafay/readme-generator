// import required packages 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// user prompt for questions 
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
        {
            type: 'input',
            name: 'title',
            message: "What is your project's name?"
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions for use.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What should the user know about making contributions to the repository?'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide instructions for testing.'
        }
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile('./README.md', generateMarkdown(data), err => {
        if (err) throw new Eror(err);

        console.log("README successfully generated!");
    })
};

questions().then((responses) => {
    console.log("Generating README...");
    writeToFile('README.md', generateMarkdown({...responses}));
});

