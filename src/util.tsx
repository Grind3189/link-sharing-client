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