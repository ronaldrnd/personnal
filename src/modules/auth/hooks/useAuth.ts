import { useState } from "react";

interface User {
  name: string;
  isAuthenticated: boolean;
}

interface Login {
  username: string;
  password: string;
}

/**
 * A custom hook for user authentication.
 *
 * @returns An object containing the user state, login and logout functions.
 */
export default function useAuth() {
  /**
   * The current user state.
   *
   * @type {User}
   */
  const [user, setUser] = useState<User>({name: "", isAuthenticated: false});

  /**
   * Logs the user in with the provided username and password.
   *
   * @param {Login} credentials - An object containing the username and password.
   * @returns A Promise that resolves to "Authenticated" if the password is correct, or rejects with "Incorrect password".
   */
  const login = ({username, password}: Login) => {
    return new Promise((resolve, reject) => {
      if (password === "password") {
        setUser({ name: username, isAuthenticated: true });
        resolve("Authenticated");
      } else {
        reject("Incorrect password");
      }
    });
  };

  /**
   * Logs the user out.
   */
  const logout = () => {
    setUser({...user, isAuthenticated: false});
  };

  return {
    user,
    login,
    logout,
  };
}
