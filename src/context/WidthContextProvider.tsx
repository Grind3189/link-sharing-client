import { createContext, useState, useEffect } from "react";

type WidthContextType = {
    width: number
}

export const WidthContext = createContext({} as WidthContextType);

interface WidthContextProp {
  children: React.ReactNode;
}

const WidthContextProvider = ({ children }: WidthContextProp) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleChangeWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleChangeWidth);

    return () => {
      window.removeEventListener("resize", handleChangeWidth);
    };
  }, []);
  return (
    <WidthContext.Provider value={{width}}>{children}</WidthContext.Provider>
  );
};

export default WidthContextProvider;
