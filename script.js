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
      name: "credits",
      message: "please list out your credits",
    },
    {
      type: "input",
      name: "liscense",
      message: "please list out your liscence",
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
  ])
  .then((data) => {
    var readme = `
# <${data.name}>

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

## Liscense

${data.liscence}

`;
    fs.writeFile("./README/README.md", readme, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });
