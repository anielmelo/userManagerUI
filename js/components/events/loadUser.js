import { getUser, deleteUser } from '../../services/Fetch.js'
import { loadUpdate } from './loadUpdate.js'
import { showSnackbar } from './showSnackbar.js'

const main = document.querySelector('main')

export const loadUser = async (token) => {
    const response = await getUser(token)

    const user = response.user

    main.innerHTML = ''

    main.innerHTML += `
        <div class="info-user">
            <div class="data">
                <label for="name">Name: </label>
                <p id="name">${user.name}</p>
                
                <label for="name">Email: </label>
                <p id="email">${user.email}</p>
            </div>
            <div class="action">
                <button class="update-button" id="update-user-btn">update</button>
                <button class="delete-button" id="delete-user-btn">delete</button>
            </div>
        </div>
    `
    const updateButton = document.querySelector('#update-user-btn')
    const deleteButton = document.querySelector('#delete-user-btn')

    updateButton.addEventListener('click', async () => {
        await loadUpdate(token)
    })

    deleteButton.addEventListener('click', async () => {
        const response = await deleteUser(token)
        if (response.error === 'false') {
            window.location.href = 'login.html'
            sessionStorage.removeItem('token')
        }
        showSnackbar(response.message, response.success)
    })
}