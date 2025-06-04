import { useEffect } from "react";
import { SimpleNav } from "../components/navigation/simple-nav/simple-nav.component";

export const Impress = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SimpleNav />
      <div className="pt-20 md:pt-24 h-fit text-center text-[#012060] px-4">
        <div className="space-y-6">
          <h1>Impressum</h1>
          <div className="bg-[#D9D9D9] rounded-3xl shadow-lg p-6 text-[#012060] space-y-6 w-full mx-auto">
            <div>
              <h3 className="mb-2 font-bold">HELLO EXPANSION</h3>
              <p className="mb-2">Keller & Keller Projektierung GmbH</p>
              <p className="mb-2">Steinweg 8</p>
              <p className="mb-2">26721 Emden</p>
            </div>

            <div>
              <p className="mb-2">Vertr. durch: Timothy Keller</p>
            </div>

            <div>
              <p className="mb-2">Telefon: 04921 / 92 99 815</p>
              <p className="mb-2">Fax: 04921 / 92 99 816</p>
            </div>

            <div>
              <p className="mb-2">E-Mail: hello@hello-expansion.de</p>
            </div>

            <div>
              <h3 className="mb-2 font-bold">Rechtliche Angaben</h3>
              <p className="mb-2">Gesetzlicher Vertreter: Timothy Keller</p>
              <p className="mb-2">Registernummer: HRB 204802</p>
              <p className="mb-2">USt-IdNr.: DE321799333</p>
              <p className="mb-2">Registergericht: Amtsgericht Aurich</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
