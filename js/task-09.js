const changeColorButton = document.querySelector('.change-color')
const whatColor = document.querySelector('.color')
const body = document.querySelector('body')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  let color = getRandomHexColor();
  whatColor.textContent = color;
  body.style.backgroundColor = color
}

changeColorButton.addEventListener('click', changeColor)


