import logo from "../../assets/logos/logo512.png";

export const Footer = () => {
  return (
    <div className="w-full max-w-[100em] h-[50vh] mx-auto p-20 rounded-[18px] md:h-fit md:p-4">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <div className="flex flex-col text-center items-center p-4">
          <img src={logo} alt="logo" width={60} height={60} />
          <p>Copyright © 2024 Company XYZ. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:items-center">
          <h3 className="py-4 text-[16px] font-bold opacity-70">About</h3>
          <ul className="list-none p-0 m-0 text-center">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="flex flex-col md:items-center">
          <h3 className="py-4 text-[16px] font-bold opacity-70">Platform</h3>
          <ul className="list-none p-0 m-0 text-center">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
        <div className="flex flex-col md:items-center">
          <h3 className="py-4 text-[16px] font-bold opacity-70">Legal</h3>
          <ul className="list-none p-0 m-0 text-center">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Cookie Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
