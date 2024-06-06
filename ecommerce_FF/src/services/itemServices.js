import axios from "axios"

const BASE_URL = 'https://ecommerce-back-1ly7.onrender.com/api/v1'

const getAllItemsServices = () => axios.get(`${BASE_URL}/items`)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)


const createItemServices = (data, jwtToken) => axios.post(`${BASE_URL}/items`,
  data, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  })

export{
    getAllItemsServices,
    getOneItemService,
    createItemServices
}