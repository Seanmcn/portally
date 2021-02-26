import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.circle.devel',
  withCredentials: true,
});

export default apiClient;