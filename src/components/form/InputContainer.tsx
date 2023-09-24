interface InputContainerProp {
  children: React.ReactNode;
  hasError?: boolean;
}
const InputContainer = ({ children, hasError = false }: InputContainerProp) => {
  return (
    <div
      className={`
      flex h-[48px] items-center gap-[12px] rounded-lg border-2 ${
        hasError ? "border-red" : "border-borders"
      } px-2
       focus-within:border-purple-300 focus-within:shadow-purple
       `}
    >
      {children}
    </div>
  );
};

export default InputContainer;
