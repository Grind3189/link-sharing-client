import emptyIllustration from "../../assets/illustration-empty.svg";

const EmptyPlaceholder = () => {

  return (
    <div
      className={`mb-[25px] flex h-[377px] flex-col items-center justify-center rounded-lg bg-grey-100 px-4 md:h-[509px]`}
    >
      <img
        src={emptyIllustration}
        alt="empty placeholder image"
        className="h-[80px] w-[124px] md:h-[140px] md:w-[220px]"
      />
      <h1 className="my-[24px] text-[24px] font-bold text-grey-300 md:text-heading_m">
        Let’s get you started
      </h1>
      <p className="max-w-[488px] text-center text-grey-200 ">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};

export default EmptyPlaceholder;
