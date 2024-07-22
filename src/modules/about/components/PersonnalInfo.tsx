// src/components/About/PersonalInfo.tsx
import React from 'react';
import { PersonalInfo as PersonalInfoType } from '../../about/types/about.odt';

interface PersonalInfoProps {
  personalInfo: PersonalInfoType;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo }) => (
  <div>
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg mb-2">{`I am ${personalInfo.name} from ${personalInfo.origin}.`}</p>
    <p className="text-lg mb-2">{personalInfo.journey}</p>
    <p className="text-lg mb-2">My passions include:</p>
    <ul className="list-disc list-inside mb-4">
      {personalInfo.passions.map((passion) => (
        <li key={passion}>{passion}</li>
      ))}
    </ul>
    <p className="text-lg mb-2">My education:</p>
    <ul className="list-disc list-inside mb-4">
      {personalInfo.education.map((edu) => (
        <li key={edu.degree}>
          {`${edu.degree}, ${edu.institution} (${edu.year})`}
        </li>
      ))}
    </ul>
  </div>
);

export default PersonalInfo;
