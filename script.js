function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const positionBall = document.getElementsByClassName('ball');

const color = [];

for (let index = 0; index < positionBall.length; index += 1) {
  positionBall[index].style.backgroundColor = generateColor();
  color.push(positionBall[index].style.backgroundColor);
}

const randomColor = Math. floor(Math. random() * color.length);

const printColor = document.getElementById('rgb-color').innerText = color[randomColor];

function checkColor(event) {
  const result = document.getElementById('answer');

  if (event.target.style.backgroundColor === printColor) {
    result.innerText = 'Acertou!';
  } else {
    result.innerText = 'Errou! Tente novamente!';
  }
}

for (let index = 0; index < positionBall.length; index += 1) {
  const positionColorBall = document.getElementsByClassName('ball')[index];
  positionColorBall.addEventListener('click', checkColor);
}

const positionButton = document.getElementById('reset-game');

function reset() {
  location.reload(true);
}
positionButton.addEventListener('click', reset);
