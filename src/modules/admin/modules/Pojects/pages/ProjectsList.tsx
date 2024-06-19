import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../../../utils/axiosPrivate';
import { Project } from '../hooks/useProjects';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosPrivate.get('/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (id: string) => {
    navigate(`/admin/projects/${id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border rounded p-4 cursor-pointer hover:shadow-lg"
            onClick={() => handleProjectClick(project.id)}
          >
            <img src={project.profileImage} alt={project.title} className="mb-4" />
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
