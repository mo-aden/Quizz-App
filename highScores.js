const scoresList = document.querySelector('.scoreList');
const clearBtn = document.querySelector('#clearScores');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// console.log(highScores);
let counter = 1;

scoresList.innerHTML = highScores
  .map((score) => {
    return `<li> ${counter++}. ${score.name} - ${score.score}`;
  })
  .join('');

// console.log(highScores);

// scoresList.textContent = textHtml;
clearBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(`clciked`);
  localStorage.clear();
  scoresList.textContent = '';
});
