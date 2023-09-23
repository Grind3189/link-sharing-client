import { LinkContext } from "../../context/LinkContextProvider";
import { useContext } from "react";
import MockupList from "./MockupList";
import { ProfileContext } from "../../context/ProfileContextProvider";

const Mockup = () => {
  const { linksData } = useContext(LinkContext);
  const { profileDetails } = useContext(ProfileContext);
  return (
    <section className="grid w-2/5 place-items-center rounded-xl bg-white max-lg:hidden">
      <div className="relative flex h-[631px] w-[307px] flex-col items-center bg-phone-mockup bg-cover">
        {profileDetails.image.url && (
          <>
            <img src={profileDetails.image.url} alt="profile picture" className="h-[96px] w-[96px] rounded-[50%] absolute top-[63px] border-4 border-purple-300 object-cover" />
          </>
        )}
        {profileDetails && (
          <>
            <span className="relative top-[179px] w-[90%] bg-white text-center text-[18px] font-semibold">
              {profileDetails.name} {profileDetails.lastname}
            </span>
            <span className="relative top-[179px] w-[90%] bg-white text-center text-[14px] text-grey-200 ">
              {profileDetails.email}
            </span>
          </>
        )}
        <div className="absolute top-[277px]">
          {linksData.map((linkInfo, index) => {
            if (index < 5) {
              return <MockupList linkInfo={linkInfo} key={index} />;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Mockup;
