import companyLogo from "../../../assets/logos/company_logo.png";
import { Link } from "react-router-dom";

export const SimpleNav = () => {
  return (
    <nav className="fixed inset-x-0 top-0 h-20 bg-white flex items-center py-4 px-6">
      <Link to="/">
        <img src={companyLogo} alt="Company Logo" className="w-auto h-[80px]" />
      </Link>
    </nav>
  );
};
