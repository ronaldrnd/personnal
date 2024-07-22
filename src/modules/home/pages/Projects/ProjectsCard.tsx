// src/components/ProjectCard.tsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  repoLink: string;
  liveLink: string;
  detailsLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, repoLink, liveLink, detailsLink }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-600 mb-4"><strong>Technologies:</strong> {technologies.join(', ')}</p>
      <div className="flex justify-center mt-4 gap-10">
        <a href={detailsLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
          <FaInfoCircle className="inline text-2xl" />
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-blue-800 transition-colors">
          <FaGithub className="inline text-2xl" />
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-blue-800 transition-colors">
          <FaExternalLinkAlt className="inline text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
