import { loadUser } from './components/events/loadUser.js'

const getToken = () => {
    return sessionStorage.getItem('token')
}

document.addEventListener('DOMContentLoaded', async () => {
    const token = getToken()
    
    if (token) {
        await loadUser(token)
    } else {
        window.location.href = 'UserNotFound.html'
    }
})
