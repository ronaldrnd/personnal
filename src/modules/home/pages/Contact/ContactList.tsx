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
    <div className="w-full">
      {contacts.map((contact, index) => (
        <div key={index} className="p-4 rounded-md flex flex-col gap-10">
          <h3 className="text-xl font-semibold">{contact.name}</h3>
          <ul className="mt-2 flex flex-col  gap-10 text-xl">
            {contact.phone && (
              <li className="flex items-center">
                <span className="mr-2">
                  <FaPhone />
                </span>
                <span>{contact.phone}</span>
              </li>
            )}
            {contact.email && (
              <li className="flex items-center">
                <span className="mr-2">
                  <FaMessage />
                </span>
                <span>{contact.email}</span>
              </li>
            )}
            {contact.linkedin && (
              <li className="flex items-center">
                <span className="mr-2">
                  <FaLinkedin />
                </span>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {contact.linkedin}
                </a>
              </li>
            )}
            {contact.facebook && (
              <li className="flex items-center">
                <span className="mr-2">
                  <FaFacebook />
                </span>
                <a
                  href={contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {contact.facebook}
                </a>
              </li>
            )}
            {contact.instagram && (
              <li className="flex items-center">
                <span className="mr-2">
                  <FaInstagram />
                </span>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {contact.instagram}
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
