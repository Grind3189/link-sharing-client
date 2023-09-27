import { createContext, useState, useEffect } from "react";
import { getApiUrl } from "../util";

interface AuthContextProviderProp {
  children: React.ReactNode;
}

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isCheckingAuth: boolean
}

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider = ({ children }: AuthContextProviderProp) => {
  const uri = getApiUrl();
  const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true)
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${uri}/api/links`, {
        credentials: "include",
      });
      setIsCheckingAuth(false)
      if (!res.ok) return setIsAuth(false);
      setIsAuth(true);
    };

    fetchData();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isCheckingAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
