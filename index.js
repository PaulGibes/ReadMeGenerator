const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// using path to choose the directory, cwd = current working directory. Output is the folder. README.md is the file name.
const desiredPath = path.join(process.cwd(), "Output", "README.md");

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Give a brief description of the project. (for more specific, guiding questions look at the index.js file) ",
    // What was the motivation?
    // Why did we build this?
    // What problem does it solve?
    // What did you learn?
    // What features are there?
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is it used for?",
  },
  // {
  //   type: "input",
  //   name: "image",
  //   message: "What is the screenshot location? (if none leave blank)",
  // },
  {
    type: "list",
    name: "license",
    message: "What license are you going to use?",
    choices: ["MIT", "ISC", "Perl", "None"],
  },
  {
    type: "input",
    name: "collaborators",
    message:
      "Do you have any collaborators for this project? (link their github profiles and any third party assets)",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the instructions for those who want to contribute?",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
  },
  {
    type: "input",
    name: "githubLink",
    message: "What is the link to your github profile?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

function writeToFile(answers) {
  fs.writeFile(desiredPath, generateMarkdown(answers), (err) =>
    err
      ? console.error(err)
      : console.log("Your file was created in the Output directory!")
  );
}

function init() {
  inquirer.prompt(questions).then((answers) => writeToFile(answers));
}

init();
// To create a README.md file, in the terminal type:
// node index.js
// and follow the instructions.
