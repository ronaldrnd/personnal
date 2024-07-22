// src/components/StyledButton.tsx
import React from 'react';

interface StyledButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  download?: string; 
}

const StyledButton: React.FC<StyledButtonProps> = ({ text, onClick, href, download }) => {
  return (
    <a
      onClick={onClick}
      className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
      href={href}
      download={download}
    >
      {text}
    </a>
  );
};

export default StyledButton;
