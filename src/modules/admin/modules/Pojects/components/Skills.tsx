import React from 'react';
import { Skill } from '../hooks/useProjects';

interface SkillsProps {
  pskills: Skill[]
}

const DispSkills: React.FC<SkillsProps> = ({ pskills }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {pskills.map((skill) => (
          <span key={skill.id} className="px-2 py-1 bg-gray-200 rounded shadow-md">
            {skill.name}
          </span>
        ))}
      </div>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">Add Skill</button>
    </div>
  );
};

export default DispSkills;
