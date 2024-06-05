import axios from "axios"

const BASE_URL = 'http://127.0.0.1:3000/api/v1'

const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)

export{
    getOneItemService
}