// src/hooks/useSubmit.ts
import { useState } from 'react';
import { UserCredentials } from '../types/userCredentials';

export const useSubmit = (submitFunction: (data: UserCredentials) => Promise<void>) => {
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (data: UserCredentials) => {
        try {
            await submitFunction(data);
            setError(null); // Réinitialise l'erreur si la soumission réussit
        } catch (err) {
            setError(err as string); // Capture et définit l'erreur
        }
    };

    return { handleSubmit, error };
};
