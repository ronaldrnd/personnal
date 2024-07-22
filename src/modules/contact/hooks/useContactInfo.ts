// src/hooks/useContactInfo.ts
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types/contact.odt';

const useContactInfo = () => {
  const [contactInfo] = useState<ContactInfo>({
    github: 'https://github.com/yourgithub',
    linkedin: 'https://linkedin.com/in/yourlinkedin',
    email: 'your.email@example.com',
    phone: '+1234567890',
  });

  useEffect(() => {
    // Fetch contact information from an API or database if needed
  }, []);

  return contactInfo;
};

export default useContactInfo;
