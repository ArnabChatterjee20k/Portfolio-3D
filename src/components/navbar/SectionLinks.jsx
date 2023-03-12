import React from "react";
import { navLinks } from "../../constants";

export default function SectionLinks({ activeState, setActiveState }) {
  return (
    <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map(({ id, title }) => {
        return (
          <li
            key={id}
            onClick={() => setActiveState(title)}
            className={`${activeState === title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        );
      })}
    </ul>
  );
}
