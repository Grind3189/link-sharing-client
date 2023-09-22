import Mockup from "../components/mockup/Mockup";
import ProfileForm from "../components/profile/ProfileForm";
import { ProfileContext } from "../context/ProfileContextProvider";
import { useContext } from "react";

function Profile() {
  const {handleSaveProfile, hasChanges} = useContext(ProfileContext)

  return (
    <main className="relative h-full justify-between lg:flex lg:gap-6">
      <Mockup />

      <section
        className={`h-[100%]
        overflow-scroll rounded-lg bg-white lg:w-[60%] lg:rounded-xl`}
      >
        <div className="p-6">
          <h1 className="text-[24px] font-bold text-grey-300 md:text-heading_m">
            Profile Details
          </h1>
          <p className="mb-10 text-body_m text-grey-200">
            Add your details to create a personal touch to your profile.
          </p>

          <ProfileForm />
        </div>
      </section>
      <div
        className={`absolute bottom-0 h-[94px] w-full border-t border-borders
           bg-white p-6 md:flex md:justify-end lg:right-0 lg:max-w-[calc(60%-15px)]
           `}
      >
        <button
          className={`h-[46px] w-full rounded-lg
         bg-purple-300 font-semibold text-white hover:bg-purple-200
          disabled:cursor-not-allowed disabled:bg-purple-200 md:w-[91px]`}
          onClick={handleSaveProfile}
          disabled={!hasChanges}
        >
          Save
        </button>
      </div>
    </main>
  );
}

export default Profile;
