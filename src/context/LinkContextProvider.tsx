import { createContext, useState } from "react";
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
}

export const LinkContext = createContext({} as LinkContextType);

const LinkContextProvider = ({ children }: LinkContextProviderProp) => {
  const [linksData, setLinksData] = useState<LinkType[]>([]);

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

  console.log(linksData)
  return (
    <LinkContext.Provider
      value={{
        linksData,
        handleRemoveLink,
        handleAddLink,
        handleReorderedLink,
        handleChangePlatform
      }}
    >
      {children}
    </LinkContext.Provider>
  );
};

export default LinkContextProvider;
