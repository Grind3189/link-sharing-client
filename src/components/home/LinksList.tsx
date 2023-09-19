import { LinkType } from "../../types/LinkType";
import Link from "./Link";

interface LinksListProp {
  linksData: LinkType[];
  removeLink: (id: string) => void
}

const LinksList = ({ linksData, removeLink }: LinksListProp) => {
  return (
    <div>
      {linksData.map((linkInfo, index) => (
        <Link linkInfo={linkInfo} index={index} removeLink={removeLink} />
      ))}
    </div>
  );
};

export default LinksList;
