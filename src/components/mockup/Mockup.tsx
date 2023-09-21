import { LinkContext } from "../../context/LinkContextProvider";
import { useContext } from "react";
import MockupList from "./MockupList";

const Mockup = () => {
  const { linksData } = useContext(LinkContext);
  return (
    <section className="grid w-2/5 place-items-center rounded-xl bg-white max-lg:hidden">
      <div className="flex h-[631px] w-[307px] flex-col items-center overflow-hidden border bg-phone-mockup bg-cover">
        {linksData.map((linkInfo, index) => {
          if (index < 5) {
            return (
             <MockupList linkInfo={linkInfo} />
            );
          } return null
        })}
      </div>
    </section>
  );
};

export default Mockup;
