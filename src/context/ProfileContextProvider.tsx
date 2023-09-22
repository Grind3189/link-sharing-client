import { createContext, useState } from "react";
import { ProfileType } from "../types/Types";
import { checkChanges } from "../util";

interface EmptyErrorState {
  name: boolean;
  lastname: boolean;
}
interface ProfileContextType {
  profileDetails: ProfileType;
  handleChangeProfile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveProfile: () => void;
  emptyError: EmptyErrorState
  hasChanges: boolean
}
export const ProfileContext = createContext({} as ProfileContextType);

interface ProfileContextProviderProp {
  children: React.ReactNode;
}

const ProfileContextProvider = ({ children }: ProfileContextProviderProp) => {
  const prevData = localStorage.getItem("profile");
  const parsedData = prevData
    ? JSON.parse(prevData)
    : {
        email: "",
        name: "",
        lastname: "",
        image: "",
      };
  const [profileDetails, setProfileDetails] = useState<ProfileType>(parsedData);

  const [emptyError, setEmptyError] = useState<EmptyErrorState>({
    name: false,
    lastname: false,
  });
  const hasChanges: boolean = checkChanges(profileDetails, parsedData)

  const handleChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveProfile = () => {
    if (!profileDetails.name) {
      setEmptyError((prev) => ({ ...prev, name: true }));
    } else setEmptyError((prev) => ({ ...prev, name: false }));
    if (!profileDetails.lastname) {
      setEmptyError((prev) => ({ ...prev, lastname: true }));
    } else setEmptyError((prev) => ({ ...prev, lastname: false }));

    if (profileDetails.name && profileDetails.lastname) {
      localStorage.setItem("profile", JSON.stringify(profileDetails));
    }
  };
  return (
    <ProfileContext.Provider
      value={{ profileDetails, handleChangeProfile, handleSaveProfile, emptyError, hasChanges }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
