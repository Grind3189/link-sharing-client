import { createContext, useContext, useState, useEffect } from "react";
import { LinkType } from "../types/Types";
import { nanoid } from "nanoid/non-secure";
import { Platform as PlatformType } from "../types/Types";
import { isValidUrl, getApiUrl } from "../util";
import { AuthContext } from "./AuthContextProvider";

interface LinkContextProviderProp {
  children: React.ReactNode;
}

interface LinkContextType {
  linksData: LinkType[];
  handleRemoveLink: (id: string) => void;
  handleAddLink: () => void;
  handleReorderedLink: (data: LinkType[]) => void;
  handleChangePlatform: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSave: () => void
  handleChangeLink: (e: React.ChangeEvent<HTMLInputElement>) => void
  linkLoading: boolean
  isSaving: boolean
  linkSaved: boolean
  setLinkLoading: React.Dispatch<React.SetStateAction<boolean>>
  apiError: string
}

export const LinkContext = createContext({} as LinkContextType);

const LinkContextProvider = ({ children }: LinkContextProviderProp) => {
  const uri = getApiUrl()
  const {isAuth, isCheckingAuth} = useContext(AuthContext)
  const prevData = localStorage.getItem('links')
  const [linkLoading, setLinkLoading] = useState<boolean>(true)
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [linkSaved, setLinkSaved] = useState<boolean>(false)
  const parsedData: LinkType[] = prevData ? JSON.parse(prevData) : []
  const [linksData, setLinksData] = useState<LinkType[]>([]);
  const [apiError, setApiError] = useState<string>("")
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`${uri}/api/links`, {credentials: "include"})
      const data = await res.json()
      setLinksData(data)
      setLinkLoading(false)
    }
    if(isAuth) {
      setLinkLoading(true)
      fetchData()
    } else if (!isAuth && !isCheckingAuth) {
      setLinkLoading(false)
      setLinksData(parsedData)
    }
  }, [isAuth, isCheckingAuth])


  const handleRemoveLink = (id: string) => {
    const filteredData = linksData.filter((links) => links.id !== id);
    setLinksData(filteredData);
  };

  const handleAddLink = () => {
    setLinksData((prev) => {
      return [
        ...prev,
        {
          platform: "GitHub",
          id: nanoid(),
          link: "",
          error: ''
        },
      ];
    });
  };

  const handleReorderedLink = (data: LinkType[]) => {
    setLinksData(data);
  };

  const handleChangePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    const linkId = e.target.name

    const updatedData = linksData.map(prev => {
      if(prev.id === linkId) {
        return {
          ...prev,
          platform: e.target.value as PlatformType
        }
      } else {
        return prev
      }
    })

    setLinksData(updatedData)
  }

  const handleChangeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedData = linksData.map(link => {
      if(link.id === e.target.id) {
        return {
          ...link,
          [e.target.name]: e.target.value
        }
      } return link
    })

    setLinksData(updatedData)
  }

  const handleSave = async () => {
    setIsSaving(true)
    let hasError = false
    const updatedData = linksData.map(linkInfo => {
      if(!linkInfo.link) {
        hasError = true
        return {
          ...linkInfo,
          error: "Can't be empty"
        }
      }  
        const isValid = isValidUrl(linkInfo.platform, linkInfo.link)
        if(!isValid) {
          hasError = true
          return {
            ...linkInfo,
            error: "Please check the URL"
          }
        } 
      //if there's no error
      return {
        ...linkInfo,
        error: ''
      }
    })

    if(hasError) {
      setIsSaving(false)
      return setLinksData(updatedData)
    } 

      if(isAuth) {
        try {
          const res = await fetch(`${uri}/api/updateLinks`, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include"
          })
          if(!res.ok){
            setIsSaving(false)
            throw new Error("Something went wrong")
          }
          setIsSaving(false)
          const dataFromAPi = await res.json()
          setLinksData(dataFromAPi)
          return handleSaved()
        }
        catch(err: any) {
          setApiError(err.message)
        }
      } else {
        setLinksData(updatedData)
        localStorage.setItem('links', JSON.stringify(updatedData))
        setIsSaving(false)
        handleSaved()
      }

  }

  const handleSaved = async () => {
    setLinkSaved(true)
    setTimeout(() => {
      setLinkSaved(false)
    }, 3000)
  }


  return (
    <LinkContext.Provider
      value={{
        linksData,
        handleRemoveLink,
        handleAddLink,
        handleReorderedLink,
        handleChangePlatform,
        handleSave,
        handleChangeLink,
        linkLoading,
        apiError,
        setLinkLoading,
        isSaving,
        linkSaved
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContextProvider;
