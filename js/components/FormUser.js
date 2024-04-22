import { authUser, createUser } from '../services/Fetch.js'

const register = document.querySelector('#register-form-disabled')
const login = document.querySelector('#login-form')

login.addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector('#email-input-login').value
    const password = document.querySelector('#password-input-login').value
    
    const response = await authUser({ email, password })
    console.log(response)
    
    validateLogin(response, login)
})

register.addEventListener('submit', (event) => {
    event.preventDefault()
})

const validateLogin = (data, login) => {
    if (data.error === 'false') {
        sessionStorage.setItem('token', data.jwt)
        login.reset()
        window.location.href = 'main.html'
    }
    // import event snackbar
}
