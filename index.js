//import fetch from "node-fetch";

const inquirer = require('inquirer');
/* This is for inquirer v9 and higher
//import inquirer from 'inquirer';
if you want to use v9, you have to include the following in "package.json":
  "type": "module", 
  i.e.,:
  {
    "type": "module",
    // ~~~ originally existing codes here
  }
*/

/*
  I am following the following references:
  https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/pizza.js
  https://www.educative.io/answers/how-to-use-the-inquirer-node-package
*/

// inquirer prompts:
const questions = [
  {
    name: "user_name",              // The key that will be accessed via answers.<name>
    type: "input",                  // this can be one of 9 different input type options
    message: "what is you name?",   // What you want to ask the user
    //default: false,
  },
  {
    name: "colors",
    type: "list",
    message: "What is your favorite color?",
    choices: ["black","red","blue","yellow","green","whitesmoke"],
  }
];

inquirer
  .prompt(
    /* Pass your questions in here */
    questions
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.user_name);
    console.log(answers.colors);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
