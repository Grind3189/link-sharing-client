import Github from "./getIcons/Github";
import FrontendMentor from "./getIcons/FrontendMentor";
import Twitter from "./getIcons/Twitter";
import Linkedin from "./getIcons/Linkedin";
import Youtube from "./getIcons/Youtube";
import Facebook from "./getIcons/Facebook";
import Twitch from "./getIcons/Twitch";
import DevTo from "./getIcons/DevTo";
import Codewars from "./getIcons/Codewars";
import Codepen from "./getIcons/Codepen";
import FreeCodeCamp from "./getIcons/FreeCodeCamp";
import Gitlab from "./getIcons/Gitlab";
import Hashnode from "./getIcons/Hashnode";
import StackOverFlow from "./getIcons/StackOverFlow";
import arrowDownIc from "../../assets/icon-arrow-down.svg";
import { useState } from "react";

const MenuList = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };
  return (
    <section className="relative">
      <div
        className="group flex cursor-pointer items-center gap-3 rounded-lg border border-borders bg-white px-4 py-3"
        onClick={handleToggle}
      >
        <Github />
        <span className="mr-auto w-full">Github</span>
        <img
          src={arrowDownIc}
          alt="arrow icon"
          className={`${toggleMenu ? "rotate-[-180deg]" : ""} transition-all`}
        />
      </div>

      <div
        className={`shadow-grey absolute left-0 right-0
         top-[60px] max-h-[200px] overflow-y-auto
          rounded-lg border border-borders bg-white px-4 py-3
          transition-all ${
            toggleMenu
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-[-50%] opacity-0"
          }`}
      >
        
        <div
          className={`flex cursor-pointer items-center gap-3
       border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
        >
          <Github />
          <span>GitHub</span>
        </div>

      </div>
    </section>
  );
};

export default MenuList;
