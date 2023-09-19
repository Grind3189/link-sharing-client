import { useEffect, useState } from "react";
import { LinkType } from "../../types/LinkType";
import Link from "./Link";

interface LinksListProp {
  initialData: LinkType[];
  removeLink: (id: string) => void;
}

const LinksList = ({ initialData, removeLink }: LinksListProp) => {
  const [linksData, setLinksData] = useState<LinkType[]>(initialData);

  useEffect(() => {
    setLinksData(initialData)
  },[initialData])

  return (
      <div>
        {linksData.map((linkInfo, index) => (
          <div className="bg-grey-100 p-5 rounded-xl mb-6 last-of-type:mb-[94px]">
            <Link linkInfo={linkInfo} index={index} removeLink={removeLink} />
          </div>
        ))}
      </div>
  );
};

export default LinksList;
