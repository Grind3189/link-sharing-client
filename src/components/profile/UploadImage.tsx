import ProfileIc from "../getIcons/ProfileIc";
import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContextProvider";
import Loading from "./Loading";
const UploadImage = () => {
  const { handleUpload, profileDetails, isUploading } =
    useContext(ProfileContext);

  console.log(profileDetails);
  return (
    <div className="flex rounded-xl bg-grey-100 p-5 text-grey-200 max-md:flex-col md:h-[233px] md:items-center">
      <span>Profile Picture</span>
      <label
        htmlFor="imageUpload"
        className={`my-4 inline-block h-[193px] w-[193px] cursor-pointer rounded-xl ${
          profileDetails.image.url ? "bg-grey-200" : "bg-purple-100"
        } md:ml-auto md:mr-6`}
        style={{
          backgroundImage: profileDetails.image.url
            ? `linear-gradient(
            rgba(0, 0, 0, 0.45),
            rgba(0, 0, 0, 0.45)
          ),url(${profileDetails.image.url})`
            : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-2">
          <input
            type="file"
            id="imageUpload"
            className="hidden"
            onChange={handleUpload}
          />
          <ProfileIc image={profileDetails.image.url} />
          <span
            className={`font-semibold ${
              profileDetails.image.url ? "text-white" : "text-purple-300"
            }`}
          >
            {profileDetails.image.url && !isUploading
              ? "Change image"
              : isUploading
              ? <Loading />
              : "+ Upload Image"}
          </span>
        </div>
      </label>
      <p className="text-body_s md:w-[127px]">
        Image must be below 1024x1024px. Use PNG or JPG format.
      </p>
    </div>
  );
};

export default UploadImage;
