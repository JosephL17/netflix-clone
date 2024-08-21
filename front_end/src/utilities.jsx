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
    let response = await api.post('users/login/', {
        "username": username,
        "password": password,
    });
    if (response.status === 200) {
        let { user, Token} = response.data;
        localStorage.setItem('token', Token);
        api.defaults.headers.common['Authorization'] = `Token ${Token}`;
        return user
        // return [...response.data]
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
    // let token = localStorage.getItem("token")
    let response = await api.post("users/logout/"
        // {headers: {"Authorization": `Token ${token}`}}
    )
    if(response.status === 204){
        delete api.defaults.headers.common["Authorization"]
        localStorage.removeItem("token")
      return null
    }
    alert("Something went wrong during log out!")
  }
