import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4003',
  withCredentials: true,
});

export default api;
