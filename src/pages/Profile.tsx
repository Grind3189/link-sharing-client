import Mockup from "../components/mockup/Mockup";
import ProfileForm from "../components/profile/ProfileForm";
import Loading from "../components/Loading";
import Popup from "../components/popup/Popup";
import SaveIc from "../assets/icon-changes-saved.svg";
import { ProfileContext } from "../context/ProfileContextProvider";
import { useContext } from "react";
import { WidthContext } from "../context/WidthContextProvider";

function Profile() {
  const { handleSaveProfile, isSaving, profileSaved } =
    useContext(ProfileContext);
  const { width } = useContext(WidthContext);

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
          className={`grid h-[46px] w-full place-items-center rounded-lg
         bg-purple-300 font-semibold text-white hover:bg-purple-200
          disabled:cursor-not-allowed  md:w-[91px]`}
          onClick={handleSaveProfile}
          disabled={isSaving}
        >
          {isSaving ? <Loading /> : "Save"}
        </button>
      </div>

      {profileSaved && (
        <Popup>
          <img src={SaveIc} alt="save icon" />
          <span>
            {width > 800
              ? "Your changes have been successfully saved!"
              : "Saved"}
          </span>
        </Popup>
      )}
    </main>
  );
}

export default Profile;
