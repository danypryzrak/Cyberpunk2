const amountInput = document.querySelector('input')
const createBtn = document.querySelector('[data-create]')
const resetBtn = document.querySelector('[data-destroy]')
const boxes = document.querySelector('#boxes')


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div')
    box.style.width = `${30 + 10 * i}px`
    box.style.height = `${30 + 10 * i}px`
    box.style.backgroundColor = getRandomHexColor()
    boxes.append(box)
  }
}

function resetBoxes() {
  boxes.innerHTML = ''
}

createBtn.addEventListener('click', () => {
  let amount = amountInput.value;
  createBoxes(amount)
});
resetBtn.addEventListener('click', resetBoxes);