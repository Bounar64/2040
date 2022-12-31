import React from "react";

// import components
import Navig from "./Navig";

// import images
import Logo from "../assets/img/logo.png";

// import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/#">
            <img src={Logo} alt="logo" />
          </a>
          {/* nav */}
          <Navig />
          {/* nav mobile */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
