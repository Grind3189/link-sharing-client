import UploadImage from "./UploadImage";
import { ProfileContext } from "../../context/ProfileContextProvider";
import { useContext } from "react";

const ProfileForm = () => {
  const { handleChangeProfile, profileDetails, emptyError } =
    useContext(ProfileContext);

  return (
    <form>
      <UploadImage />

      <div className="mb-[94px] mt-6 flex flex-col gap-3 rounded-xl bg-grey-100 p-5 text-grey-300">
        <div className="flex flex-col">
          <label className="mb-2 text-body_s">First name*</label>
          <input
            type="text"
            className={`rounded-lg border px-4 py-3 outline-none ${
              emptyError.name ? "border-red" : "border-borders"
            }`}
            name="name"
            onChange={handleChangeProfile}
            value={profileDetails.name}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-body_s">Last name*</label>
          <input
            type="text"
            className={`rounded-lg border border-borders px-4 py-3 outline-none ${
              emptyError.lastname ? "border-red" : "border-borders"
            }`}
            name="lastname"
            onChange={handleChangeProfile}
            value={profileDetails.lastname}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-2 text-body_s">Email</label>
          <input
            type="email"
            className="rounded-lg border border-borders px-4 py-3 outline-none"
            name="email"
            onChange={handleChangeProfile}
            value={profileDetails.email}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
