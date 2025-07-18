import axios from 'axios';

// configuration URL base for backend

const API_BASE_URL = 'https://backend-sitem-absensi.onrender.com/api'; // <-- Change this IP to your backend server IP

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

//Interceptor for add token JWT to every request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Pull token form localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Add to Authorization header
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default api;
