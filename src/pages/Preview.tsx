import { Link } from "react-router-dom";
import { LinkContext } from "../context/LinkContextProvider";
import { ProfileContext } from "../context/ProfileContextProvider";
import { useContext } from "react";
import MockupList from "../components/mockup/MockupList";

function Preview() {
  const { linksData } = useContext(LinkContext);
  const { profileDetails } = useContext(ProfileContext);

  const userId = localStorage.getItem('userId')
  const shareableLink = `http://localhost:5173/preview/${userId}`

  const copyToLink = () => {
    navigator.clipboard.writeText(shareableLink)
  }

  return (
    <main className="px-6 py-4 md:p-6">
      <div className="fixed left-0 right-0 top-0 z-[-10] h-[357px] rounded-b-[32px] bg-purple-300 max-md:hidden" />
      <nav className="mb-[60px] flex items-center justify-between rounded-xl font-semibold md:mb-[126px] md:bg-white md:px-6 md:py-4">
        <Link
          to="/"
          className="rounded-lg border border-purple-300 px-[27px] py-[11px] text-purple-300 hover:bg-purple-100"
        >
          Back to Editor
        </Link>
        <button
          className="rounded-lg bg-purple-300 px-[27px] py-[11px] text-white hover:bg-purple-200"
          onClick={copyToLink}
        >
          Share Link
        </button>
      </nav>

      <section className="mx-auto flex flex-col items-center md:min-h-[300px] md:w-[349px] md:rounded-3xl md:bg-white md:py-12 md:shadow-grey">
        <div className="mb-[25px]">
          {profileDetails.image.url ? (
            <img
              src={profileDetails.image.url}
              alt="profile picture"
              className="h-[104px] w-[104px] rounded-[50%] border-4 border-purple-300"
            />
          ) : (
            <div className="h-[104px] w-[104px] rounded-[50%] bg-[#EEEEEE]" />
          )}
        </div>

        {profileDetails.name ? (
          <h1 className="mb-2 text-heading_m font-bold text-grey-300">
            {profileDetails.name} {profileDetails.lastname}
          </h1>
        ) : (
          <div className="mb-2 h-[45px] w-[50%] rounded-full bg-[#EEEEEE]" />
        )}

        {profileDetails.email ? (
          <span className="mb-14 text-grey-200">{profileDetails.email}</span>
        ) : (
          <div className="mb-14 h-5 w-[35%] rounded-full bg-[#EEEEEE]" />
        )}

        <div>
          {linksData.map((linkInfo, index) => {
            return <MockupList linkInfo={linkInfo} key={index} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default Preview;
