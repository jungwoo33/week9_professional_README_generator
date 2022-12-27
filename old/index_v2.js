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
// fs is a Node standard library package for reading and writing files
const fs = require('fs');


/*
  I am following the following references:
  https://github.com/SBoudrias/Inquirer.js/blob/master/packages/inquirer/examples/pizza.js
  https://www.educative.io/answers/how-to-use-the-inquirer-node-package
*/

//const file_name = "./README.md";


// ==============================================================================================
// inquirer prompts:
const questions = [
  // mandatory questions...
  {
    name: "user_name",              // The key that will be accessed via answers.<name>
    type: "input",                  // this can be one of 9 different input type options
    message: "what is your name (mandatory)?",   // What you want to ask the user
    //default: false,
    validate: function(answer){
      if(answer.length < 1) {
        return console.log("A valid name is required.");
      }
      return true;
    }
  },
  {
    name: "project_title",
    type: "input",
    message: "What is the project title (mandatory)?",
    validate: function(answer){
      if(answer.length < 1) {
        return console.log("A valid project title is required.");
      }
      return true;
    }
  },
  {
    name: "GitHub_username",
    type: "input",
    message: "What is your GitHub username (mandatory)?",
    validate: function(answer){
      if(answer.length < 1) {
        return console.log("A valid GitHub username is required.");
      }
      return true;
    }
  },
  {
    name: "GitHub_repo",
    type: "input",
    message: "What is your GitHub repo (mandatory)?",
    validate: function(answer){
      if(answer.length < 1) {
        return console.log("A valid GitHub repo is required.");
      }
      return true;
    }
  },
  {
    name: "description",
    type: "input",
    message: "Write a description of your project (mandatory):",
    validate: function(answer){
      if(answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    }
  },

  // optional questions...
  {
    name: "install_guid",
    type: "input",
    message: "Describe the steps required to install your project - this will be included in the Installation section (optional):",
  },
  {
    name: "usage",
    type: "input",
    message: "Provide usage instructions of your project - this will be included in the Usage section (optional)",
  },
  {
    name: "contribute",
    type: "input",
    message: "Provide guidelines on how other developers can contribute to your project - this will be included in the Contribution section (optional)",
  },
  {
    name: "test",
    type: "input",
    message: "Provide any tests written for your application and provide examples on how to run them - this will be included in the Test section (optional)",
  },
  {
    name: "license",
    type: "list",
    message: "Choose a license for your project - this will be included in the License section (optional)",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
  },

  /*
  {
    name: "",
    type: "",
    message: "",
  },
  {
    name: "colors",
    type: "list",
    message: "What is your favorite color?",
    choices: ["black","red","blue","yellow","green","whitesmoke"],
  }
  */
];

inquirer
  .prompt(
    /* Pass your questions in here */
    questions
  )
  .then((answers) => {
    // Use user feedback for... whatever!!
    // I will store all to main body context into "data_string"
    let data_string = "# README by " + answers.user_name + "\n";
    data_string = data_string + "## Title: " + answers.project_title + "\n";

    let description = "When creating an open source project on GitHub, " + 
      "it is important to have a high-quality README for the app. This should includw what the app is for, " + 
      "how to use the app, how to install it, how to report issues, and how to make contributions & mdash; " + 
      "this last part increases the likelihood that other developers will contribute to the success of the project. " + 
      "\n" +
      "\n" +
      "You can quickly and easily create a README file by using a command-line application to generate one. " +
      "This allows the project creator to devote more time to working on the project. " +
      "\n" +
      "\n" +
      "This is a command-line application that runs with Node.js that dynamically generates a README.md file " +
      "based on input about your project. Checkout the example_readme.md in this repo as an example." 
    data_string = data_string + "## Description: \n"
    data_string = data_string + description + "\n";

    data_string = data_string + "## Table of Contents:\n";
    data_string = data_string + "This readme file includes the following contents:\n"
    data_string = data_string + "+ Installation\n";
    data_string = data_string + "+ Usage\n";
    data_string = data_string + "+ License\n";
    data_string = data_string + "+ Contributing\n";
    data_string = data_string + "+ Test\n";
    data_string = data_string + "+ Questions\n";

    data_string = data_string + "## Installation:\n";
    let install_guid = "To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.\n" +
      "\n" +
      "Run `npm install` in order to install the following `npm` package dependencies as specified in the `package.json`:\n" +
      "+ `inquirer` will prompt you for your inputs from the command line.\n" + 
      "\n" +
      "The application will start by running `node index.js` in the command line.\n" +
      "\n" + 
      "Answer the prompts in your command line to generate the REAMDE.\n" +
      "\n" + 
      "After answering all the prompts, your REAMDE file will be named `README.md` and will be ready for you at the root of the repo.\n"
    data_string = data_string + install_guid + "\n";  

    data_string = data_string + "## Usage:\n";
    let usage = "When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.\n" +
      "\n" +
      "The application then takes your responses and uses `axios` to fetch your GitHub profile from the `GitHub API`, including your GitHub profile picture (avatar) and email." +
      "From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the `Inquirer` prompts. " +
      "So, if you don't answer the optional questions, such a `Installation`, and `Installation` section will not be included in your README. " +
      "The REAMDE will also include badges for your GitHub repo.\n" +
      "\n" +
      "Finally, `fs.writeFile` is used to generate your project's REAMDE.md file. Checout the `ExampleREADME.md` in this repo as an example on the final output.\n";
    data_string = data_string + usage + "\n";

    data_string = data_string + "## License:\n";
    data_string = data_string + "MIT License\n"



    write_readme('./README.md',data_string);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


  function write_readme(file_name, data){
  fs.writeFile(file_name,data, {'flag':'w'}, function(err) {
    if(err){
      return console.log(err);
    }
    console.log("REAME.md is successfully generated.");
  })
}


/*
function append_readme(file_name, data){
  fs.appendFile(file_name,data, function(err){
    if(err){
      return console.log(err);
    }
    console.log('I am here');
  })
}
*/
/*
function append_readme(file_name, data){
  fs.writeFile(file_name,data, {'flag':'a'}, function(err){
    if(err){
      return console.log(err);
    }
    console.log('I am here');
  })
}
*/
//write_readme('./test.txt','jw2');