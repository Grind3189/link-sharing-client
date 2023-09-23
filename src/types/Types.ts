export interface IconType {
  isSelected: boolean;
  isMockup: boolean;
}

export type Platform =
  | "GitHub"
  | "Frontend Mentor"
  | "Twitter"
  | "LinkedIn"
  | "Youtube"
  | "Facebook"
  | "Twitch"
  | "Dev.to"
  | "Codewars"
  | "Codepen"
  | "freeCodeCamp"
  | "GitLab"
  | "Hashnode"
  | "Stack Overflow";

export interface LinkType {
  id: string;
  platform: Platform;
  link: string;
  error: string;
}

export interface ImageType {
  id: string;
  url: string;
  signature: string;
}
export interface ProfileType {
  name: string;
  lastname: string;
  email: string;
  image: ImageType;
}

interface UserType {
  email: string;
  password: string;
}

export type CreatorType = {
  user: UserType;
  profile: ProfileType;
  links: LinkType[];
};
