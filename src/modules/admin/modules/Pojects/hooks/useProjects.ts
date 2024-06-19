// src/hooks/useProjects.ts
import { useState, useEffect } from 'react';
import axiosPrivate from '../../../../../utils/axiosPrivate';


// src/interfaces/Project.ts
export interface Project {
    id: string;
    title: string;
    description: string;
    enabled: boolean;
    profileImage?: string;
    galleryImages: GalleryImage[];
    skills: Skill[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface GalleryImage {
    id: string;
    imagePath: string;
    enabled: boolean;
  }
  
  export interface Skill {
    id: number;
    name: string;
    level: string;
    domain: string;
    acquisitionYear: string | null; // Peut être null si non renseigné
    description: string;
    photo: string;
    enable: boolean;
    createdAt: string; // Date de création au format ISO 8601
    updatedAt: string; // Date de mise à jour au format ISO 8601
  }
  
  

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axiosPrivate.get('/projects');
        setProjects(response.data);
      } catch (error) {
        setError('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
