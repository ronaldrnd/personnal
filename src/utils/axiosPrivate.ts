// src/api/axiosPrivate.ts
import axios from 'axios';
import axiosPublic from './axiosPublic';

const axiosPrivate = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Pour envoyer des cookies avec chaque requête
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken'); // Suppose que vous stockez le token dans le localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axiosPublic.post('/auth/refresh-token', {
          token: localStorage.getItem('refreshToken'),
        });
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        axiosPrivate.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        return axiosPrivate(originalRequest);
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosPrivate;
