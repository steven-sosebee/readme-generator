const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions");
const license = require("./Licenses");
const markdown = require("./markdown");

console.log("Welcome to the readme generator.");
console.log("Answer the questions below to being generating your readme file...");
inquirer.prompt(questions.questionaire)
    .then((response) => {
        let licenseType = response.license;
        // console.log(response.projectName);
        // console.log(markdown.md("Test"));
        // console.log(markdown.md(response.projectName));
        fs.writeFile(`../../readme.md`, markdown.md(response.projectName, response.userID, response.motivation, response.solution, response.lessonsLearned, response.installation, response.usage, response.demo, response.collaborators, response.thirdParty, response.tests, response.license), err => {
            err ? console.log("something went wrong..."): console.log("ReadMe file generated...")
        })
    });

