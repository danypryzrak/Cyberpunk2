const form = document.querySelector('.login-form')

const onSubmit = (ev) => {
    ev.preventDefault()
    let email = form.elements.email.value
    let password = form.elements.password.value
    if (email === '' || password === '') {
        alert('All fields must be filled in')
    } else { 
    const userData = {
        email,
        password,
    }
    console.log(userData)
}
}

form.addEventListener('submit', onSubmit)
