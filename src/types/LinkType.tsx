type Platform = 
    "github" |
    "frontendMentor" |
    "twitter" |
    "linkedIn" |
    "youtube" |
    "facebook" |
    "twitch" |
    "devTo" |
    "codeWars" |
    "codePen" |
    "freeCodeCamp" |
    "gitLab" |
    "hashNode" |
    "stackOverflow" 


export type LinkType = {
  id: string;
  platform: Platform;
  link: string
};


