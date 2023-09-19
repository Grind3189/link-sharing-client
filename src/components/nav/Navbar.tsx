import logoSm from "../../assets/logo-devlinks-small.svg"
import logoLg from "../../assets/logo-devlinks-large.svg"
import previewIc from "../../assets/icon-preview-header.svg"
import GetLinkIc from "./GetLinkIc"
import GetProfileIc from "./GetProfileIc"
import { Link, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string>("")
  const [width, setWidth] = useState<number>(window.innerWidth)
  const gridCenter = `grid place-items-center`

  useEffect(() => {
    const handleChangeWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleChangeWidth)

    return () => {
      window.removeEventListener("resize", handleChangeWidth)
    }
  }, [])

  const getActiveNavStyle = (value: string) => {
    setActiveNav(value)
    const activeNavStyle = {
      backgroundColor: "#EFEBFF",
    }
    return activeNavStyle
  }

  return (
    <header className={`bg-white px-6 py-4 ${gridCenter} h-full`}>
      <nav className="flex h-[42px] w-full items-center">
        <Link to="." className="">
          <img src={width < 768 ? logoSm : logoLg} alt="" />
        </Link>

        <div className="mx-auto flex h-full">
          <NavLink
            to="."
            className={`${gridCenter} px-[27px] rounded-lg md:flex gap-2`}
            style={({ isActive }) =>
              isActive ? getActiveNavStyle("home") : undefined
            }
          >
            <GetLinkIc activeNav={activeNav} width={width} />
          </NavLink>
          <NavLink
            to="profile"
            className={`${gridCenter} px-[27px] rounded-lg md:flex gap-2`}
            style={({ isActive }) =>
              isActive ? getActiveNavStyle("profile") : undefined
            }
          >
            <GetProfileIc activeNav={activeNav} width={width} />
          </NavLink>
        </div>

        <NavLink
          to="preview"
          className={`h-full px-4 border border-purple-300 ${gridCenter} rounded-lg`}
        >
          {width >= 768 ? <span className="text-purple-300 font-semibold">Preview</span> : <img src={previewIc} alt="" /> }
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
