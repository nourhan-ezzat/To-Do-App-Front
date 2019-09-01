import axios from 'axios'
const BASEURL = 'http://localhost:3001'

export const register = () => {
    return axios.post(`${BASEURL}/register`)
        .then(res => res.data)
}

export const login = ({ username, password }) => {
    return axios.post(`${BASEURL}/login`, { 
        username: username, 
        password: password
    })
        .then(res => res.data)
}

export const logout = () => {
    return axios.get('/', {
        headers: {
            'authorization': 'Bearer ${' + localStorage.removeItem('userToken') + '}'
        }
    })
        .then(res => res.data)
}