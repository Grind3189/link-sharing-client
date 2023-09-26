import { useState, useEffect } from "react";
import { ImageType, LinkType } from "../types/Types";
import MockupList from "../components/mockup/MockupList";
import { useParams } from "react-router-dom";
import { getApiUrl } from "../util";

interface UserType {
  profile: {
    name: string;
    lastname: string;
    email: string;
    image: ImageType;
  };
  links: LinkType[];
  _id: string;
}

function SharedPreview() {
  const userId = useParams().userId;
  const uri = getApiUrl();
  const [userData, setUserData] = useState<UserType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(`${uri}/api/preview/${userId}`);
      const data = await res.json();
      setIsLoading(false)
      setUserData(data);
    };
    fetchUserData();
  }, [userId]);

  return (
    <main className="px-6 py-4 md:p-6">
      <div className="fixed left-0 right-0 top-0 z-[-10] h-[357px] rounded-b-[32px] bg-purple-300 max-md:hidden" />

      <section className="mx-auto mt-[140px] flex flex-col items-center md:mt-[200px] md:min-h-[300px] md:w-[349px] md:rounded-3xl md:bg-white md:py-12 md:shadow-grey">
        {isLoading ? <h1 className="font-bold my-auto">Loading...</h1> : (
          <>
            <div className="mb-[25px]">
              {userData?.profile.image.url ? (
                <img
                  src={userData?.profile.image.url}
                  alt="profile picture"
                  className="h-[104px] w-[104px] rounded-[50%] border-4 border-purple-300"
                />
              ) : (
                <div className="h-[104px] w-[104px] rounded-[50%] bg-[#EEEEEE]" />
              )}
            </div>

            {userData?.profile.name ? (
              <h1 className="mb-2 text-heading_m font-bold text-grey-300">
                {userData?.profile.name} {userData?.profile.lastname}
              </h1>
            ) : (
              <div className="mb-2 h-[45px] w-[50%] rounded-full bg-[#EEEEEE]" />
            )}

            {userData?.profile.email ? (
              <span className="mb-14 text-grey-200">
                {userData.profile.email}
              </span>
            ) : (
              <div className="mb-14 h-5 w-[35%] rounded-full bg-[#EEEEEE]" />
            )}

            <div>
              {userData?.links.map((linkInfo, index) => {
                return <MockupList linkInfo={linkInfo} key={index} />;
              })}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default SharedPreview;
