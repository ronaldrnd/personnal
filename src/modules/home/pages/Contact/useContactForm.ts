import { useState } from 'react';
import axios from 'axios';

const useContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Please complete the CAPTCHA!');
      return;
    }

    try {
      const response = await axios.post(
        'https://back-email-kybq.onrender.com/send-email',
        {
          ...formData
        }
      );

      console.log(response);
      
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    } catch (error) {
      alert('Failed to send message');
      console.error(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    setRecaptchaToken, // Allow setting the reCAPTCHA token
  };
};

export default useContactForm;
