import useContactForm from "../../hooks/useContactForm";
import Input from "../../components/common/Input";
import { fakeContacts } from "../../components/utils/fakeContact";
import ContactList from "./ContactList";

export default function ContactPage() {
  const { formData, handleChange, handleSubmit } = useContactForm();

  return (
    <div className=" flex flex-col lg:flex-row justify-center mt-8 p-6 shadow-md rounded-md w-full gap-20">
      <div className="flex justify-end items-start w-full">
        <ContactList contacts={fakeContacts} />
      </div>
      <div className="flex justify-start items-start flex-col w-full">
        <h2 className="text-lg font-semibold mb-4">Contact me</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <Input
              darkMode={false}
              value={formData.name}
              onChange={(value) => handleChange("name", value)}
              placeholder="Nom"
            />
          </div>
          <div className="mb-4">
            <Input
              darkMode={false}
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="">Votre message</label>
            <textarea
              className="w-full bg-white text-black border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Message"
              rows={4}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
