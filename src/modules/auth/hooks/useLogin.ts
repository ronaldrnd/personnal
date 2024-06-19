import { useState } from 'react';
import axiosPublic from '../../../utils/axiosPublic';

export const useLogin = () => {
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (userName: string, password: string) => {
        try {
            const response = await axiosPublic.post('/sessions', { userName, password });
            const { accessToken, refreshToken } = response.data; // Supposons que l'API renvoie ces tokens

            // Stockage des tokens dans les cookies ou tout autre gestionnaire
            // Exemple fictif de stockage dans les cookies
            document.cookie = `accessToken=${accessToken}; path=/`;
            document.cookie = `refreshToken=${refreshToken}; path=/`;

            setError(null); // Réinitialise l'erreur si la connexion réussit
        } catch (err: any) {
            setError(err.response.data.message || 'Erreur lors de la connexion'); // Capture et définit l'erreur
        }
    };

    return { handleLogin, error };
};
