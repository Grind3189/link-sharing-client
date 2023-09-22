interface GetLoginProp {
  width: number;
  hover: string;
}
const GetLoginIc = ({ width, hover }: GetLoginProp) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={hover === 'login' ? "#633CFF" : "#737373"}
        width="21"
        height="20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
        />
      </svg>
      {width >= 1280 && (
        <span
          className={`font-semibold ${hover === 'login' ? 'text-purple-300' : 'text-grey-200'}`}
        >
          Login
        </span>
      )}
    </>
  );
};

export default GetLoginIc;
