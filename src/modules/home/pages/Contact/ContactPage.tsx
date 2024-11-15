import { useState } from "react";
import Input from "../../components/common/Input";
import { fakeContacts } from "../../components/utils/fakeContact";
import ContactList from "./ContactList";
import useContactForm from "./useContactForm";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const { formData, handleChange, handleSubmit, setRecaptchaToken } = useContactForm();
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Handle CAPTCHA response
  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setRecaptchaToken(value);
      setCaptchaVerified(true); // CAPTCHA validated
    } else {
      setCaptchaVerified(false); // CAPTCHA not validated
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center mt-8 p-6 rounded-md w-full gap-20">
      <div className="flex justify-end items-start w-full">
        <ContactList contacts={fakeContacts} />
      </div>
      <div className="flex justify-start items-start flex-col w-full">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
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
          <div className="mb-4 flex flex-col">
            <label htmlFor="">Votre message</label>
            <textarea
              className="w-full bg-white text-black border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Message"
              rows={4}
            ></textarea>
          </div>

          {/* reCAPTCHA */}
          <div className="mb-4">
            <ReCAPTCHA
              sitekey="6LezC4AqAAAAAFONrdaOewjUyRMs7RUk7Bl43GjW" // Replace with your reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div>

          {/* Submit button */}
          {captchaVerified ? (
            <div>
              <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-md">
                Envoyer
              </button>
            </div>
          ) : (
            <p className="text-red-500">Veuillez vérifier le CAPTCHA pour envoyer le message.</p>
          )}
        </form>
      </div>
    </div>
  );
}
