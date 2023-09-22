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
};

export type UserType = {
  name: string,
  lastname: string,
  email: string,
  password: string,
  links: LinkType[]
}
