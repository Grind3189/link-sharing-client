import { createContext, useState } from "react";
import { ProfileType } from "../types/Types";

interface ProfileContextType {
  profileDetails: ProfileType;
  handleChangeProfile: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const ProfileContext = createContext({} as ProfileContextType);

interface ProfileContextProviderProp {
  children: React.ReactNode;
}
const ProfileContextProvider = ({ children }: ProfileContextProviderProp) => {
  const [profileDetails, setProfileDetails] = useState<ProfileType>({
    email: "",
    name: "",
    lastname: "",
    picture: "",
  });

  const handleChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <ProfileContext.Provider value={{ profileDetails, handleChangeProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
