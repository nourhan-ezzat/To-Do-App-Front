import axios from 'axios'
const BASEURL = 'http://localhost:3001'

export const createList = ({ title }) => {
    return axios.post(`${BASEURL}/lists`, { title: title })
        .then(res => res.data)
}

export const updateList = ({ title, id }) => {
    return axios.patch(`${BASEURL}/lists/${id}`, { title: title })
        .then(res => res.data)
}

export const deleteList = ({ id }) => {
    axios.delete(`${BASEURL}/lists/${id}`)
        .then(res => res.data)
}

export const getLists = () => {
    return axios.get(`${BASEURL}/lists`)
        .then(res => res.data)
}

