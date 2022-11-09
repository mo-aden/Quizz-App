const totalScore = document.querySelector('.totalScores');
const username = document.querySelector('#username');
const submitBtn = document.querySelector('#saveScores');
const confirmMessage = document.querySelector('.confirm-message');

//Get the scores from localstorage & update the result on totalScore content
const recentScore = localStorage.getItem('recentScore');
totalScore.textContent = recentScore;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//Allow the user to only submit after they entered a username
username.addEventListener('keyup', () => {
  submitBtn.disabled = !username.value;
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const saveScores = {
    score: recentScore,
    name: username.value,
  };
  highScores.push(saveScores);
  //   console.log(saveScores);
  confirmMessage.textContent = `Thanks ${username.value} for submitting your username !!`;

  //order cores in descending order
  highScores.sort((a, b) => b.score - a.score);

  //Only display the last 5 scores
  highScores.splice(5);

  //save the highscores into the memory for the highscore html page
  localStorage.setItem('highScores', JSON.stringify(highScores));

  // take the user to highscores page and submit event
  setTimeout(
    () => {
      return window.location.assign('./highScores.html');
    },

    1000
  );
});
