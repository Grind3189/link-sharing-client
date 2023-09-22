import { createContext, useState, useEffect } from "react";
import { LinkType } from "../types/LinkType";
import { nanoid } from "nanoid/non-secure";
import { Platform as PlatformType } from "../types/LinkType";

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
  hasChanges: boolean
  handleChangeLink: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const LinkContext = createContext({} as LinkContextType);

const LinkContextProvider = ({ children }: LinkContextProviderProp) => {
  const prevData = localStorage.getItem('links')
  const parsedData: LinkType[] = prevData ? JSON.parse(prevData) : []
  const [linksData, setLinksData] = useState<LinkType[]>(parsedData);
  const [hasChanges, setHasChanges] = useState<boolean>(false)

  useEffect(() => {
    const isChanged = JSON.stringify(linksData) !== JSON.stringify(parsedData);
    setHasChanges(isChanged);
  }, [linksData, parsedData]);


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

  const handleSave = () => {
    let hasError = false
    const updatedData = linksData.map(linkInfo => {
      if(!linkInfo.link) {
        hasError = true
        return {
          ...linkInfo,
          error: "Can't be empty"
        }
      } else return linkInfo
    })

    if(hasError) {
      return setLinksData(updatedData)
    } else {
      localStorage.setItem('links', JSON.stringify(linksData))
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
        hasChanges,
        handleChangeLink
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContextProvider;
