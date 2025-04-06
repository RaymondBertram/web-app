import logo from "../../assets/logos/logo512.png";

export const Footer = () => {
  return (
    <div className="w-full p-20 rounded-[18px] md:h-fit flex flex-col-reverse md:flex-row gap-4 items-center md:justify-between md:p-8">
      <div className="flex flex-col md:flex-row md:gap-4 text-center items-center">
        <img src={logo} alt="logo" width={60} height={60} />
        <p>Copyright © 2024 Company XYZ. All rights reserved.</p>
      </div>
      <ul className="list-none p-0 m-0 flex flex-col md:flex-row gap-4 text-center">
        <li className="font-medium">AGB</li>
        <li className="font-medium">Datenschutz</li>
        <li className="font-medium">Impressum</li>
      </ul>
    </div>
  );
};
