import { useState } from 'react';
import { useAuthStore } from '../store/authStore';

export const useLogin = () => {
    const { login } = useAuthStore();
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (userName: string, password: string) => {
        try {
            await login(userName, password);
            setError(null); // Réinitialise l'erreur si la connexion réussit
        } catch (err) {
            setError(err as string); // Capture et définit l'erreur
        }
    };

    return { handleLogin, error };
};
