// src/data/skills.ts
import { FaHtml5, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaSymfony, FaWordpress, FaGitAlt, FaDocker, FaWindows, FaLinux, FaJsSquare } from 'react-icons/fa';
import { SiTailwindcss, SiPostgresql, SiMongodb, SiTypescript, SiMariadb } from 'react-icons/si';

export const skills = {
  frontend: [
    { name: 'HTML/CSS', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'Typescript', icon: SiTypescript, color: 'text-blue-500' },
    { name: 'ReactJS', icon: FaReact, color: 'text-blue-500' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-500' },
    { name: 'TailwindCSS', icon: SiTailwindcss, color: 'text-blue-400' },
  ],
  backend: [
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'ExpressJS', icon: FaJsSquare, color: 'text-yellow-500' },
    { name: 'PHP', icon: FaPhp, color: 'text-purple-500' },
    { name: 'Symfony', icon: FaSymfony, color: 'text-gray-500' },
  ],
  databases: [
    { name: 'MariaDB', icon: SiMariadb, color: 'text-indigo-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  ],
  cms: [
    { name: 'WordPress', icon: FaWordpress, color: 'text-blue-500' },
  ],
  versioning: [
    { name: 'Git', icon: FaGitAlt, color: 'text-red-600' },
  ],
  tools: [
    { name: 'Docker', icon: FaDocker, color: 'text-cyan-500' },
    { name: 'Windows', icon: FaWindows, color: 'text-blue-500' },
    { name: 'Linux', icon: FaLinux, color: 'text-gray-500' },
  ],
};
