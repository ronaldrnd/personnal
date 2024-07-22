// src/components/BackButton.tsx
import React from 'react';

import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const BackButton: React.FC = () => {
    const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/');
  };

  return (
    <button
      onClick={goToHomePage}
      className="fixed top-4 left-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
      aria-label="Go back to homepage"
    >
      <FaArrowLeft className="text-xl" />
    </button>
  );
};

export default BackButton;
