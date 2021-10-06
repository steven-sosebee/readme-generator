const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions");
const license = require("./Licenses");
const markdown = require("./markdown");


console.log(questions.questionaire);
inquirer.prompt(questions.questionaire)
    .then((response) => {
        let licenseType = response.license;
        // console.log(response.projectName);
        // console.log(markdown.md("Test"));
        // console.log(markdown.md(response.projectName));
        fs.writeFile(`../../${response.projectName}_readme.md`, markdown.md(response.projectName, response.userID, response.instructions, licenseType), err => {
            err ? console.log("something went wrong..."): console.log("ReadMe file generate...")
        })
    });

