import { useRef, useState } from "react";
import axios from "axios";
import { UnderlineSVG } from "../../components";
import { Link } from "react-router-dom";
import { DataProtectionPage } from "../../pages/dataprotection.page";

export const Form = () => {
  const formRef = useRef(null);
  const ACCESS_TOKEN = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "consent") {
      setConsent(checked);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name ist erforderlich.";
    if (!formData.email) newErrors.email = "E-Mail ist erforderlich.";
    if (!formData.message) newErrors.message = "Nachricht ist erforderlich.";
    if (!consent)
      newErrors.consent = "Sie müssen den Datenschutzbestimmungen zustimmen.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const response = await axios.post(
        `${ACCESS_TOKEN}/api/sendFormMail`,
        formData
      );
      console.log("Serverantwort:", response.data);
      setSuccessMessage(
        "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet."
      );
      setFormData({ name: "", email: "", message: "" });
      setConsent(false);
    } catch (error) {
      console.error("Fehler beim Senden des Formulars:", error);
    }
  };

  return (
    <section
      className="flex flex-col gap-y-4 md:gap-0 lg:flex-row px-4 pt-10 md:py-25"
      id="kontakt"
    >
      <div
        key="form-card-1"
        className="bg-white flex flex-col flex-1 rounded-3xl p-6 shadow-lg w-full h-80 lg:h-auto mb-4 md:mb-4 lg:mb-0 md:mr-4"
      >
        <h2 className="font-medium py-4 text-center mb-10">
          HELLO TRAFFIC an{" "}
          <span className="span-style inline-block text-[39px] text-black lg:text-5xl font-medium">
            Ihrer Seite
          </span>
        </h2>
        <p className="leading-6 text-gray-600">
          Nutzen Sie das Kontaktformular, um mit uns in Verbindung zu treten.
          Egal, ob Sie Fragen haben, ein individuelles Angebot wünschen oder
          einfach mehr über unsere Leistungen erfahren möchten – wir sind gerne
          für Sie da.
          <br />
          <br />
          Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
          Gemeinsam finden wir die passende Lösung für Ihr digitales Vorhaben.
        </p>
      </div>
      <div
        key="form-card-2"
        className="bg-[#112233] flex flex-col flex-1 rounded-3xl p-6 shadow-lg w-full h-80 lg:h-auto"
      >
        <h2 className="font-medium py-4 text-white text-center">
          Möchten Sie mehr erfahren?
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="text-white space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E-Mail"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm mb-1">
              Nachricht
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              placeholder="Ihre Nachricht"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={handleChange}
                className="form-check-input"
                id="flexCheckDefault"
              />
              <label htmlFor="flexCheckDefault" className="text-sm">
                Ich stimme den{" "}
                <Link className="underline" to="/datenschutz">
                  Datenschutzbestimmungen
                </Link>{" "}
                zu.
              </label>
            </div>
            {errors.consent && (
              <p className="text-red-500 text-sm mt-1">{errors.consent}</p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-white text-[#112233] font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Absenden
            </button>
            {successMessage && (
              <p className="text-green-400 text-sm mt-4 text-center">
                {successMessage}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};
