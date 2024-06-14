import axios from 'axios'

const registerUserServices = (data) => axios.post(`${import.meta.env.VITE_API_URL}/user/register`, data)
const logInUserServices = (data) => axios.post(`${import.meta.env.VITE_API_URL}/user/login`, data)
const getMeUserServices = () => {
  const jwtToken = sessionStorage.getItem('token');
  return axios.get(`${import.meta.env.VITE_API_URL}/user/me`, {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    }
  });
};

export{
    registerUserServices,
    logInUserServices,
    getMeUserServices
}