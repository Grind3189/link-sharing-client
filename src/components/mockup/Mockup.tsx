import phoneMockup from "../../assets/illustration-phone-mockup.svg";
import { LinkContext } from "../../context/LinkContextProvider";
import {useContext} from 'react'
import { getIcon } from "../../util";

const Mockup = () => {
    const {linksData} = useContext(LinkContext)
    console.log(linksData)
  return (
    <section className="grid w-2/5 place-items-center rounded-xl bg-white max-lg:hidden">
      <div className="border">
        <img src={phoneMockup} />
        {linksData.map(link => getIcon(link.platform, false, true))}
      </div>
    </section>
  );
};

export default Mockup;
