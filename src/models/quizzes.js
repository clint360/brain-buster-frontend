/* eslint-disable no-unused-vars */
const response = {
  user: '',
  quiz: '',
  answerIndices: [],
};

const quiz = {
  admin: '',
  name: '',
  duration: '',
  responses: [response, response, response],
  quizImageURL: '',
};

const questionTemplete = {
  question: '',
  options: ['', '', '', ''],
  answerIndex: 0,
  userAnswerIndex: null,
};

const questions = [
  {
    question: 'What is JavaScript?',
    options: [
      'JavaScript is a scripting language used to make the website interactive',
      'JavaScript is an assembly language used to make the website interactive',
      'JavaScript is a compiled language used to make the website interactive',
      'None of the mentioned',
    ],
    answerIndex: 0,
    userAnswerIndex: null,
  },
  {
    question: 'Which of the following is correct about JavaScript?',
    options: [
      'JavaScript is an Object-Based language',
      'JavaScript is Assembly-language',
      'JavaScript is an Object-Oriented language',
      'JavaScript is a High-level language',
    ],
    answerIndex: 0,
    userAnswerIndex: null,
  },
  {
    question:
      'Among the given statements, which statement defines closures in JavaScript?',
    options: [
      'JavaScript is a function that is enclosed with references to its inner function scope',
      'JavaScript is a function that is enclosed with references to its lexical environment',
      'JavaScript is a function that is enclosed with the object to its inner function scope',
      'None of the mentioned',
    ],
    answerIndex: 1,
    userAnswerIndex: null,
  },
  {
    question:
      'Arrays in JavaScript are defined by which of the following statements?',
    options: [
      'It is an ordered list of values',
      'It is an ordered list of objects',
      'It is an ordered list of string',
      'It is an ordered list of functions',
    ],
    answerIndex: 0,
    userAnswerIndex: null,
  },
  {
    question: 'Which of the following is not javascript data types?',
    options: [
      'Null type',
      'Undefined type',
      'Number type',
      'All of the mentioned',
    ],
    answerIndex: 3,
    userAnswerIndex: null,
  },
];
