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
  apiError: string
  setLinkLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LinkContext = createContext({} as LinkContextType);

const LinkContextProvider = ({ children }: LinkContextProviderProp) => {
  const uri = getApiUrl()
  const {isAuth, isCheckingAuth} = useContext(AuthContext)
  const prevData = localStorage.getItem('links')
  const [linkLoading, setLinkLoading] = useState<boolean>(true)
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
            throw new Error("Something went wrong")
          }
          const dataFromAPi = await res.json()
          return setLinksData(dataFromAPi)
        }
        catch(err: any) {
          setApiError(err.message)
        }
      } else {
        setLinksData(updatedData)
        localStorage.setItem('links', JSON.stringify(updatedData))
      }

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
        setLinkLoading
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContextProvider;
