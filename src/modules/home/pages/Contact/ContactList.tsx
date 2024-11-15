import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMessage, FaPhone } from "react-icons/fa6";

interface Contact {
  name: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
}

interface ContactListProps {
  contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="p-6 rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Contact Name */}
          <h3 className="text-2xl font-bold text-gray-800">{contact.name}</h3>

          {/* Contact Details */}
          <ul className="mt-4 flex flex-col gap-4">
            {contact.phone && (
              <li className="flex items-center text-lg text-gray-700">
                <FaPhone className="mr-3 text-green-500" aria-label="Phone icon" />
                <span>{contact.phone}</span>
              </li>
            )}
            {contact.email && (
              <li className="flex items-center text-lg text-gray-700">
                <FaMessage className="mr-3 text-blue-500" aria-label="Email icon" />
                <span>{contact.email}</span>
              </li>
            )}
            {contact.linkedin && (
              <li className="flex items-center text-lg">
                <FaLinkedin className="mr-3 text-blue-700" aria-label="LinkedIn icon" />
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </li>
            )}
            {contact.facebook && (
              <li className="flex items-center text-lg">
                <FaFacebook className="mr-3 text-blue-600" aria-label="Facebook icon" />
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
                >
                  Facebook Profile
                </a>
              </li>
            )}
            {contact.instagram && (
              <li className="flex items-center text-lg">
                <FaInstagram className="mr-3 text-pink-500" aria-label="Instagram icon" />
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline hover:text-blue-600 transition-colors duration-300"
                >
                  Instagram Profile
                </a>
              </li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
