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

export const getIcon = (value: PlatformType, isSelected: boolean, isMockup: boolean) => {
    if(value === 'Frontend Mentor') return <FrontendMentor isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Twitter') return <Twitter isSelected={isSelected} isMockup={isMockup} />
    if(value === 'LinkedIn') return <Linkedin isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Youtube') return <Youtube isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Facebook') return <Facebook isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Twitch') return <Twitch isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Dev.to') return <DevTo isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Codewars') return <Codewars isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Codepen') return <Codepen isSelected={isSelected} isMockup={isMockup} />
    if(value === 'freeCodeCamp') return <FreeCodeCamp isSelected={isSelected} isMockup={isMockup} />
    if(value === 'GitLab') return <Gitlab isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Hashnode') return <Hashnode isSelected={isSelected} isMockup={isMockup} />
    if(value === 'Stack Overflow') return <StackOverFlow isSelected={isSelected} isMockup={isMockup} />
    return <Github isSelected={isSelected} isMockup={isMockup} />
}