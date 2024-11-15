import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ContactPage from "../pages/Contact/ContactPage";

export default function ContactSection() {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  // Fonction pour gérer la vérification du CAPTCHA
  const onCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  return (
    <div className="p-2 max-w-[80rem] lg:w-3/4 flex flex-col justify-center items-center">
      <h3 className="text-4xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 text-center">
        Get in Touch
      </h3>

      {/* CAPTCHA */}
      <div className="my-6">
        <ReCAPTCHA
          sitekey="6LezC4AqAAAAAFONrdaOewjUyRMs7RUk7Bl43GjW" // Remplacez par votre clé publique reCAPTCHA
          onChange={onCaptchaChange}
        />
      </div>

      {/* Section Contact */}
      {captchaVerified ? (
        <ContactPage />
      ) : (
        <p className="text-gray-600">Please verify the CAPTCHA to proceed.</p>
      )}
    </div>
  );
}
