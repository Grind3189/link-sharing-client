import { LinkType, Platform } from "../../types/Types";
import { Link } from "react-router-dom";
import { getIcon } from "../../util";
interface MockupListProp {
  linkInfo: LinkType;
}

const MockupList = ({ linkInfo }: MockupListProp) => {
  const getStyle = (platform: Platform) => {
    const style = {
      backgroundColor:
        platform === "GitHub"
          ? "#1A1A1A"
          : platform === "Frontend Mentor"
          ? "#FFF"
          : platform === "Twitter"
          ? "#43B7E9"
          : platform === "LinkedIn"
          ? "#2D68FF"
          : platform === "Youtube"
          ? "#EE3939"
          : platform === "Facebook"
          ? "#2442AC"
          : platform === "Twitch"
          ? "#EE3FC8"
          : platform === "Dev.to"
          ? "#333333"
          : platform === "Codewars"
          ? "#8A1A50"
          : platform === "freeCodeCamp"
          ? "#302267"
          : platform === "GitLab"
          ? "#EB4925"
          : platform === "Hashnode"
          ? "#0330D1"
          : "#EC7100",
      border: platform === "Frontend Mentor" ? "1px solid #D9D9D9" : "none",
      color: platform === "Frontend Mentor" ? "#333333" : "#FFFFFF",
    };

    return style;
  };
  return (
    <Link
      to={linkInfo.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mb-5 flex h-[44px] w-[237px] items-center rounded-lg border px-4 last-of-type:mb-0"
      style={getStyle(linkInfo.platform)}
    >
      {getIcon(linkInfo.platform, false, true)}
      <span className="ml-2 mr-auto">{linkInfo.platform}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
      >
        <path
          fill={linkInfo.platform === "Frontend Mentor" ? "#737373" : "#fff"}
          d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
        />
      </svg>
    </Link>
  );
};

export default MockupList;
