interface GetLogoutProp {
  width: number;
  hover: string;
}

const GetLogoutIc = ({ width, hover }: GetLogoutProp) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={hover === "logout" ? "#633CFF" : "#737373"}
        width="21"
        height="20"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
        />
      </svg>
      {width > 1280 && (
        <span
          className={`font-semibold ${
            hover === "logout" ? "text-purple-300" : "text-grey-200"
          }`}
        >
          Logout
        </span>
      )}
    </>
  );
};

export default GetLogoutIc;
