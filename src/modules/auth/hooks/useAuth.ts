import { getAccessToken, removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken } from '../../../utils/tokenUtils';
import axiosPrivate from '../../../utils/axiosPrivate';
import axiosPublic from '../../../utils/axiosPublic';
import { useAuthStore } from '../store/authStore';
import { useState } from 'react';


export const useAuth = () => {
  const {isAuthenticated, setIsAuthenticated} = useAuthStore();
  const [error, setError] = useState()

  const login = async (username: string, password: string) => {
    try {
      const response = await axiosPublic.post('/sessions', { username, password });
      const { accessToken, refreshToken } = response.data;

      setAccessToken(accessToken); // Stocke le token JWT dans un cookie
      setRefreshToken(refreshToken)
      setIsAuthenticated(true);
    } catch (error:any) {
      console.error('Erreur de connexion:', error);
      setError(error.message)
    }
  };

  const logout = async () => {
    try {
      await axiosPrivate.post('/logout');
      removeAccessToken(); // Supprime le token JWT du cookie
      removeRefreshToken()
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
    }
  };

  const checkAuth = () => {
    const accessToken = getAccessToken();
    if (accessToken) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  return { isAuthenticated, login, logout, checkAuth, error };
};
