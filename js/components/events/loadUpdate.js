import { getUser, updateUser } from '../../services/Fetch.js'
import { showSnackbar } from './showSnackbar.js'

const updateForm = document.querySelector('.update-user-disabled')

export const loadUpdate = async (token) => {
    const response = await getUser(token)
    
    const user = response.user
    
    updateForm.setAttribute('class', 'update-user')

    updateForm.innerHTML = ''

    updateForm.innerHTML += `
        <div class="form-update-space">
            <button id="close-btn">X</button>
            <form id="update-form">
                <div class="input-form">
                    <label for="name">Name: </label>
                    <input placeholder="new name" type="text" name="name" id="name-input-update" value="${user.name}" required>
                </div>
                <div class="button-form">
                    <button class="update-button" type="submit">update</button>
                </div>
            </form>
        </div>
    `
    const close = document.querySelector('#close-btn')
    const update = document.querySelector('#update-form')
    
    close.addEventListener('click', () => {
        update.reset()
        updateForm.setAttribute('class', 'update-user-disabled')
    })

    update.addEventListener('submit', async (event) => {
        event.preventDefault()
    
        const name = document.querySelector('#name-input-update').value
        
        const response = await updateUser(name, token)

        showSnackbar(response.message, response.success)
        
        if (response.error === 'true') {
            return;
        }

        close.click()
        location.reload()
    })
}