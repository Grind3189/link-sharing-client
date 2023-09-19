import { LinkType } from "../../types/LinkType";
import iconDnD from "../../assets/icon-drag-and-drop.svg";
import linkIc from "../../assets/icon-link-copied-to-clipboard.svg";
import MenuList from "./MenuList";

interface LinkProp {
  linkInfo: LinkType;
  index: number;
  removeLink: (id: string) => void
}

const Link = ({ linkInfo, index, removeLink }: LinkProp) => {
  return (
    <>
      <div className="mb-3 flex items-center justify-between text-grey-200">
        <div className="flex items-center gap-2">
          <img src={iconDnD} alt="drag and drop icon" />
          <span className="font-bold">Link #{index + 1}</span>
        </div>
        <button className="text-body_m" onClick={() => removeLink(linkInfo.id)}>Remove</button>
      </div>

      <div className="flex flex-col text-grey-300">
        <label htmlFor="platform" className="text-body_s">
          Platform
        </label>

        <MenuList />

        <label htmlFor="link" className="mt-3 text-body_s">
          Link
        </label>
        <div className="group flex items-center gap-3 rounded-lg border border-borders bg-white px-4 py-3">
          <img src={linkIc} alt="link icon" />
          <input
            type="text"
            placeholder="e.g. https://www.github.com/johnappleseed"
            name="link"
            id="link"
            className="w-full outline-none"
          />
        </div>
      </div>
    </>
  );
};

export default Link;
