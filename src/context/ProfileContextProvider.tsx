import { createContext, useState, useContext, useEffect } from "react";
import { ProfileType } from "../types/Types";
import { getApiUrl } from "../util";
import { AuthContext } from "./AuthContextProvider";

interface EmptyErrorState {
  name: boolean;
  lastname: boolean;
}
interface ProfileContextType {
  handleChangeProfile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSaveProfile: () => void;
  handleUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  profileDetails: ProfileType;
  emptyError: EmptyErrorState;
  isUploading: boolean
  loadingProfile: boolean
  isSaving: boolean
  profileSaved: boolean
}
export const ProfileContext = createContext({} as ProfileContextType);

interface ProfileContextProviderProp {
  children: React.ReactNode;
}

const ProfileContextProvider = ({ children }: ProfileContextProviderProp) => {
  const uri = getApiUrl()
  const {isAuth, isCheckingAuth} = useContext(AuthContext)
  const [loadingProfile, setLoadingProfile ] = useState<boolean>(true)
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [profileSaved, setProfileSaved] = useState<boolean>(false)
  const prevData = localStorage.getItem("profile");
  const parsedData = prevData && !loadingProfile
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

  const [profileDetails, setProfileDetails] = useState<ProfileType>({...parsedData});

  const [isUploading, setIsUploading] = useState<boolean>(false)

  const [emptyError, setEmptyError] = useState<EmptyErrorState>({
    name: false,
    lastname: false,
  });
  const cloudinary = import.meta.env.VITE_CLOUDINARY;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${uri}/api/profile`, {credentials: "include"})
      const data = await res.json()
      setLoadingProfile(false)
      setProfileDetails(data)
    }
    if(isAuth) {
      setLoadingProfile(true)
      fetchData()
    } else {
      setLoadingProfile(false)
      setProfileDetails({...parsedData})
    }
  }, [isAuth, isCheckingAuth])

  const handleChangeProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveProfile = async () => {
    setIsSaving(true)
    if (!profileDetails.name) {
      setEmptyError((prev) => ({ ...prev, name: true }));
    } else setEmptyError((prev) => ({ ...prev, name: false }));
    if (!profileDetails.lastname) {
      setEmptyError((prev) => ({ ...prev, lastname: true }));
    } else setEmptyError((prev) => ({ ...prev, lastname: false }));

    if (profileDetails.name && profileDetails.lastname) {

      if(isAuth) {
        const res = await fetch(`${uri}/api/updateProfile`, {
          method: 'PUT',
          body: JSON.stringify(profileDetails),
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "include"
        })
        const updatedData = await res.json()
        setProfileDetails(updatedData)
        setIsSaving(false)
        return handleSaved()
      } else {
        localStorage.setItem("profile", JSON.stringify(profileDetails));
        setIsSaving(false)
        return handleSaved()
      }
    }
    setIsSaving(false)
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

  const handleSaved = async () => {
    setProfileSaved(true)
    setTimeout(() => {
      setProfileSaved(false)
    }, 3000)
  }


  return (
    <ProfileContext.Provider
      value={{
        profileDetails,
        handleChangeProfile,
        handleSaveProfile,
        emptyError,
        handleUpload,
        isUploading,
        loadingProfile,
        isSaving,
        profileSaved
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
