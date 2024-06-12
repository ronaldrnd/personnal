import React, { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const useContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Logique de soumission du formulaire
    console.log(formData);
  };

  return { formData, handleChange, handleSubmit };
};

export default useContactForm;
