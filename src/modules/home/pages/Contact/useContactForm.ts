// src/hooks/useContactForm.ts
import { useState } from 'react';
import emailjs from 'emailjs-com';

const useContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_USER_ID'
    ).then(() => {
      alert('Message sent successfully!');
    }).catch((error) => {
      console.error('Failed to send message:', error);
    });
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
