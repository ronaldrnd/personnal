import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  repoUrl?: string;
  liveUrl?: string;
  detailsUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description, repoUrl, liveUrl, detailsUrl }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full md:w-1/3 object-cover" />
      <div className="p-4 w-full md:w-2/3">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex space-x-3">
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Repo
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
              Live
            </a>
          )}
          {detailsUrl && (
            <a href={detailsUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
              Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
