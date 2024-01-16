import axios from 'axios';

const api = axios.create({
  baseURL: 'https://keyslab-backend-5b175a71bd82.herokuapp.com',
  withCredentials: true,
});

export default api;
