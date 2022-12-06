import Container from "./components/UI/Container";
import WelcomePage from "./components/WelcomePage/WelcomePage";
const App = () => {
  const rawList = [
    {
      question: `Inside which HTML element do we put the JavaScript?`,
      correctAnswer: `<script>`,
      answers: [`<js>`, `<javascript>`, `<script>`, `<scripting>`],
    },
    {
      question: `What is the correct JavaScript syntax to change the content of the HTML element below?/n
                  <p id="demo">This is a demonstration.</p>`,
      correctAnswer: `document.getElementById("demo").innerHTML = "Hello World!";`,
      answers: [
        `document.getElementById("demo").innerHTML = "Hello World!";`,
        `document.getElementByName("p").innerHTML = "Hello World!";`,
        `document.getElement("p").innerHTML = "Hello World!";`,
        `#demo.innerHTML = "Hello World!";`,
      ],
    },
    {
      question: `Where is the correct place to insert a JavaScript?`,
      correctAnswer: `Both the <head> section and the <body> section are correct`,
      answers: [
        `Both the <head> section and the <body> section are correct`,
        `The <body> section`,
        `The <head> section`,
      ],
    },
    {
      question: `What is the correct syntax for referring to an external script called "xxx.js"?`,
      correctAnswer: `<script src="xxx.js">`,
      answers: [
        `<script src="xxx.js">`,
        `<script name="xxx.js">`,
        `<script href="xxx.js">`,
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
        `alert("Hello World");`,
        `msg("Hello World");`,
        `msgBox("Hello World");`,
        `alertBox("Hello World");`,
      ],
    },
    {
      question: `How do you create a function in JavaScript?`,
      correctAnswer: `function myFunction()`,
      answers: [
        `function myFunction()`,
        `function:myFunction()`,
        `function = myFunction()`,
      ],
    },
    {
      question: `How do you call a function named "myFunction"?`,
      correctAnswer: `myFunction()`,
      answers: [
        `myFunction()`,
        `call myFunction()`,
        `call function myFunction()`,
      ],
    },
    {
      question: `How to write an IF statement in JavaScript?`,
      correctAnswer: `if (i == 5)`,
      answers: [`if (i == 5)`, `if i = 5 then`, `if i = 5`, `if i == 5 then`],
    },
    {
      question: `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
      correctAnswer: `if (i != 5)`,
      answers: [`if (i != 5)`, `if (i <> 5)`, `if i =! 5 then`, `if i <> 5`],
    },
    {
      question: `How does a WHILE loop start?`,
      correctAnswer: `for (i = 0; i <= 5; i++)`,
      answers: [
        `for (i = 0; i <= 5; i++)`,
        `for (i = 0; i <= 5)`,
        `for i = 1 to 5`,
        `for (i <= 5; i++)`,
      ],
    },
    {
      question: `How can you add a comment in a JavaScript?`,
      correctAnswer: `//This is a comment`,
      answers: [
        `//This is a comment`,
        `<!--This is a comment-->`,
        `'This is a comment`,
      ],
    },
    {
      question: `How to insert a comment that has more than one line?`,
      correctAnswer: `/*This comment has more than one line*/`,
      answers: [
        `/*This comment has
        more than one line*/`,
        `<!--This comment has
        more than one line-->`,
        `//This comment has
        more than one line//`,
      ],
    },
    {
      question: `What is the correct way to write a JavaScript array?`,
      correctAnswer: `const colors = ["red", "green", "blue"]`,
      answers: [
        `const colors = ["red", "green", "blue"]`,
        `const colors = "red", "green", "blue"`,
        `const colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")`,
        `const colors = (1:"red", 2:"green", 3:"blue")`,
      ],
    },
    {
      question: `How do you round the number 7.25, to the nearest integer?`,
      correctAnswer: `Math.round(7.25)`,
      answers: [
        `Math.round(7.25)`,
        `Math.rnd(7.25)`,
        `round(7.25)`,
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
        `w2 = window.open("http://www.w3schools.com");`,
        `w2 = window.new("http://www.w3schools.com");`,
      ],
    },
    {
      question: `How can you detect the client's browser name?`,
      correctAnswer: `navigator.appName`,
      answers: [`navigator.appName`, `client.navName`, `browser.name`],
    },
    {
      question: `Is JavaScript case-sensitive?`,
      correctAnswer: `True`,
      answers: [`True`, `False`],
    },
  ];
  const list = rawList.map((pack) => {
    pack.id = Math.random() * 10 + 1;
    return pack;
  });
  return (
    <Container>
      <WelcomePage />
    </Container>
  );
};

export default App;