import { LinkType, Platform } from "../../types/Types";
import { LinkContext } from "../../context/LinkContextProvider";
import { useContext } from "react";
import { getIcon } from "../../util";

interface MenuListProp {
  linkInfo: LinkType;
}

const MenuList = ({ linkInfo }: MenuListProp) => {
  const { handleChangePlatform } = useContext(LinkContext);

  const platformChoices: Platform[] = [
    "GitHub",
    "Frontend Mentor",
    "Twitter",
    "LinkedIn",
    "Youtube",
    "Facebook",
    "Twitch",
    "Dev.to",
    "Codewars",
    "Codepen",
    "freeCodeCamp",
    "GitLab",
    "Hashnode",
    "Stack Overflow",
  ];

  return (
    <>
      {platformChoices.map((platform, index) => {
        return (
          <div
            className={`border-b border-borders py-3
        first-of-type:pt-0 last-of-type:border-b-0 last-of-type:pb-0`}
        key={index}
          >
            <label
              htmlFor={`${linkInfo.id}-${platform}`}
              className="flex cursor-pointer items-center gap-3"
            >
              {getIcon(
                platform,
                linkInfo.platform === platform ? true : false,
                false,
              )}
              <span
                className={
                  linkInfo.platform === platform ? "text-purple-300" : ""
                }
              >
                {platform}
              </span>
              <input
                className="invisible"
                type="radio"
                name={linkInfo.id}
                value={platform}
                id={`${linkInfo.id}-${platform}`}
                checked={linkInfo.platform === platform}
                onChange={handleChangePlatform}
              />
            </label>
          </div>
        );
      })}
    </>
  );
};

export default MenuList;
