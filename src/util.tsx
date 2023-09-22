import Github from "./components/getIcons/Github";
import FrontendMentor from "./components/getIcons/FrontendMentor";
import Twitter from "./components/getIcons/Twitter";
import Linkedin from "./components/getIcons/Linkedin";
import Youtube from "./components/getIcons/Youtube";
import Facebook from "./components/getIcons/Facebook";
import Twitch from "./components/getIcons/Twitch";
import DevTo from "./components/getIcons/DevTo";
import Codewars from "./components/getIcons/Codewars";
import Codepen from "./components/getIcons/Codepen";
import FreeCodeCamp from "./components/getIcons/FreeCodeCamp";
import Gitlab from "./components/getIcons/Gitlab";
import Hashnode from "./components/getIcons/Hashnode";
import StackOverFlow from "./components/getIcons/StackOverFlow";
import { Platform as PlatformType } from "./types/Types";


export const checkChanges = (data: any, parsedData: any) => {
  let isChanged = false
   isChanged = JSON.stringify(data) !== JSON.stringify(parsedData)
   return isChanged
}

export const getIcon = (
  value: PlatformType,
  isSelected: boolean,
  isMockup: boolean,
) => {
  if (value === "Frontend Mentor")
    return <FrontendMentor isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Twitter")
    return <Twitter isSelected={isSelected} isMockup={isMockup} />;
  if (value === "LinkedIn")
    return <Linkedin isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Youtube")
    return <Youtube isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Facebook")
    return <Facebook isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Twitch")
    return <Twitch isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Dev.to")
    return <DevTo isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Codewars")
    return <Codewars isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Codepen")
    return <Codepen isSelected={isSelected} isMockup={isMockup} />;
  if (value === "freeCodeCamp")
    return <FreeCodeCamp isSelected={isSelected} isMockup={isMockup} />;
  if (value === "GitLab")
    return <Gitlab isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Hashnode")
    return <Hashnode isSelected={isSelected} isMockup={isMockup} />;
  if (value === "Stack Overflow")
    return <StackOverFlow isSelected={isSelected} isMockup={isMockup} />;
  return <Github isSelected={isSelected} isMockup={isMockup} />;
};

export const isValidUrl = (platform: PlatformType, link: string) => {
  const urlPatterns = [
    {
      platform: "GitHub",
      pattern: "https://github.com",
    },
    {
      platform: "Frontend Mentor",
      pattern: "https://www.frontendmentor.io",
    },
    {
      platform: "Twitter",
      pattern: "https://twitter.com",
    },
    {
      platform: "LinkedIn",
      pattern: "https://www.linkedin.com",
    },
    {
      platform: "Youtube",
      pattern: "https://www.youtube.com",
    },
    {
      platform: "Facebook",
      pattern: "https://www.facebook.com",
    },
    { platform: "Dev.to", pattern: "https://dev.to" },
    {
      platform: "Codewars",
      pattern: "https://www.codewars.com",
    },
    {
      platform: "Codepen",
      pattern: "https://codepen.io",
    },
    {
      platform: "freeCodeCamp",
      pattern: "https://www.freecodecamp.org",
    },
    {
      platform: "Gitlab",
      pattern: "https://gitlab.com",
    },
    {
      platform: "Hashnode",
      pattern: "https://hashnode.com",
    },
    {
      platform: "Stack Overflow",
      pattern: "https://stackoverflow.com",
    },
  ];

  const platformPattern = urlPatterns.filter(url => url.platform === platform);
  if (!platformPattern) {
      return false; // Platform not found in patterns
    }
    
    // Get the pattern for the platform
    const pattern = platformPattern[0].pattern;

  // Test if the link starts with the pattern
  if (link.startsWith(pattern)) {
    return true; // Link doesn't start with the pattern
  }

  // If the link starts with the pattern, it's valid
  return false;
};
