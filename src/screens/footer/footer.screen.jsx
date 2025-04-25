import { Link } from "react-router-dom";
import company_logo from "../../assets/logos/company_logo.png";

export const Footer = () => {
  return (
    <div className="w-full px-15 pt-15 pb-5 rounded-[18px] md:h-fit flex flex-col-reverse md:flex-row gap-4 items-center md:justify-between md:p-8">
      <div className="flex flex-col md:flex-row md:gap-4 text-center items-center">
        <Link to="/">
          <img
            className="mb-4 md:m-0"
            src={company_logo}
            alt="logo"
            width={60}
            height={60}
          />
        </Link>

        <p>Copyright © 2025 HELLO TRAFFIC. All rights reserved.</p>
      </div>
      <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-4 text-center">
        <li className="font-medium">
          <Link to="/agb">AGB</Link>
        </li>
        <li className="font-medium">
          <Link to="/datenschutz">Datenschutz</Link>
        </li>
        <li className="font-medium">
          <Link to="/impressum">Impressum</Link>
        </li>
      </ul>
    </div>
  );
};
