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
  {
    name: "user_name",              // The key that will be accessed via answers.<name>
    type: "input",                  // this can be one of 9 different input type options
    message: "what is you name?",   // What you want to ask the user
    //default: false,
  },
  {
    name: "project_title",
    type: "input",
    message: "What is the project title?"
  },
  /*
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
    //console.log(answers.user_name);
    //console.log(answers.colors);
    //write_readme('./test.txt',answers.user_name);
    //append_readme('./test.txt',answers.project_title);


    let data_string = answers.user_name;
    data_string = data_string + answers.project_title;
    write_readme('./test.txt',data_string);

    console.log(answers.project_title);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//function write_readme(file_name, data){
//  fs.writeFile(file_name,data, function(err) {
function write_readme(file_name, data){
  fs.writeFile(file_name,data, {'flag':'w'}, function(err) {
    if(err){
      return console.log(err);
    }
    console.log("./test.txt > jw");
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
function append_readme(file_name, data){
  fs.writeFile(file_name,data, {'flag':'a'}, function(err){
    if(err){
      return console.log(err);
    }
    console.log('I am here');
  })
}
//write_readme('./test.txt','jw2');