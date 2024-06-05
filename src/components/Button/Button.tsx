import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Ajoutez ici d'autres propriétés personnalisées si nécessaire
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
