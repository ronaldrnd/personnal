// src/components/MenuVertical.tsx
import React from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import { FaHome, FaSquare } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import { GiSkills } from 'react-icons/gi';

const Menu: React.FC = () => {
  return (
    <div className="fixed top-28 left-10 h-3/4 w-18 bg-transparent text-white flex flex-col items-center justify-center py-10">
      <nav className="flex flex-col gap-20">
        <a href="#hero" className="text-lg text-gray-800 hover:text-blue-500"><FaHome className='h-8 w-8 '/></a>
        <a href="#about" className="text-lg text-gray-800 hover:text-blue-500"><FaSquare className='h-8 w-8 '/></a>
        <a href="#projects" className="text-lg text-gray-800 hover:text-blue-500"><AiOutlineProject className='h-8 w-8 '/></a>
        <a href="#skills" className="text-lg text-gray-800 hover:text-blue-500"><GiSkills className='h-8 w-8 '/></a>
        <a href="#contacts" className="text-lg text-gray-800 hover:text-blue-500"><FaMessage className='h-8 w-8 '/></a>
      </nav>
    </div>
  );
};

export default Menu;
