// src/components/Contact/ContactButtons.tsx
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactInfo } from '../types/contact.odt';

interface ContactButtonsProps {
  contact: ContactInfo;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ contact }) => (
  <div className="flex justify-center gap-10 mt-6">
    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="border-2 rounded-xl p-2">
      <FaGithub className="w-10 h-10"/>
    </a>
    <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="border-2 rounded-xl p-2">
      <FaLinkedin className="w-10 h-10"/>
    </a>
    <a href={`mailto:${contact.email}`} className="border-2 rounded-xl p-2">
      <FaEnvelope className="w-10 h-10"/>
    </a>
    <a href={`tel:${contact.phone}`} className="border-2 rounded-xl p-2">
      <FaPhone className="w-10 h-10"/>
    </a>
  </div>
);

export default ContactButtons;
