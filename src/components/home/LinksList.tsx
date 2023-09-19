import { useState } from "react";
import { LinkType } from "../../types/LinkType";
import Link from "./Link";

interface LinksListProp {
  initialData: LinkType[];
  removeLink: (id: string) => void;
}

const LinksList = ({ initialData, removeLink }: LinksListProp) => {
  const [linksData, setLinksData] = useState<LinkType[]>(initialData);

  return (
      <div>
        {linksData.map((linkInfo, index) => (
          <Link linkInfo={linkInfo} index={index} removeLink={removeLink} />
        ))}
      </div>
  );
};

export default LinksList;
