// src/components/SkillsSummary.tsx
import React from 'react';
import { skills } from './skills';

const SkillsSummary: React.FC = () => {
  return (
    <div className="mb-10">
     
      <div className="mt-6 space-y-6">
        {Object.entries(skills).map(([category, skills]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold mb-2 capitalize">{category}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map(skill => (
                <div key={skill.name} className="bg-white p-4 flex items-center rounded-lg shadow-md">
                  <skill.icon className={`text-4xl mr-4 ${skill.color}`} />
                  <div>
                    <h4 className="font-semibold">{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSummary;
