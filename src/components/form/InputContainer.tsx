interface InputContainerProp {
  children: React.ReactNode;
}
const InputContainer = ({ children }: InputContainerProp) => {
  return (
    <div
      className={`
      flex h-[48px] items-center gap-[12px] rounded-lg border-2 border-borders px-2
       lg:focus-within:border-purple-300 lg:focus-within:shadow-purple
       `}
    >
      {children}
    </div>
  )
}

export default InputContainer
