// src/api/axiosPrivate.ts
import axios from 'axios';
import axiosPublic from './axiosPublic';
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  removeAccessToken,
  removeRefreshToken,
} from '../utils/tokenUtils';

const axiosPrivate = axios.create({
  baseURL: 'http://localhost:1338/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Pour envoyer des cookies avec chaque requête
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = getAccessToken(); // Récupérer le token des cookies
    console.log("token", token);
    
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  (response) => {
    // Vérifie si le token est présent dans les en-têtes de réponse
    const newAccessToken = response.headers['x-access-token'];
    if (newAccessToken) {
      setAccessToken(newAccessToken);
      axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axiosPublic.post('/auth/refresh-token', {
          token: getRefreshToken(),
        });
        const { accessToken } = response.data;
        setAccessToken(accessToken);
        axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return axiosPrivate(originalRequest);
      } catch (err) {
        removeAccessToken();
        removeRefreshToken();
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
