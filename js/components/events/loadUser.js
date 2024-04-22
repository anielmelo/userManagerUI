import { getUser } from '../../services/Fetch.js'

const main = document.querySelector('main')

export const loadUser = async (token) => {
    const response = await getUser(token)

    console.log(response)

    const user = response.jwt

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
                <button class="update-button" id="update-${user.id}" onclick="updateUser(${user.id})">update</button>
                <button class="delete-button" id="delete-${user.id}" onclick="deleteUser(${user.id})">delete</button>
            </div>
        </div>
    `
}