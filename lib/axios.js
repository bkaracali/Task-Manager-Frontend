import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:7228/api', // .NET backend'indin URL
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default axiosInstance;
