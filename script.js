const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your Project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief Description of your Project",
    },
    {
      type: "input",
      name: "table",
      message: "list out the table of contents",
    },
    {
      type: "input",
      name: "installation",
      message: "list out you installation instructions",
    },
    {
      type: "input",
      name: "usage",
      message: "list out your usage instructions",
    },
    {
      type: "input",
      name: "pic",
      message:
        "If you have added a photo to the assets folder please put the file name here",
    },
    {
      type: "input",
      name: "alt",
      message: "please list the alt text for your image here",
    },
    {
      type: "input",
      name: "credits",
      message: "please list out your credits",
    },
    {
      type: "input",
      name: "tests",
      message: "please list the tests needed/have been done for the program",
    },
    {
      type: "input",
      name: "contributing",
      message: "please list how others can contribute to this project",
    },
    {
      type: "input",
      name: "questions",
      message:
        "what is the best email to reach you at if someone has questions about the project?",
    },
    {
      type: "input",
      name: "liscense",
      message: "please list out your liscence",
    },
  ])
  .then((data) => {
    var readme = `
# ${data.name}

## Description

${data.description}

## Table of Contents

${data.table}

## Installation

${data.installation}

## Usage

${data.usage}

![${data.alt}](../Assets/${data.pic})

## Credits

${data.credits}

##Tests

${data.tests}

##How to contribute

${data.contributing}

## Questions

If you have any questions about the project please feel free to reach me at ${data.questions}. Thank you!

## Liscense

${data.liscence}

`;
    fs.writeFile("./README/README.md", readme, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });
