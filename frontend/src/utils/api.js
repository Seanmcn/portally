import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.circle.devel',
  withCredentials: true,
});

export default api;