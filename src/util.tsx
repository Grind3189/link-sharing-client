import Github from "../src/components/home/getIcons/Github";
import FrontendMentor from "../src/components/home/getIcons/FrontendMentor";
import Twitter from "../src/components/home/getIcons/Twitter";
import Linkedin from "../src/components/home/getIcons/Linkedin";
import Youtube from "../src/components/home/getIcons/Youtube";
import Facebook from "../src/components/home/getIcons/Facebook";
import Twitch from "../src/components/home/getIcons/Twitch";
import DevTo from "../src/components/home/getIcons/DevTo";
import Codewars from "../src/components/home/getIcons/Codewars";
import Codepen from "../src/components/home/getIcons/Codepen";
import FreeCodeCamp from "../src/components/home/getIcons/FreeCodeCamp";
import Gitlab from "../src/components/home/getIcons/Gitlab";
import Hashnode from "../src/components/home/getIcons/Hashnode";
import StackOverFlow from "../src/components/home/getIcons/StackOverFlow";
import { Platform as PlatformType } from "./types/LinkType";

export const getIcon = (value: PlatformType) => {
    if(value === 'Frontend Mentor') return <FrontendMentor />
    if(value === 'Twitter') return <Twitter />
    if(value === 'LinkedIn') return <Linkedin />
    if(value === 'Youtube') return <Youtube />
    if(value === 'Facebook') return <Facebook />
    if(value === 'Twitch') return <Twitch />
    if(value === 'Dev.to') return <DevTo />
    if(value === 'Codewars') return <Codewars />
    if(value === 'Codepen') return <Codepen />
    if(value === 'freeCodeCamp') return <FreeCodeCamp />
    if(value === 'GitLab') return <Gitlab />
    if(value === 'Hashnode') return <Hashnode />
    if(value === 'Stack Overflow') return <StackOverFlow />
    return <Github />
}