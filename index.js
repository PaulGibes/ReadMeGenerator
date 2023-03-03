// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const desiredPath = path.join(process.cwd(), "Output", "ReadMe.md");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a brief description.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "What is it used for?",
  },
  {
    type: "list",
    name: "license",
    message: "What license are you going to use?",
    choices: ["MIT", "ISC", "Perl", "None"],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Instructions for contributing?",
  },
  {
    type: "input",
    name: "tests",
    message: "Instructions for tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "How to contact if you have questions",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(desiredPath, generateMarkdown(answers), (err) =>
//     err
//       ? console.error(err)
//       : console.log("Your file was created in the Output directory!")
//   );
// }

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) =>
      fs.writeFile(desiredPath, generateMarkdown(answers), (err) =>
        err
          ? console.error(err)
          : console.log("Your file was created in the Output directory!")
      )
    );
}

// Function call to initialize app
init();
