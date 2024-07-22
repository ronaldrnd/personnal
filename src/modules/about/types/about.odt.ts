// src/types/index.ts
export interface ContactInfo {
    github: string;
    linkedin: string;
    email: string;
  }
  
  export interface Education {
    degree: string;
    institution: string;
    year: string;
  }
  
  export interface PersonalInfo {
    name: string;
    origin: string;
    journey: string;
    passions: string[];
    education: Education[];
    contact: ContactInfo;
  }
  