import React, { useState } from "react";
import { menu, close } from "../../assets";
import { navLinks } from "../../constants";

export default function MobileNav(props) {
  const [menuBar, setMenuBar] = useState(false);
  const toggle = () => setMenuBar((prev) => !prev);
  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
        src={menuBar ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] object-center cursor-pointer"
        onClick={toggle}
      />

      <div
        className={`${menuBar ? "flex" : "hidden"
          } p-6 black-gradient absolute top-20 right-2 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <MobileMenu {...props} toggle={toggle} />
      </div>
    </div>
  );
}

function MobileMenu({ activeState, setActiveState, toggle }) {
  return (
    <ul className="list-none flex justify-end items-start flex-col gap-4">
      {navLinks.map(({ id, title }) => {
        return (
          <li
            key={id}
            onClick={() => {
              setActiveState(title)
              toggle()
            }}
            className={`${activeState === title ? "text-white" : "text-secondary"
              } cursor-pointer font-poppins font-medium text-[16px]`}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        );
      })}
    </ul>
  );
}
