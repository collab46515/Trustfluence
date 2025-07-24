import axios from 'axios';

// Use your Mac's IP or tunnel URL
const API_BASE_URL = process.env.API_BASE_URL || 'http://192.168.1.96:5001/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

let authToken = null;

export const setAuthToken = (token) => {
  authToken = token;
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // Persist token in async-storage later
};

// Optional: Intercept 401s
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle logout or redirect to login
      console.log('Session expired');
    }
    return Promise.reject(error);
  }
);
