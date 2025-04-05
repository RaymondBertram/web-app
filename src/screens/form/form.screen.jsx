import { useRef, useState } from "react";

export const Form = () => {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    if (!formData.name) newErrors.name = "Name ist erforderlich.";
    if (!formData.email) newErrors.email = "E-Mail ist erforderlich.";
    if (!formData.message) newErrors.message = "Nachricht ist erforderlich.";
    if (!formData.consent)
      newErrors.consent = "Sie müssen den Datenschutzbestimmungen zustimmen.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Formulardaten gesendet:", formData);
  };

  return (
    <section className="px-4 md:px-8 py-6" id="contact">
      <div className="bg-gray-800 flex flex-col h-fit rounded-3xl p-6 shadow-lg w-full md:w-3/4 lg:w-1/2 mx-auto">
        <h1 className="font-bold py-4 text-white text-center text-2xl">
          Formular
        </h1>
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
                checked={formData.consent}
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
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Absenden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
