import arrowDownIc from "../../assets/icon-arrow-down.svg";
import MenuList from "./MenuList";
import { LinkType } from "../../types/LinkType";
import { useState } from "react";
interface MenuProp {
  linkInfo: LinkType;
}

const Menu = ({ linkInfo }: MenuProp) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleMenu((prev) => !prev);
  };


  return (
    <section className="relative">
      <div
        className={`flex cursor-pointer items-center
         gap-3 rounded-lg border 
          bg-white px-4 py-3 ${toggleMenu ? 'border-purple-300 shadow-purple' : 'border-borders'}`}
        onClick={handleToggle}
      >
        
        <span className="mr-auto w-full">{linkInfo.platform}</span>
        <img
          src={arrowDownIc}
          alt="arrow icon"
          className={`${toggleMenu ? "rotate-[-180deg]" : ""} transition-all`}
        />
      </div>

      <div
        className={`absolute left-0 right-0 top-[60px] z-10
         max-h-[200px] overflow-y-auto rounded-lg
          border border-borders bg-white px-4 py-3 shadow-grey
          transition-all ${
            toggleMenu
              ? "visible translate-y-0 opacity-100"
              : "invisible translate-y-[-50%] opacity-0"
          }`}
      >
        <MenuList linkInfo={linkInfo} />
      </div>
    </section>
  );
};

export default Menu;
