import { loadUser } from './components/events/loadUser.js'

const logOut = document.querySelector('.log-out')

const getToken = () => {
    return sessionStorage.getItem('token')
}

document.addEventListener('DOMContentLoaded', async () => {
    const token = getToken()
    
    if (token) {
        await loadUser(token)
    } else {
        window.location.href = 'userNotFound.html'
    }
})

logOut.addEventListener('click', () => {
    sessionStorage.removeItem('token')
    window.location.href = 'login.html'
})
