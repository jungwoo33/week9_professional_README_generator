# README by Jungwoo Lee
## 1. Title: WEEK9_Professional_README_Generator

## 2. Description: 
When creating an open source project on GitHub, it is important to have a high-quality README for the app. This should includw what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions & mdash; this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project. 

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Checkout the example_readme.md in this repo as an example.

## 3. Table of Contents:
This readme file includes the following contents:
+ Installation
+ Usage
+ License
+ Contributing
+ Test
+ Questions

## 4. Installation:
To generate your own README, `git clone` the repo down to your local so you have the Node project on your local.

Run `npm install` in order to install the following `npm` package dependencies as specified in the `package.json`:
+ `inquirer` will prompt you for your inputs from the command line.

The application will start by running `node index.js` in the command line.

Answer the prompts in your command line to generate the REAMDE.

After answering all the prompts, your REAMDE file will be named `README.md` and will be ready for you at the root of the repo.

## 5. Usage:
When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses `axios` to fetch your GitHub profile from the `GitHub API`, including your GitHub profile picture (avatar) and email.From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the `Inquirer` prompts. So, if you don't answer the optional questions, such a `Installation`, and `Installation` section will not be included in your README. The REAMDE will also include badges for your GitHub repo.

Finally, `fs.writeFile` is used to generate your project's REAMDE.md file. Checout the `ExampleREADME.md` in this repo as an example on the final output.

## 6. License:
MIT License

## 7. Questions?:
If you have any questions, feel free to contact me via information below:\
Email: jungwoo33@gmail.com

- - -
© 2022 Jungwoo Lee. Confidential and Proprietary. All Rights Reserved.