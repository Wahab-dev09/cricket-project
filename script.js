const score = JSON.parse(localStorage.getItem('Score')) || { win: 0, lost: 0, tie: 0 };
const click = new Audio('click.wav');
const elements = {
  userMove: document.getElementById('user-move'),
  computerMove: document.getElementById('computer-move'),
  result: document.getElementById('result'),
  win: document.getElementById('win'),
  lose: document.getElementById('lose'),
  tie: document.getElementById('tie'),
};

function updateScoreboard() {
  elements.win.innerText = `Won  ${score.win}`;
  elements.lose.innerText = `Lost  ${score.lost}`;
  elements.tie.innerText = `Tie  ${score.tie}`;
  localStorage.setItem('Score', JSON.stringify(score));
}

const choices = ['bat.png', 'ball.png', 'stump.png'];
function generateComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(userMove, computerMove) {
  if (userMove === computerMove) {
    score.tie++;
    return "Match Tie";
  }

  if (
    (userMove === 'bat.png' && computerMove === 'ball.png') ||
    (userMove === 'ball.png' && computerMove === 'stump.png') ||
    (userMove === 'stump.png' && computerMove === 'bat.png')
  ) {
    score.win++;
    return 'You Won';
  }

  score.lost++;
  return 'Computer Won';
}

function playGame(userMove) {
  click.play();
  const computerMove = generateComputerChoice();
  const result = getResult(userMove, computerMove);
  console.log(userMove)
  console.log(computerMove)
  console.log(result)

  elements.userMove.src = userMove;
  elements.computerMove.src = computerMove;
  elements.result.innerText = result;
  elements.result.classList.remove('pop'); // Remove class to reset animation
  void elements.result.offsetWidth; // Force reflow to restart animation
  elements.result.classList.add('pop');

  updateScoreboard();
}

function resetGame() {
  score.win = 0;
  score.lost = 0;
  score.tie = 0;
  localStorage.clear();
  updateScoreboard();
  elements.userMove.innerText = '';
  elements.computerMove.innerText = '';
  elements.result.innerText = '';
}

updateScoreboard();