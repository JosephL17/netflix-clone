import axios from 'axios'

export const api = axios.create({
    baseURL:'http://127.0.0.1:8000/api/v1/'
})

export const userRegistration = async (email, username, password) => {
    console.log(username, email, password)
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

export const logIn = async (username, password) => {
    console.log(username, password,)
    let response = await api.post('users/login/', {
        "username": username,
        "password": password,
    });
    if (response.status === 200) {
        let { user, Token } = response.data;
        localStorage.setItem('token', Token);
        api.defaults.headers.common['Authorization'] = `Token ${Token}`;
        return user
    }
    alert(response.data);
    return null

}

export const confirmUser = async() => {
    let Token = localStorage.getItem('token')
    if (Token) {
        api.defaults.headers.common['Authorization'] = `Token ${Token}`
        let response = await api.get('users/')
        return response.data.user;
    }
    return null
}

export const logOut = async() => {
    let response = await api.post("users/logout/")
    if(response.status === 204){
      localStorage.removeItem("token")
      delete api.defaults.headers.common["Authorization"]
      return null
    }
    alert("Something went wrong during log out!")
  }
