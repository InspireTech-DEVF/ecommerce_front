import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:3000/api/v1'

const registerUserServices = (data) => axios.post(`${BASE_URL}/register`, data)

export{
    registerUserServices
}