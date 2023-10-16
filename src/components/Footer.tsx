import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <div className="w-full dark:text-white   h-16 footer grid grid-cols-12">
      <div className="col col-span-3 h-full w-full nav-item">
        2013 - 2023 Riangle - All rights reserved.
      </div>
      <div className="col col-span-6 h-full w-full flex justify-center items-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="col col-span-3 h-full w-full nav-item">
        <div className="w-full h-full flex justify-between gap-5 text-[11px] uppercase ">
          <div className="footer-list w-full h-full ">Twitter</div>
          <div className="footer-list w-full h-full ">Faceboik</div>
          <div className="footer-list w-full h-full ">instgram</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
