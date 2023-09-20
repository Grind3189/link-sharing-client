import Github from "./getIcons/Github";
import FrontendMentor from "./getIcons/FrontendMentor";
import Twitter from "./getIcons/Twitter";
import Linkedin from "./getIcons/Linkedin";
import Youtube from "./getIcons/Youtube";
import Facebook from "./getIcons/Facebook";
import Twitch from "./getIcons/Twitch";
import DevTo from "./getIcons/DevTo";
import Codewars from "./getIcons/Codewars";
import Codepen from "./getIcons/Codepen";
import FreeCodeCamp from "./getIcons/FreeCodeCamp";
import Gitlab from "./getIcons/Gitlab";
import Hashnode from "./getIcons/Hashnode";
import StackOverFlow from "./getIcons/StackOverFlow";
import { LinkType } from "../../types/LinkType";
import { LinkContext } from "../../context/LinkContextProvider";
import { useContext } from "react";

interface MenuListProp {
  linkInfo: LinkType;
}

const MenuList = ({ linkInfo }: MenuListProp) => {
  const { handleChangePlatform } = useContext(LinkContext);

  return (
    <>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-GitHub`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Github />
          <span>GitHub</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="GitHub"
            id={`${linkInfo.id}-GitHub`}
            checked={linkInfo.platform === "GitHub"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Frontend Mentor`}
          className="flex cursor-pointer items-center gap-3"
        >
          <FrontendMentor />
          <span>Frontend Mentor</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Frontend Mentor"
            id={`${linkInfo.id}-Frontend Mentor`}
            checked={linkInfo.platform === "Frontend Mentor"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Twitter`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Twitter />
          <span>Twitter</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Twitter"
            id={`${linkInfo.id}-Twitter`}
            checked={linkInfo.platform === "Twitter"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-LinkedIn`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Linkedin />
          <span>LinkedIn</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="LinkedIn"
            id={`${linkInfo.id}-LinkedIn`}
            checked={linkInfo.platform === "LinkedIn"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Youtube`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Youtube />
          <span>Youtube</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Youtube"
            id={`${linkInfo.id}-Youtube`}
            checked={linkInfo.platform === "Youtube"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Facebook`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Facebook />
          <span>Facebook</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Facebook"
            id={`${linkInfo.id}-Facebook`}
            checked={linkInfo.platform === "Facebook"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Twitch`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Twitch />
          <span>Twitch</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Twitch"
            id={`${linkInfo.id}-Twitch`}
            checked={linkInfo.platform === "Twitch"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Dev.to`}
          className="flex cursor-pointer items-center gap-3"
        >
          <DevTo />
          <span>Dev.to</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Dev.to"
            id={`${linkInfo.id}-Dev.to`}
            checked={linkInfo.platform === "Dev.to"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Codewars`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Codewars />
          <span>Codewars</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Codewars"
            id={`${linkInfo.id}-Codewars`}
            checked={linkInfo.platform === "Codewars"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Codepen`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Codepen />
          <span>Codepen</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Codepen"
            id={`${linkInfo.id}-Codepen`}
            checked={linkInfo.platform === "Codepen"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-freeCodeCamp`}
          className="flex cursor-pointer items-center gap-3"
        >
          <FreeCodeCamp />
          <span>freeCodeCamp</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="freeCodeCamp"
            id={`${linkInfo.id}-freeCodeCamp`}
            checked={linkInfo.platform === "freeCodeCamp"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-GitLab`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Gitlab />
          <span>GitLab</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="GitLab"
            id={`${linkInfo.id}-GitLab`}
            checked={linkInfo.platform === "GitLab"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Hashnode`}
          className="flex cursor-pointer items-center gap-3"
        >
          <Hashnode />
          <span>Hashnode</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Hashnode"
            id={`${linkInfo.id}-Hashnode`}
            checked={linkInfo.platform === "Hashnode"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
      <div
        className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
      >
        <label
          htmlFor={`${linkInfo.id}-Stack Overflow`}
          className="flex cursor-pointer items-center gap-3"
        >
          <StackOverFlow />
          <span>Stack Overflow</span>
          <input
            className="invisible"
            type="radio"
            name={linkInfo.id}
            value="Stack Overflow"
            id={`${linkInfo.id}-Stack Overflow`}
            checked={linkInfo.platform === "Stack Overflow"}
            onChange={handleChangePlatform}
          />
        </label>
      </div>
    </>
  );
};

export default MenuList;
