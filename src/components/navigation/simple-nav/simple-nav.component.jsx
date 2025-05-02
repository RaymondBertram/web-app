import companyLogo from "../../../assets/logos/company_logo.png";
import { Link } from "react-router-dom";

export const SimpleNav = () => {
  return (
    <nav className="fixed inset-x-0 top-0 h-16 md:h-20 bg-white flex items-center px-4 md:px-8">
      <Link to="/">
        <img src={companyLogo} alt="Company Logo" className="h-12" />
      </Link>
    </nav>
  );
};
