import axios from 'axios'

const BASE_URL = 'https://ecommerce-back-1ly7.onrender.com/api/v1'

const registerUserServices = (data) => axios.post(`${BASE_URL}/user/register`, data)
const logInUserServices = (data) => axios.post(`${BASE_URL}/user/login`, data)
const getMeUserServices = (jwtToken) => axios.get(`${BASE_URL}/user/me`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

export{
    registerUserServices,
    logInUserServices,
    getMeUserServices
}