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
    name: "email",
    type: "input",
    message: "Provide your email address (mandatory):",
    validate: function(answer){
      if(answer.length < 1) {
        return console.log("A valid email address is required.");
      }
      return true;
    }
  },
  {
    name: "description",
    //type: "input",
    type: "editor",
    message: "Write a description of your project (mandatory):",
    validate: function(answer){
      if(answer.length < 1) {
        return console.log("A valid project description is required.");
      }
      return true;
    }
  },
  {
    name: "license",
    type: "list",
    message: "Choose a license for your project - this will be included in the License section (mandatory)",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
    validate: function(answer){
      if(answer.length < 1){
        return console.log('A valid project license is required.');
      }
      return true;
    }
  },

  // optional questions...
  {
    name: "install_guid",
    //type: "input",
    type: "editor",
    message: "Describe the steps required to install your project - this will be included in the Installation section (optional):",
  },
  {
    name: "usage",
    //type: "input",
    type: "editor",
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

  /*
  {
    name: "",
    type: "",
    message: "",
  },
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

    data_string = data_string + "## Description: \n"
    data_string = data_string + answers.description + "\n";

    // include optional info:
    data_string = data_string + "## Table of Contents:\n";
    data_string = data_string + "This readme file includes the following contents:\n"
    if(answers.install_guid.length > 0){
      data_string = data_string + "+ Installation\n";
    }
    if(answers.usage.length > 0){
      data_string = data_string + "+ Usage\n";
    }
    if(answers.contribute.length > 0){
      data_string = data_string + "+ Contributing\n";
    }
    if(answers.test.length > 0){
      data_string = data_string + "+ Test\n";
    }
    if(answers.license.length > 0){
      data_string = data_string + "+ License\n";
    }    
    data_string = data_string + "+ Questions\n";

    if(answers.install_guid.length > 0){
      data_string = data_string + "## Installation:\n";
      data_string = data_string + answers.install_guid + "\n";  
    }


    if(answers.usage.length > 0){
      data_string = data_string + "## Usage:\n";
      data_string = data_string + answers.usage + "\n";
    }
    if(answers.test.length > 0){
      data_string = data_string + "## Test\n";
    }
    if(answers.license.length > 0){
      data_string = data_string + "## License:\n";
      data_string = data_string + answers.license + "\n";
    }

    data_string = data_string + "## Questions?:\n";
    let question = "If you have any questions, feel free to contact me via information below:\n" +
      "Email: " + answers.email + "\n" + 
      "\n";
    data_string = data_string + question;

    let copywrite = "© 2022 " + answers.user_name + ". Confidential and Proprietrary. All Rights Reserved.\n";
    data_string = data_string + copywrite; 

    write_readme('./README_ex.md',data_string);
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