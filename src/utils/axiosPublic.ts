// src/api/axiosPublic.ts
import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'http://localhost:3000/api', // Assurez-vous de définir REACT_APP_API_URL dans vos variables d'environnement
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosPublic;
