questionaire = [
    {
        type: "input",
        name: "projectName",
        message: "Project name:"
    },
    {
        type: "input",
        name: "instructions",
        message: "instructions:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license type:",
        choices: ["MIT", "GNU", "ISC"]
    },
    {
        type: "input",
        name: "userID",
        message: "Enter your GitHub user ID:"
    },
]

module.exports = { questionaire };