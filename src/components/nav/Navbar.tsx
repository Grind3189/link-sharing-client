import logoSm from "../../assets/logo-devlinks-small.svg";
import logoLg from "../../assets/logo-devlinks-large.svg";
import previewIc from "../../assets/icon-preview-header.svg";
import GetLinkIc from "./GetLinkIc";
import GetProfileIc from "./GetProfileIc";
import GetLoginIc from "./GetLogin";
import GetLogoutIc from "./GetLogoutIc";
import { Link, useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { WidthContext } from "../../context/WidthContextProvider";
import { AuthContext } from "../../context/AuthContextProvider";
import { getApiUrl } from "../../util";

const Navbar = () => {
  const uri = getApiUrl()
  const [hover, setHover] = useState<string>("");
  const currentPath = useLocation().pathname;
  
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [activeNav, setActiveNav] = useState<string>(
    currentPath === "/" ? "home" : "profile",
  );
  const { width } = useContext(WidthContext);
  const gridCenter = `grid place-items-center`;

  const handleLogout = async () => {
   await fetch(`${uri}/api/logout`, {credentials: "include"})
    setIsAuth(false)
  };

  return (
    <header className={`bg-white px-6 py-4 ${gridCenter} h-full`}>
      <nav className="flex h-[42px] w-full items-center">
        <Link to="." onClick={() => setActiveNav("home")}>
          <img src={width < 768 ? logoSm : logoLg} alt="" />
        </Link>

        <div className="mx-auto flex h-full">
          <Link
            to="."
            className={`${gridCenter} gap-2 rounded-lg px-[27px] md:flex ${
              activeNav === "home" && "bg-purple-100"
            }`}
            onMouseEnter={() => setHover("home")}
            onMouseLeave={() => setHover("")}
            onClick={() => setActiveNav("home")}
          >
            <GetLinkIc activeNav={activeNav} width={width} hover={hover} />
          </Link>
          <Link
            to="profile"
            className={`${gridCenter} gap-2 rounded-lg px-[27px] md:flex ${
              activeNav === "profile" && "bg-purple-100"
            }`}
            onMouseEnter={() => setHover("profile")}
            onMouseLeave={() => setHover("")}
            onClick={() => setActiveNav("profile")}
          >
            <GetProfileIc activeNav={activeNav} width={width} hover={hover} />
          </Link>
          {isAuth ? (
            <button
              className="flex items-center gap-2 px-[27px]"
              onMouseEnter={() => setHover("logout")}
              onMouseLeave={() => setHover("")}
              onClick={handleLogout}
            >
              <GetLogoutIc width={width} hover={hover} />
            </button>
          ) : (
            <Link
              to={`login?redirectTo=${currentPath}`}
              className={`${gridCenter} gap-2 rounded-lg px-[27px] md:flex ${
                activeNav === "login" && "bg-purple-100"
              }`}
              onMouseEnter={() => setHover("login")}
              onMouseLeave={() => setHover("")}
              onClick={() => setActiveNav("")}
            >
              <GetLoginIc width={width} hover={hover} />
            </Link>
          )}
        </div>

        <Link
          to="preview"
          className={`h-full border border-purple-300 px-4 ${gridCenter} rounded-lg hover:bg-purple-100`}
          onClick={() => setActiveNav("")}
        >
          {width >= 768 ? (
            <span className="font-semibold text-purple-300">Preview</span>
          ) : (
            <img src={previewIc} alt="" />
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
