import Axios from 'axios';

const api = Axios.create({
  baseURL:'https://www.thecocktaildb.com/api/json/v1/1'
})

export default api;