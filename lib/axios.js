import axios from 'axios';

// API URL'inizi burada tanımlayın
const axiosInstance = axios.create({
  baseURL: 'https://localhost:7228/api', // Backend API'nizin temel URL'si
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance; // axiosInstance'ı dışarıya aktar