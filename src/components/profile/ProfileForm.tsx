import ProfileIc from "../getIcons/ProfileIc";

const ProfileForm = () => {
  return (
    <form>
      <div className="flex max-md:flex-col bg-grey-100 p-5 text-grey-200 rounded-xl md:items-center md:h-[233px]">
        <span>Profile Picture</span>
        <label
          htmlFor="imageUpload"
          className="my-4 h-[193px] w-[193px] cursor-pointer rounded-xl bg-purple-100 inline-block md:ml-auto md:mr-6"
        >
          <div className="flex h-full flex-col items-center justify-center gap-2">
            <input type="file" id="imageUpload" className="hidden" />
            <ProfileIc />
            <span className="font-semibold text-purple-300">
              + Upload Image
            </span>
          </div>
        </label>
        <p className="text-body_s md:w-[127px]">
          Image must be below 1024x1024px. Use PNG or JPG format.
        </p>
      </div>

      <div className="bg-grey-100 p-5 text-grey-300 mt-6 rounded-xl flex flex-col gap-3 mb-[94px]">
        <div className="flex flex-col">
          <label className="text-body_s mb-2">First name*</label>
          <input type="text" className="px-4 py-3 border border-borders rounded-lg outline-none" />
        </div>
        <div className="flex flex-col">
          <label className="text-body_s mb-2">Last name*</label>
          <input type="text" className="px-4 py-3 border border-borders rounded-lg outline-none" />
        </div>
        <div className="flex flex-col">
          <label className="text-body_s mb-2">Email</label>
          <input type="email" className="px-4 py-3 border border-borders rounded-lg outline-none" />
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
