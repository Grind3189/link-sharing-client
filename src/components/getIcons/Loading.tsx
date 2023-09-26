const Loading = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      width="20"
      height="20"
      className="animate-spin"
      fill="none"
    >
      <circle
        cx="50"
        cy="50"
        r="45"
        stroke="#ccc"
        strokeWidth="6"
        fill="none"
      />
      <path
        d="M50 5
                   a 45 45 0 0 1 0 90
                   a 45 45 0 0 1 0 -90"
        stroke="#fff"
        strokeWidth="6"
        fill="#633CFF"
      />
    </svg>
  );
};

export default Loading;
