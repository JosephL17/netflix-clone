import axios from 'axios'

export const api = axios.create({
    baseURL:'http://127.0.0.1:8000/api/v1/'
})

export const userRegistration = async (email, password, username) => {
    console.log(email, password, username)
    let response = await api.post('users/signup/', {
        "email": email,
        "password": password,
        "username": username
    });
    if (response.status === 201) {
        let { user, Token } = response.data;
        localStorage.setItem('token', Token);
        api.defaults.headers.common['Authorization'] = `Token ${Token}`;
        return user
    }
    alert(response.data);
    return null

}