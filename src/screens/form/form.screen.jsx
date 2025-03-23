import { useRef } from "react";

export const Form = () => {
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your API here with the form data
  };

  return (
    <section className="px-3 md:px-6" id="contact">
      <div className="bg-gray-800 flex flex-col h-fit rounded-3xl">
        <h1 className="font-bold py-4 text-white text-center text-wrap">
          Formular
        </h1>
        <form ref={formRef} onSubmit={handleSubmit} className="text-white">
          <div className="p-2">
            <label htmlFor="firstName">Vorname</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Vorname"
            />
          </div>
          <div className="p-2">
            <label htmlFor="lastName">Nachname</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Nachname"
            />
          </div>
          <div className="p-2">
            <label htmlFor="e-mail">E-Mail</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="E-Mail"
            />
          </div>
          <div className="p-2">
            <input
              className="form-check-input"
              type="checkbox"
              value="false"
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="checkbox-dataconsent">
              Ich stimme den{" "}
              <a href="http://localhost:3000/#">Datenschutzbestimmungen</a> zu.
            </label>
          </div>
          <div className="flex flex-row justify-center">
            <button
              type="submit"
              className="btn btn-primary my-3 bg-blue-400 border-none p-2 rounded-lg cursor-pointer text-[16px] font-semibold mt-4"
            >
              Absenden
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
