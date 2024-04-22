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

export const createUser = async (form_register) => {
    const response = await fetch(`${URL_BASE}/users/create`, {
        method: 'post',
        body: form_register
    })
    const data = await response.json()
    return data
}

export const getUser = async (token) => {
    const response = await fetch(`${URL_BASE}/users/fetch`, {
        headers: { 'Authorization': `Bearer ${token}` }
    })
    const userResponse = await response.json()
    return userResponse
}
