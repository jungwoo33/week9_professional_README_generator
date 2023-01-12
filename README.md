# README by Jungwoo Lee
## 1. Title: WEEK9_Professional_README_Generator

## 2. Table of Contents:
This readme file includes the following contents:
+ [Description](#3-description)
+ [Installation](#4-installation)
+ [Usage](#5-usage)
+ [License](#6-license)
+ [Application results](#7-application-results)
+ [Questions](#8-questions)

## 3. Description: 
When creating an open source project on GitHub, it is important to have a high-quality README for the app. This should includw what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions & mdash; this last part increases the likelihood that other developers will contribute to the success of the project. 

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project. 

This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Checkout the example_readme.md in this repo as an example.


## 4. Installation:
Please make sure to have following programs installed on your computer to use this app:
+ VS Code
+ GitBash
+ Node.js

To generate your own README, `git clone` the repo down to your local. Then, run `npm install` in order to install the `npm` package dependencies as specified in the `./package.json` - `inquirer v8.2.5` will be installed. Now, you are ready to go!


## 5. Usage:
When you run `node index.js`, the application uses the `inquirer` package to prompt you in the command line with a series of questions about your project. Then, answer the prompts in your command line or in default editor to generate the REAMDE. Some questions might need a long answer, and for these questions, the default editor will be popped up, then write your answer on the editor. After answering all the prompts, your REAMDE file will be created as `./README_ex.md`.

For the questions of using default editor:
+ `Press <enter> to launch your preferred editor` will be displayed along with the question. 
+ Then, press `enter` key. Then, your default text editor will be popped up.
+ Edit your answer for the question on the editor.
+ Go to `File` and click `Save` button.
+ Then, click `Exit` button.
+ Then, the prompt will show `Received` at the end of the question. Then, your answer is successfully saved.
+ If you do not want to answer for the question (only if it is the optional question), then do not include anything but click 'Save' and 'Exit' button.

If you want to switch the input option from the "editor" to "command line input", uncomment `type: "input"` and comment `type: "editor"` in each question item in `index.js`. This will allow you to switch the input option from "editor" to the direct "command line" input.

There are `mandatory` and `optional` questions which will be displayed in each prompt. You have to answer for the `mandatory` questions, and you can skip `optional` questions if you want. Then, the application will generate a table of contents for the README conditionally based on your responses to the `Inquirer` prompts. So, if you don't answer the optional questions, which will be displayed in each prompt, the optional section will not be included in your README. 
Finally, `fs.writeFile` is used to generate your project's readme file, `./REAMDE_ex.md` file. Checout the `./README_ex.md` in this repo as an example on the final output.

## 6. License:
### The MIT License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## 7. Application results:
[GitHub:] https://jungwoo33.github.io/week9_professional_README_generator/<br>
View walk through video here - [Screencastify](https://drive.google.com/file/d/1g-tg4KfzAiYeU7YZghBXeaSwc_0J3712/view)<br>
or, the original video file is in `./assets/week9_professional_README_generator.avi`

## 8. Questions?:
If you have any questions, feel free to contact me via information below:\
[GitHub:] https://github.com/jungwoo33\
[Email:] jungwoo33@gmail.com

- - -
© 2022 Jungwoo Lee. Confidential and Proprietary. All Rights Reserved.