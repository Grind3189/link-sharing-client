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

export const getIcon = (value: PlatformType, isSelected: boolean) => {
    if(value === 'Frontend Mentor') return <FrontendMentor isSelected={isSelected} />
    if(value === 'Twitter') return <Twitter isSelected={isSelected} />
    if(value === 'LinkedIn') return <Linkedin isSelected={isSelected} />
    if(value === 'Youtube') return <Youtube isSelected={isSelected} />
    if(value === 'Facebook') return <Facebook isSelected={isSelected} />
    if(value === 'Twitch') return <Twitch isSelected={isSelected} />
    if(value === 'Dev.to') return <DevTo isSelected={isSelected} />
    if(value === 'Codewars') return <Codewars isSelected={isSelected} />
    if(value === 'Codepen') return <Codepen isSelected={isSelected} />
    if(value === 'freeCodeCamp') return <FreeCodeCamp isSelected={isSelected} />
    if(value === 'GitLab') return <Gitlab isSelected={isSelected} />
    if(value === 'Hashnode') return <Hashnode isSelected={isSelected} />
    if(value === 'Stack Overflow') return <StackOverFlow isSelected={isSelected} />
    return <Github isSelected={isSelected} />
}