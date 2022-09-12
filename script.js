function generateColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let index = 0; index < 6; index += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const positionBall = document.getElementsByClassName('ball');

for (let index = 0; index < positionBall.length; index += 1) {
  positionBall[index].style.backgroundColor = generateColor();
}
