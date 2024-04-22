const switchButton = document.querySelector('#switch-form')

const loginForm = document.querySelector('#login-form')
const registerForm = document.querySelector('#register-form-disabled')

let loginMode = true
switchButton.addEventListener('click', () => {
    
    if (loginMode) {
        loginForm.setAttribute('id', 'login-form-disabled')
        registerForm.setAttribute('id', 'register-form')
        switchButton.textContent = 'login'
        loginMode = false
        return;
    }

    registerForm.setAttribute('id', 'register-form-disabled')
    loginForm.setAttribute('id', 'login-form')
    switchButton.textContent = 'register'
    loginMode = true
})
