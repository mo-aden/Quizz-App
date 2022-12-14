const question = document.querySelector('.question');
const options = document.querySelectorAll('.option-text');
const selectedOptionText = document.querySelector('.selected-option');
const quizCounterText = document.querySelector('.quizCounter');
const timerText = document.querySelector('#timerCount');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let scoreBonus = 20;
let questionCounter = 0;
let availableQuestions = [];
let timer = 60;
const quizPoints = 10;

let questions = [
  {
    question: "Commonly used databases don't include:",
    option1: 'Booleans',
    option2: 'Numbers',
    option3: 'Alerts',
    option4: 'Strings',
    answer: 3,
  },
  {
    question: 'The conditions of an if/else statement is enclosed within: ',
    option1: 'Curly brackets',
    option2: 'Square parenthesis',
    option3: 'Parenthesis',
    option4: 'Quotes',
    answer: 3,
  },
  {
    question: 'Removes the first element of an array and returns the element',
    option1: 'Function()',
    option2: 'Shift()',
    option3: 'Dynamic typing',
    option4: 'Push()',
    answer: 2,
  },
  {
    question: 'Which of the following is not a valid JavaScript variable name?',
    option1: 'FirstAndLast',
    option2: '_mamed_codes',
    option3: '2names_data',
    option4: 'None of the above',
    answer: 3,
  },
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    option1: '<javascript>',
    option2: '<scripting>',
    option3: '<js>',
    option4: '<script>',
    answer: 4,
  },
];

//

function startQuizzes() {
  questionCounter = 0;
  score: 0;
  availableQuestions = [...questions];

  getNewQuestion();
}

function getNewQuestion() {
  if (availableQuestions.length === 0 || questionCounter > questions.length || timer == 0) {
    //store the scores in memory
    localStorage.setItem('recentScore', score);
    //Go go end end page
    return window.location.assign('./endPage.html');
  }

  //Update the DOM
  questionCounter++;
  quizCounterText.textContent = `${questionCounter} / ${questions.length}`;

  //Get the question that's displayed on screen
  const quizIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[quizIndex];

  question.textContent = currentQuestion.question;

  //Options to be selected by the user
  options.forEach((option) => {
    const dataNumber = option.dataset['number'];
    option.textContent = currentQuestion['option' + dataNumber];
  });

  //remove from the list questions that were displayed to the user
  availableQuestions.splice(quizIndex, 1);

  acceptingAnswers = true;
}

options.forEach((option) => {
  option.addEventListener('click', function (e) {
    // console.log(e.target);

    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedOption = e.target;
    const selectedAnswer = selectedOption.dataset['number'];

    //Display to the user if they chose the correct answer
    if (selectedAnswer == currentQuestion.answer) {
      //   styleSelectedOption = 'correct';
      selectedOptionText.textContent = 'Correct Answer  ???';
      incrementScore(scoreBonus);
    } else {
      selectedOptionText.textContent = 'Wrong Answer  ????';
    }

    //Remove the displayed message to user & take the user to the end page
    setTimeout(() => {
      selectedOptionText.textContent = '';
      timerText.textContent = timer--;
      getNewQuestion();
    }, 1000);
  });
});

//Increase score each time a user gets the correct answer
function incrementScore(num) {
  score += num;
}

//settime interval for the timer
setInterval(() => {
  timer--;
  if (timer >= 0) {
    timerText.textContent = timer;
  } else {
    timerText.textContent = timer + 60;
  }
}, 1000);

startQuizzes();
