import { Link, useParams } from "react-router-dom";
import { LinkContext } from "../context/LinkContextProvider";
import { ProfileContext } from "../context/ProfileContextProvider";
import { useContext, useState, useEffect } from "react";
import { LinkType, ProfileType } from "../types/Types";
import MockupList from "../components/mockup/MockupList";

type UserDataState = {
  profile: ProfileType,
  links: LinkType[]
}

function Preview() {
  const { linksData } = useContext(LinkContext);
  const { profileDetails } = useContext(ProfileContext);
  const [userData, setUserData] = useState<UserDataState>({
    profile: {...profileDetails},
    links: [...linksData]
  })


  const userId = localStorage.getItem("userId")

  console.log(userId)

  const params = useParams().userId;

  useEffect(() => {
    
  }, [])

  return (
    <main className="relative px-6 py-4 md:p-6">
      <div className="fixed left-0 right-0 top-0 z-[-10] h-[357px] rounded-b-[32px] bg-purple-300 max-md:hidden" />
      {params && <nav className="flex items-center justify-between rounded-xl font-semibold md:mb-[126px] md:bg-white md:px-6 md:py-4">
        <Link
          to="/"
          className="rounded-lg border border-purple-300 px-[27px] py-[11px] text-purple-300 hover:bg-purple-100"
        >
          Back to Editor
        </Link>
        <Link
          to=""
          className="rounded-lg bg-purple-300 px-[27px] py-[11px] text-white hover:bg-purple-200"
        >
          Share Link
        </Link>
      </nav>}

      <section className="absolute left-0 right-0 top-[140px] mx-auto flex flex-col items-center md:w-[349px] md:-top-[-230px] md:rounded-3xl md:bg-white md:py-12 md:shadow-grey">
        <div className="mb-[25px]">
          {userData.profile.image.url ? (
            <img
              src={userData.profile.image.url}
              alt="profile picture"
              className="h-[104px] w-[104px] rounded-[50%] border-4 border-purple-300"
            />
          ) : (
            <div className="h-[104px] w-[104px] rounded-[50%] bg-[#EEEEEE]" />
          )}
        </div>

        {userData.profile.name ? (
          <h1 className="mb-2 text-heading_m font-bold text-grey-300">
            {userData.profile.name} {userData.profile.lastname}
          </h1>
        ) : (
          <div className="mb-2 h-[45px] w-[50%] rounded-full bg-[#EEEEEE]" />
        )}

        {userData.profile.email ? (
          <span className="mb-14 text-grey-200">{userData.profile.email}</span>
        ) : (
          <div className="mb-14 h-5 w-[35%] rounded-full bg-[#EEEEEE]" />
        )}

        <div>
          {userData.links.map((linkInfo, index) => {
            return <MockupList linkInfo={linkInfo} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Preview;
