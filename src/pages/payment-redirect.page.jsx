import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";

export const PaymentRedirect = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 10000); // 10 Sekunden

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [navigate]);

  return (
    <div className="h-screen text-center text-[#012060] mt-10 px-4 mx-auto">
      <div className="space-y-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold">Erfolgreiche Transaktion</h1>
        <div className="bg-[#D9D9D9] rounded-3xl shadow-lg p-6 text-[#012060] space-y-6 w-full mx-auto">
          <CiCircleCheck className="mx-auto h-16 w-16 text-green-600" />
          <p className="text-lg">
            Vielen Dank für deine Zahlung! Deine Transaktion wurde erfolgreich
            abgeschlossen.
          </p>
          <p className="text-sm text-[#012060]/70">
            Du wirst automatisch in {countdown} Sekunden weitergeleitet...
          </p>
          <div className="text-sm text-[#012060]/80">
            Eine Bestätigung wurde an deine E-Mail-Adresse gesendet.
          </div>
          <div className="pt-4">
            <Link
              to={"/"}
              className="inline-block bg-[#012060] text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#013080] transition"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
