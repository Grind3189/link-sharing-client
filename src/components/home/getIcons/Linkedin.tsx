import { IconType } from "../../../types/IconType";

const Linkedin = ({isSelected}: IconType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={isSelected ? "#633CFF" : "#737373"}
        d="M12.667 2A1.333 1.333 0 0 1 14 3.333v9.334A1.334 1.334 0 0 1 12.667 14H3.333A1.334 1.334 0 0 1 2 12.667V3.333A1.333 1.333 0 0 1 3.333 2h9.334Zm-.334 10.333V8.8a2.173 2.173 0 0 0-2.173-2.173c-.567 0-1.227.346-1.547.866v-.74h-1.86v5.58h1.86V9.047a.93.93 0 1 1 1.86 0v3.286h1.86ZM4.587 5.707a1.12 1.12 0 0 0 1.12-1.12 1.124 1.124 0 1 0-1.12 1.12Zm.926 6.626v-5.58H3.667v5.58h1.846Z"
      />
    </svg>
  );
};

export default Linkedin;
