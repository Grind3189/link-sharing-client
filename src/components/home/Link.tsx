import { LinkType } from "../../types/LinkType";
import { LinkContext } from "../../context/LinkContextProvider";
import { useContext } from "react";
import iconDnD from "../../assets/icon-drag-and-drop.svg";
import linkIc from "../../assets/icon-link-copied-to-clipboard.svg";
import Menu from "./Menu";
import { DraggableProvided } from "react-beautiful-dnd";

interface LinkProp {
  linkInfo: LinkType;
  index: number;
  provided: DraggableProvided;
}

const Link = ({ linkInfo, index, provided }: LinkProp) => {
  const { handleRemoveLink } = useContext(LinkContext);

  return (
    <>
      <div
        className="mb-3 flex items-center justify-between text-grey-200"
        {...provided.dragHandleProps}
      >
        <div className="flex items-center gap-2">
          <img src={iconDnD} alt="drag and drop icon" />
          <span className="font-bold">Link #{index + 1}</span>
        </div>
        <button
          className="text-body_m"
          onClick={() => handleRemoveLink(linkInfo.id)}
        >
          Remove
        </button>
      </div>

      <div className="flex flex-col text-grey-300">
        <label htmlFor="platform" className="text-body_s">
          Platform
        </label>

        <Menu linkInfo={linkInfo} />

        <label htmlFor="link" className="mt-3 text-body_s">
          Link
        </label>
        <div className="group flex items-center gap-3 rounded-lg border border-borders bg-white px-4 py-3">
          <img src={linkIc} alt="link icon" />
          <input
            type="text"
            placeholder="e.g. https://github.com/Grind3189"
            name="link"
            id="link"
            className="w-full outline-none"
          />
          <span>Error</span>
          {/* add validation */}
        </div>
      </div>
    </>
  );
};

export default Link;
