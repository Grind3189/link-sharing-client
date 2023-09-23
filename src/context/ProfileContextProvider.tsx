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
  emptyError: EmptyErrorState;
  hasChanges: boolean;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isUploading: boolean
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
        image: {
          url: "",
          id: "",
          signature: "",
        },
      };
  const [profileDetails, setProfileDetails] = useState<ProfileType>(parsedData);
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const [emptyError, setEmptyError] = useState<EmptyErrorState>({
    name: false,
    lastname: false,
  });
  const hasChanges: boolean = checkChanges(profileDetails, parsedData);
  const cloudinary = import.meta.env.VITE_CLOUDINARY;

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

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      try {
        setIsUploading(true)
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "devlinks");

        const res = await fetch(`${cloudinary}/image/upload`, {
          method: "POST",
          body: formData, //no need to use stringify
        });

        const data = await res.json();
        setIsUploading(false)
        setProfileDetails(prev => {
          return {
            ...prev,
            image: {
              url: data.url,
              id: data.public_id,
              signature: data.signature
            }
          }
        })
      } catch (err) {
        console.error(err);
      }
    }
  };


  return (
    <ProfileContext.Provider
      value={{
        profileDetails,
        handleChangeProfile,
        handleSaveProfile,
        emptyError,
        hasChanges,
        handleUpload,
        isUploading
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
