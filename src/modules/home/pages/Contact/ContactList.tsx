import React from "react";

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
    <div>
      <ul className="space-y-4">
        {contacts.map((contact, index) => (
          <li key={index} className="border border-gray-200 p-4 rounded-md">
            <h3 className="text-lg font-semibold">{contact.name}</h3>
            <ul className="mt-2">
              {contact.phone && (
                <li className="flex items-center">
                  <span className="mr-2">Téléphone:</span>
                  <span>{contact.phone}</span>
                </li>
              )}
              {contact.email && (
                <li className="flex items-center">
                  <span className="mr-2">Email:</span>
                  <span>{contact.email}</span>
                </li>
              )}
              {contact.linkedin && (
                <li className="flex items-center">
                  <span className="mr-2">Linkedin:</span>
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
                  <span className="mr-2">Facebook:</span>
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
                  <span className="mr-2">Instagram:</span>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
