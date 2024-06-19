import Cookies from 'js-cookie';

// Nom des cookies pour les tokens
const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';

// Durée d'expiration des cookies
const ACCESS_TOKEN_EXPIRES_IN = 1; // 1 jour pour l'access token
const REFRESH_TOKEN_EXPIRES_IN = 7; // 7 jours pour le refresh token

// Fonction pour stocker les tokens dans les cookies
export const setRefreshToken = ( refreshToken: string) => {
  Cookies.set(REFRESH_TOKEN_KEY, refreshToken, { expires: REFRESH_TOKEN_EXPIRES_IN });
};

export const setAccessToken = (accessToken: string) => {
  Cookies.set(ACCESS_TOKEN_KEY, accessToken, { expires: ACCESS_TOKEN_EXPIRES_IN });
}

// Fonction pour récupérer l'access token depuis les cookies
export const getAccessToken = () => {
  return Cookies.get(ACCESS_TOKEN_KEY);
};

// Fonction pour récupérer le refresh token depuis les cookies
export const getRefreshToken = () => {
  return Cookies.get(REFRESH_TOKEN_KEY);
};

// Fonction pour supprimer les tokens des cookies
export const removeRefreshToken = () => {
  Cookies.remove(REFRESH_TOKEN_KEY);
};

export const removeAccessToken = () => {
  Cookies.remove(ACCESS_TOKEN_KEY);
}
