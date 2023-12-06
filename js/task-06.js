const textInput = document.querySelector('#validation-input')

const validation = () => {
if (textInput.value.length < textInput.dataset.length) {
    textInput.classList.add('invalid')
    textInput.classList.remove('valid')
} else {
    textInput.classList.remove('invalid')
    textInput.classList.add('valid')
}
}

textInput.addEventListener('blur', validation)