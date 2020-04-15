const qBank = [
  {
    question: "______ JavaScript is also called client-side JavaScript?",
    answers: ["Microsoft", "Navigator", "LiveWire", "Native"],
    correct: "Navigator",
    questionId: "099099",
  },
  {
    question: "__________ JavaScript is also called server-side JavaScript?",
    answers: ["Microsoft", "Navigator", "LiveWire", "Native"],
    correct: "LiveWire",
    questionId: "183452",
  },
  {
    question:
      "Which of the following attribute can hold the JavaScript version??",
    answers: ["Language", "Script", "Version", "None of the above"],
    correct: "Language",
    questionId: "267908",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correct: "<script>",
    questionId: "333247",
  },
  {
    question:
      "The _______ method of an Array object adds and/or removes elements from an array?",
    answers: ["Reverse", "Shift", "Slice", "Splice"],
    correct: "Splice",
    questionId: "496293",
  },
  {
    question: "Which built-in method returns the length of the string?",
    answers: ["length()", "size()", "index()", "None of the above"],
    correct: "length()",
    questionId: "298060",
  },
  {
    question: "How are the objects organized in the HTML DOM?",
    answers: ["list", "stack", "queue", "Hierarchy"],
    correct: "Hierarchy",
    questionId: "3096579",
  },
  {
    question:
      "What among the following is an appropriate when an event occurs when the user clicks on an element?",
    answers: ["onclick", "onchange", "onkeyup", "onblur"],
    correct: "onclick",
    questionId: "3182461",
  },
  {
    question:
      "What among the following is an appropriate event handler for input text among the below options ?",
    answers: ["onclick", "onchange", "onkeyup", "onblur"],
    correct: "onchange",
    questionId: "3239112",
  },
  {
    question: "What is the default value of the asyc attribute?",
    answers: ["0", "1", "False", "True"],
    correct: "True",
    questionId: "3318503",
  },
  {
    question: "Which tag(s) can handle mouse events in Netscape?",
    answers: ["<img>", "<a>", "<br>", "<span>"],
    correct: "<img>",
    questionId: "3410327",
  },
  {
    question:
      "Which of the following method checks if its argument is not a number?",
    answers: ["isNaN()", "nonNaN()", "NaN()", "None of the above"],
    correct: "isNaN",
    questionId: "3542596",
  },
  {
    question: "What are the two basic groups of dataypes in JavaScript?",
    answers: [
      "Primitive",
      "Reference types",
      "All of the above",
      "None of the above",
    ],
    correct: "All of the above",
    questionId: "3667517",
  },
  {
    question: "What are the types of Pop up boxes available in JavaScript?",
    answers: ["Alert", "Prompt", "Confirm", "All of the above"],
    correct: "All of the above",
    questionId: "3791672",
  },
  {
    question: " Which of them is not the looping structures in JavaScript?",
    answers: ["for", "while", "fotwhich", " dowhile"],
    correct: "while",
    questionId: "3893585",
  },
  {
    question: "Among the keywords below, which one is not a statement?",
    answers: ["if", "with", "debugger", "use strict"],
    correct: "use strict",
    questionId: "3913430",
  },
  {
    question:
      "mong the following, which one is a ternary operator in JavaScript?",
    answers: ["#", ": :", "& :", "? :"],
    correct: "? :",
    questionId: "4049121",
  },
  {
    question: "What is the original name of JavaScript?",
    answers: ["LiveScript", "EScript", "Mocha", "JavaScript"],
    correct: "Mocha",
    questionId: "4150746",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<script>", "<head>", "<meta>", "<style>"],
    correct: "<script>",
    questionId: "4235063",
  },
  {
    question: "Which company developed JavaScript?",
    answers: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
    correct: "Netscape",
    questionId: "4321002",
  },
  {
    question: " Which of the following is not JavaScript Data Types?",
    answers: ["Undefined", "Number", "Boolean", "Float"],
    correct: "Float",
    questionId: "4442286",
  },
  {
    question: "We can embed JS code inside HTML directly ?",
    answers: ["True", "False"],
    correct: "True",
    questionId: "4564430",
  },
  {
    question:
      "Local Browser used for validations on the Web Pages uses __________?",
    answers: ["CSS", "JS", "HTML", "Java"],
    correct: "JS",
    questionId: "4630606",
  },
  {
    question:
      "JavaScript Code is written inside file having extension __________?",
    answers: [".javascript", ".jsc", ".js", ".jvs"],
    correct: ".js",
    questionId: "4795960",
  },
  {
    question: "Which candy is NOT made by Mars?",
    answers: ["Compiled", "Interpreted", "Complicated", "Integrated"],
    correct: "Interpreted",
    questionId: "4811162",
  },
  {
    question: "Javascript is _________ language?",
    answers: ["Scripting", "None of These", "Application", "Programming"],
    correct: "Scripting",
    questionId: "4982981",
  },
  {
    question:
      "Which of the following function of String object returns the character at the specified index?",
    answers: ["charAt()", "charCodeAt()", "concat()", "indexOf()"],
    correct: "charAt()",
    questionId: "4982981",
  },
  {
    question: "Javascript is _________ language?",
    answers: ["Scripting", "None of These", "Application", "Programming"],
    correct: "Scripting",
    questionId: "4982981",
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
