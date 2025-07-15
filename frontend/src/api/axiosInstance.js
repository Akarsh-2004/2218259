import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Your backend port
  headers: { 'Content-Type': 'application/json' }
});

export default axiosInstance;
