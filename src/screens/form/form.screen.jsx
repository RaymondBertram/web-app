import { useRef, useState } from "react";
import axios from "axios";
import { UnderlineSVG } from "../../components";

export const Form = () => {
  const formRef = useRef(null);
  const ACCESS_TOKEN = import.meta.env.VITE_Backend_URL;

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
      className="flex flex-col gap-y-4 md:gap-0 lg:flex-row px-4 py-20"
      id="kontakt"
    >
      <div
        key="form-card-1"
        className="bg-white flex flex-col flex-1 rounded-3xl p-6 shadow-lg w-full h-80 lg:h-auto md:mr-4"
      >
        <h2 className="font-medium py-4 text-center mb-10">
          HELLO TRAFFIC an{" "}
          <span className="relative inline-block text-[39px] text-black lg:text-5xl font-medium">
            Ihrer Seite
            <span>
              <UnderlineSVG duration={2} />
            </span>
          </span>
        </h2>
        <p className="leading-6 text-gray-600">
          Entdecken Sie, wie wir Ihre Vision in greifbare Erfolge verwandeln.
          Füllen Sie das Formular aus, um von unserem Expertenwissen zu
          profitieren und ein maßgeschneidertes, unverbindliches Angebot zu
          erhalten. Unsere Leidenschaft für Innovation und Qualität macht den
          Unterschied – lassen Sie uns gemeinsam Ihre digitale Zukunft
          gestalten.
        </p>
      </div>
      <div
        key="form-card-2"
        className="bg-gray-800 flex flex-col flex-1 rounded-3xl p-6 shadow-lg w-full h-80 lg:h-auto md:ml-4"
      >
        <h2 className="font-medium py-4 text-white text-center">
          Möchten Sie Mehr Erfahren?
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
                <a href="#" className="text-blue-500 underline">
                  Datenschutzbestimmungen
                </a>{" "}
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
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
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
