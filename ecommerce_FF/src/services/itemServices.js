import axios from "axios"

const BASE_URL = 'https://ecommerce-back-1ly7.onrender.com'

const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)

export{
    getOneItemService
}