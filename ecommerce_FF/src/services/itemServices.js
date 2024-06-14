import axios from "axios"


const getAllItemsServices = () => axios.get(`${import.meta.env.VITE_API_URL}/items`)
const getOneItemService = (id) => axios.get(`${import.meta.env.VITE_API_URL}/items/${id}`)


const createItemServices = (data, jwtToken) => axios.post(`${import.meta.env.VITE_API_URL}/items`,
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