const counterValue = document.querySelector("#value")
const buttonPlus = document.querySelector('[data-action="increment"]')
const buttonMinus = document.querySelector('[data-action="decrement"]')
let value = 0

const counterPlus = () => {
    value += 1
    counterValue.textContent = value
}

const counterMinus = () => {
    value -= 1
    counterValue.textContent = value
}

buttonPlus.addEventListener('click', counterPlus)
buttonMinus.addEventListener('click', counterMinus)
