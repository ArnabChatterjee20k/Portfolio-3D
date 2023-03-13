import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import SectionLinks from "../components/navbar/SectionLinks";
import MobileNav from "../components/navbar/MobileNav";

const Navbar = () => {
  const [active, setActive] = useState("");
  const activeNav = (link = "") => {
    setActive(link);
    window.scrollTo(0, 0);
  };
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={activeNav}>
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Arnab{" "}
            <span className="sm:block hidden">| Full Stack Web Developer</span>
          </p>
        </Link>

        <SectionLinks activeState={active} setActiveState={setActive} />

        <MobileNav activeState={active} setActiveState={setActive} />
      </div>
    </nav>
  );
};

export default Navbar;
