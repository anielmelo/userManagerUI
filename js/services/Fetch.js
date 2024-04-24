const URL_BASE = "https://user-manager-coral.vercel.app"

export const hello = async () => {
    const response = await fetch(`${URL_BASE}/`)
    return await response.json()
}

export const authUser = async ({ email, password }) => {
    const response = await fetch(`${URL_BASE}/users/login`, {
        method: 'post',
        body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    return data
}

export const createUser = async ({ name, email, password}) => {
    const response = await fetch(`${URL_BASE}/users/create`, {
        method: 'post',
        body: JSON.stringify({ name, email, password })
    })
    const data = await response.json()
    return data
}

export const getUser = async (token) => {
    const response = await fetch(`${URL_BASE}/users/fetch`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data
}

export const updateUser = async (name, token) => {
    const response = await fetch(`${URL_BASE}/users/update`, {
        method: 'put',
        headers: { 
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ name })
    })
    const data = await response.json()
    return data
}

export const deleteUser = async (token) => {
    const response = await fetch(`${URL_BASE}/users/delete`, {
        method: 'delete',
        headers: { 
            'Authorization': `Bearer ${token}`
        }
    })
    const data = await response.json()
    return data
}
