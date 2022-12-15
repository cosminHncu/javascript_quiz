import Container from "./components/UI/Container/Container";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Quiz from "./components/Quiz/Quiz";

import React, { useState } from "react";
const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);
  const rawList = [
    {
      question: `Is JavaScript case-sensitive?`,
      correctAnswer: `True`,
      answers: [`True`, `False`],
    },
    {
      question: `Which of the following is not a property of the window object?`,
      correctAnswer: `menu`,
      answers: [`history`, `navigator`, `document`, `menu`],
    },
    {
      question: `Which of the following do you use for a multi-way branch?`,
      correctAnswer: `switch`,
      answers: [`for`, `while`, `switch`, `do while`],
    },
    {
      question: `Inside which HTML element do we put the JavaScript?`,
      correctAnswer: `<script>`,
      answers: [`<js>`, `<javascript>`, `<script>`, `<scripting>`],
    },
    {
      question: `What is the correct JavaScript syntax to change the content of the HTML element below?
                  <p id="demo">This is a demonstration.</p>`,
      correctAnswer: `document.getElementById("demo").innerHTML = "Hello World!";`,
      answers: [
        `document.getElementByName("p").innerHTML = "Hello World!";`,
        `document.getElement("p").innerHTML = "Hello World!";`,
        `#demo.innerHTML = "Hello World!";`,
        `document.getElementById("demo").innerHTML = "Hello World!";`,
      ],
    },
    {
      question: `Where is the correct place to insert a JavaScript?`,
      correctAnswer: `Both <head> and <body>`,
      answers: [
        `The <body> section`,
        `The <head> section`,
        `Both <head> and <body>`,
      ],
    },
    {
      question: `What is the correct syntax for referring to an external script called "ikj.js"?`,
      correctAnswer: `<script src="ikj.js">`,
      answers: [
        `<script name="ikj.js">`,
        `<script src="ikj.js">`,
        `<script href="ikj.js">`,
      ],
    },
    {
      question: `The external JavaScript file must contain the <script> tag.`,
      correctAnswer: `False`,
      answers: [`False`, `True`],
    },
    {
      question: `How do you write "Hello World" in an alert box?`,
      correctAnswer: `alert("Hello World");`,
      answers: [
        `msg("Hello World");`,
        `msgBox("Hello World");`,
        `alert("Hello World");`,
        `alertBox("Hello World");`,
      ],
    },
    {
      question: `How do you create a function in JavaScript?`,
      correctAnswer: `function aFunction()`,
      answers: [
        `function:aFunction()`,
        `function aFunction()`,
        `function = aFunction()`,
      ],
    },
    {
      question: `How do you call a function named "anotherFunction"?`,
      correctAnswer: `anotherFunction()`,
      answers: [
        `anotherFunction()`,
        `call anotherFunction()`,
        `call function anotherFunction()`,
      ],
    },
    {
      question: `What will be the output of  [2, 5, 6].reduce((a, b) => (a += b))`,
      correctAnswer: `13`,
      answers: [`256`, `14`, `13`, `undefined`],
    },
    {
      question: `How to write an IF statement for executing some code if "i" is NOT equal to 12?`,
      correctAnswer: `if (i != 12)`,
      answers: [
        `if (i != 12)`,
        `if (i <> 12)`,
        `if i =! 12 then`,
        `if i <> 12`,
      ],
    },
    {
      question: `How does a FOR loop start?`,
      correctAnswer: `for (i = 0; i <= 100; i++)`,
      answers: [
        `for (i = 0; i <= 100)`,
        `for (i = 0; i <= 100; i++)`,
        `for i = 1 to 100`,
        `for (i <= 100; i++)`,
      ],
    },
    {
      question: `How can you add a comment in a JavaScript?`,
      correctAnswer: `//This is a comment`,
      answers: [
        `<!--This is a comment-->`,
        `'This is a comment`,
        `//This is a comment`,
      ],
    },
    {
      question: `How to insert a comment that has more than one line?`,
      correctAnswer: `/*This comment has more than one line*/`,
      answers: [
        `<!--This comment has
        more than one line-->`,
        `/*This comment has
        more than one line*/`,
        `//This comment has
        more than one line//`,
      ],
    },
    {
      question: `What is the correct way to write a JavaScript array?`,
      correctAnswer: `const colors = ["red", "green", "blue"]`,
      answers: [
        `const colors = "red", "green", "blue"`,
        `const colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
        `const colors = ["red", "green", "blue"]`,
        `const colors = (1:"red", 2:"green", 3:"blue")`,
      ],
    },
    {
      question: `Which operator is used to assign a value to a variable?`,
      correctAnswer: `=`,
      answers: [`=`, `x`, `*`, `==`],
    },
    {
      question: `How do you round the number 7.25, to the nearest integer?`,
      correctAnswer: `Math.round(7.25)`,
      answers: [
        `Math.rnd(7.25)`,
        `round(7.25)`,
        `Math.round(7.25)`,
        `rnd(7.25)`,
      ],
    },
    {
      question: `How do you find the number with the highest value of x and y?`,
      correctAnswer: `Math.max(x, y)`,
      answers: [`Math.max(x, y)`, `Math.ceil(x, y)`, `top(x, y)`, `ceil(x, y)`],
    },
    {
      question: `What is the correct JavaScript syntax for opening a new window called "w2" ?`,
      correctAnswer: `w2 = window.open("http://www.w3schools.com");`,
      answers: [
        `w2 = window.new("http://www.iKnowJS.com");`,
        `w2 = window.open("http://www.iKnowJS.com");`,
      ],
    },
    {
      question: `How can you detect the client's browser name?`,
      correctAnswer: `navigator.appName`,
      answers: [`navigator.appName`, `client.navName`, `browser.name`],
    },
    {
      question: `Which event occurs when the user clicks on an HTML element?`,
      correctAnswer: `onclick`,
      answers: [`onchange`, `onpress`, `onclick`, `onmouseclick`],
    },
    {
      question: `Which of the following correctly describe the relationship of JavaScript and "objects"?`,
      correctAnswer: `Javascript is Object-based`,
      answers: [
        `Javascript is Object-oriented`,
        `Javascript is Object-driven`,
        `Javascript is Object-based`,
        `Javascript has no relationship with objects`,
      ],
    },
    {
      question: `What is the responsibility of a JavaScript engine?`,
      correctAnswer: `Start-to-finish compilation and execution of our JavaScript program`,
      answers: [
        `Writing JavaScript code that is missing from the file`,
        `Start-to-finish compilation and execution of our JavaScript program`,
        `Handling all the dirty work of parsing and code-generation`,
        `Find all unused code and remove it before code generation`,
      ],
    },

    {
      question: `console.log(typeof typeof 1) wil output : `,
      correctAnswer: `string`,
      answers: [`number`, `true`, `string`, `1`],
    },
    {
      question: `What is going on under the hood when importing modules to prevent collisions?`,
      correctAnswer: `They are each wrapped in an IIFE`,
      answers: [
        `ES6`,
        `The code is injected and inserted as is`,
        `They use global namespaces`,
        `They are each wrapped in an IIFE`,
      ],
    },
    {
      question: `What is closure?`,
      correctAnswer:
        "The ability of a function to access its lexical scope when that function is executing outside its lexical scope.",
      answers: [
        `When a function is nested within another function`,
        `When a function returns another function, it is said to have a closure over the second function`,
        `The ability of a function to access its lexical scope when that function is executing outside its lexical scope.`,
      ],
    },
  ];
  const startQ = (status) => setStartQuiz(true);

  //const list = rawList.map((pack) => {
  //  pack.id = Math.random() * 10 + 1;
  //  return pack;
  //});
  return (
    <Container>
      {startQuiz === true ? (
        <Quiz list={rawList}></Quiz>
      ) : (
        <WelcomePage onSaveStartQ={startQ} />
      )}
    </Container>
  );
};

export default App;
