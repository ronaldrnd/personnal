import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project } from '../hooks/useProjects';
import axiosPrivate from '../../../../../utils/axiosPrivate';
import EditableField from '../components/EditTableField';
import { formatDate } from '../../../../../utils/dateUtils';
import Gallery from '../components/Gallery';
import { url } from '../../../../../utils/url';
import DispSkills from '../components/Skills';


const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axiosPrivate.get(`/projects/${id}`);
        
        
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details:', error);
      }
    };

    fetchProject();
  }, [id]);

  const handleToggleEnabled = async () => {
    if (project) {
      try {
        await axiosPrivate.put(`/projects/${project.id}`, {
          enabled: !project.enabled,
        });
        setProject({ ...project, enabled: !project.enabled });
      } catch (error) {
        console.error('Error updating project status:', error);
      }
    }
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <div className="mb-4">
        <EditableField fieldName="Title" fieldValue={project.title} projectId={project.id} />
        <img src={`${url}${project.profileImage}`} alt={project.title} className="mb-4 rounded-md shadow-md" />
        <EditableField fieldName="Description" fieldValue={project.description} projectId={project.id} />
        <div className="flex items-center mb-4">
          <span className="mr-2">Enabled: {project.enabled ? 'Yes' : 'No'}</span>
          <button
            onClick={handleToggleEnabled}
            className={`px-4 py-2 rounded ${project.enabled ? 'bg-red-500' : 'bg-green-500'} text-white`}
          >
            {project.enabled ? 'Disable' : 'Enable'}
          </button>
        </div>
        <div className="mb-4">
          <strong>Created At:</strong> {formatDate((project.createdAt).toString())}
        </div>
        <div className="mb-4">
          <strong>Updated At:</strong> {formatDate((project.updatedAt).toString())}
        </div>
      </div>
      <DispSkills pskills={project.skills} />
      <Gallery images={project.galleryImages} />
    </div>
  );
};

export default ProjectDetailPage;
