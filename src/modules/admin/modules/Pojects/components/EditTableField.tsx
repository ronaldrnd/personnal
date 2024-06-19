import React, { useState } from 'react';
import axiosPrivate from '../../../../../utils/axiosPrivate';

interface EditableFieldProps {
  fieldName: string;
  fieldValue: string;
  projectId: string;
}

const EditableField: React.FC<EditableFieldProps> = ({ fieldName, fieldValue, projectId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(fieldValue); // État local pour la valeur modifiée
  const [originalValue, setOriginalValue] = useState(fieldValue); // État local pour la valeur originale avant l'édition

  // Gestion de la sauvegarde des modifications
  const handleSave = async () => {
    try {
      await axiosPrivate.put(`/projects/${projectId}`, {
        [fieldName.toLowerCase()]: value,
      });
      setIsEditing(false); // Désactive le mode édition après la sauvegarde
    } catch (error) {
      console.error(`Error updating ${fieldName.toLowerCase()}:`, error);
      // Gérer les erreurs ici, par exemple, en affichant un message d'erreur à l'utilisateur
    }
  };

  // Annuler les modifications en revenant à la valeur originale
  const handleCancel = () => {
    setValue(originalValue);
    setIsEditing(false);
  };

  return (
    <div className="mb-4">
      <strong>{fieldName}:</strong>
      {isEditing ? (
        <>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border rounded px-2 py-1 ml-2"
          />
          <button
            onClick={handleSave}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded"
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="ml-2">{fieldValue}</span>
          <button
            onClick={() => {
              setOriginalValue(value); // Sauvegarde la valeur originale avant l'édition
              setIsEditing(true);
            }}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditableField;
