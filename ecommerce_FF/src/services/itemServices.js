import axios from 'axios'

const BASE_URL = 'https://ecommerce-back-1ly7.onrender.com'

const getAllItemsServices = () => axios.get(`${BASE_URL}/items`)
const getOneItemServices = (id) => axios.get(`${BASE_URL}/items/${id}`)
const createItemServices = (data, jwtToken) => axios.post(`${BASE_URL}/users/me`, data, {
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
})

export {
  getAllItemsServices,
  getOneItemServices,
  createItemServices
}
