// src/components/StyledButton.tsx
import React from 'react';

interface StyledButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  download?: string;
  icon?: React.ReactNode; // Optional icon before the text
  iconPosition?: "left" | "right"; // Position of the icon
}

const StyledButton: React.FC<StyledButtonProps> = ({
  text,
  onClick,
  href,
  download,
  icon,
  iconPosition = "left",
}) => {
  return (
    <a
      onClick={onClick}
      className="relative inline-flex items-center justify-center bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-purple-500 hover:to-green-500 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
      href={href}
      download={download}
    >
      {icon && iconPosition === "left" && (
        <span className="mr-2 text-lg">{icon}</span>
      )}
      <span>{text}</span>
      {icon && iconPosition === "right" && (
        <span className="ml-2 text-lg">{icon}</span>
      )}
    </a>
  );
};

export default StyledButton;
