import axios from "axios";

const user_token = localStorage.getItem('access_token');

const api = axios.create({
 baseURL:"http://localhost:4000/api",
 headers:{'Authorization':`Bearer ${user_token}`}
})

export {api}