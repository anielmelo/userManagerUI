import { authUser, createUser } from '../services/Fetch.js'

const register = document.querySelector('#register-form-disabled')
const login = document.querySelector('#login-form')
const switchButton = document.querySelector('#switch-form')

login.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector('#email-input-login').value
    const password = document.querySelector('#password-input-login').value
    
    const response = await authUser({ email, password })
    console.log(response)
    
    validateLogin(response, login)
})

register.addEventListener('submit', async (event) => {
    event.preventDefault()

    const name = document.querySelector('#name-input-register').value
    const email = document.querySelector('#email-input-register').value
    const password = document.querySelector('#password-input-register').value

    const response = await createUser({ name, email, password })

    if (response.error === 'false') {
        register.reset()
        switchButton.click()
    }

    // const message = response.message
    // import event snackbar
})

const validateLogin = (data, login) => {
    if (data.error === 'false') {
        sessionStorage.setItem('token', data.jwt)
        login.reset()
        window.location.href = 'main.html'
    }
    // import event snackbar
}
