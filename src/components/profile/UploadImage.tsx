import ProfileIc from "../getIcons/ProfileIc";

const UploadImage = () => {
  return (
    <div className="flex rounded-xl bg-grey-100 p-5 text-grey-200 max-md:flex-col md:h-[233px] md:items-center">
      <span>Profile Picture</span>
      <label
        htmlFor="imageUpload"
        className="my-4 inline-block h-[193px] w-[193px] cursor-pointer rounded-xl bg-purple-100 md:ml-auto md:mr-6"
      >
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <input type="file" id="imageUpload" className="hidden" />
          <ProfileIc />
          <span className="font-semibold text-purple-300">+ Upload Image</span>
        </div>
      </label>
      <p className="text-body_s md:w-[127px]">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default UploadImage;
