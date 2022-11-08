const totalScore = document.querySelector('.totalScores');
const username = document.querySelector('#username');
const submitBtn = document.querySelector('#saveScores');

//Get the scores from localstorage

const recentScore = localStorage.getItem('recentScore');
totalScore.textContent = recentScore;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

username.addEventListener('keyup', () => {
  submitBtn.disabled = !username.value;
});
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`Clicked`);

  const saveScores = {
    score: recentScore,
    name: username.value,
  };
  highScores.push(saveScores);
  //   console.log(saveScores);
  console.log(highScores);

  //order cores in descending order
  highScores.sort((a, b) => b.score - a.score);

  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));
  //   window.location.assign('./endPage.html');
});
