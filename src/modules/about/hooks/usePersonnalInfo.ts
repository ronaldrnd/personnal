// src/hooks/usePersonalInfo.ts
import { useState, useEffect } from 'react';
import { PersonalInfo } from '../types/about.odt';

const usePersonalInfo = () => {
  const [personalInfo] = useState<PersonalInfo>({
    name: 'Ronald',
    origin: 'Madagascar',
    journey: 'I started my journey as a full-stack developer...',
    passions: ['Technology', 'Basketball', 'Movies', 'Nature'],
    education: [
      { degree: 'Master in Telecommunications', institution: 'XYZ University', year: '2023-2025' },
      { degree: 'Bachelor in Computer Science', institution: 'ABC University', year: '2019-2023' },
    ],
    contact: {
      github: 'https://github.com/yourgithub',
      linkedin: 'https://linkedin.com/in/yourlinkedin',
      email: 'your.email@example.com',
    },
  });

  useEffect(() => {
    // Fetch personal information from an API or database if needed
  }, []);

  return personalInfo;
};

export default usePersonalInfo;
