questionaire = [
    {
        type: "input",
        name: "projectName",
        message: "Project name:"
    },
    {
        type: "input",
        name: "userID",
        message: "Enter your GitHub user ID:"
    },
    {
        type: "input",
        name: "motivation",
        message: "What inspired you to develop this project?"
    },
    {
        type: "input",
        name: "solution",
        message: "Describe the problem this application solves:"
    },
    {
        type: "input",
        name: "lessons-learned",
        message: "What lessons did you learn?  What would you do differently?"
    },
    {
        type: "input",
        name: "installation",
        message: "How does a user install and run the application?"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how a user runs the application:"
    },
    {
        type: "input",
        name: "demo",
        message: "Path to video or image for demo:"
    },
    {
        type: "input",
        name: "collaborators",
        message: "List your collaborators:"
    },
    {
        type: "input",
        name: "third-party",
        message: "List any third-party assets used:"
    },
    {
        type: "input",
        name: "tests",
        message: "List any tests written:"
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license type:",
        choices: ["MIT", "GNU", "ISC"]
    }
]

module.exports = { questionaire };