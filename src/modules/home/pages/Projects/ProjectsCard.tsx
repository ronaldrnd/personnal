import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  repoLink: string;
  liveLink: string;
  detailsLink: string;
  coverImage: string;
  images: string[]; // Liste d'images supplémentaires pour la galerie
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, technologies, repoLink, liveLink, coverImage, images }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Carte du projet */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
        <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${coverImage})` }}></div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-center mt-4 gap-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaInfoCircle className="text-3xl" />
            </button>
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              <FaExternalLinkAlt className="text-3xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={() => setIsModalOpen(false)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{name}</h3>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Galerie d'images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-cover bg-center h-32 rounded-lg shadow-sm"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
