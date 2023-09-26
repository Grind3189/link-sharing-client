
interface PopupProp {
  children: React.ReactNode;
}
const Popup = ({ children, }: PopupProp) => {
  return (
    <div
      className={`fixed bottom-[80px] left-1/2 flex -translate-x-1/2 transform
       items-center gap-2 rounded-xl border-0 bg-grey-300
        px-6 py-4 font-semibold text-white md:bottom-[40px]`}
    >
      {children}
    </div>
  );
};

export default Popup;
