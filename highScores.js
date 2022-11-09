const scoresList = document.querySelector('.scoreList');
const clearBtn = document.querySelector('#clearScores');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// console.log(highScores);
let counter = 1;

//Update the UL with the new list
scoresList.innerHTML = highScores
  .map((score) => {
    return `<li> ${counter++}. ${score.name} - ${score.score}`;
  })
  .join('');

// scoresList.textContent = textHtml;
clearBtn.addEventListener('click', function (e) {
  e.preventDefault();

  //Clear highscores from memory and UL list
  localStorage.clear();
  scoresList.textContent = '';
});
