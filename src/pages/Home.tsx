import EmptyPlaceholder from "../components/home/EmptyPlaceholder";
import LinksList from "../components/home/LinksList";
import { useContext } from "react";
import { LinkContext } from "../context/LinkContextProvider";
import Mockup from "../components/mockup/Mockup";

function Home() {
  const { handleAddLink, linksData } = useContext(LinkContext);

  return (
    <main className="relative h-full justify-between lg:flex lg:gap-6">
      <Mockup />

      <section
        className={`flex h-[100%] flex-col
       justify-between overflow-hidden overflow-y-auto
        rounded-lg bg-white lg:w-[60%] lg:rounded-xl`}
      >
        <div className="p-6">
          <h1 className="text-[24px] font-bold text-grey-300 md:text-heading_m">
            Customize your links
          </h1>
          <p className="mb-10 text-body_m text-grey-200">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
          <button
            className="mb-6 w-full rounded-lg border py-[11px] font-semibold text-purple-300 hover:bg-purple-100"
            onClick={handleAddLink}
          >
            + Add new link
          </button>

          {linksData.length ? <LinksList /> : <EmptyPlaceholder />}
        </div>
      </section>
      <div
        className={`absolute bottom-0 h-[94px] w-full border-t border-borders
           bg-white p-6 md:flex md:justify-end lg:right-0 lg:max-w-[calc(60%-15px)]
           `}
      >
        <button
          className={`h-[46px] w-full rounded-lg
         bg-purple-300 font-semibold text-white md:w-[91px] hover:bg-purple-200 `}
        >
          Save
        </button>
      </div>
    </main>
  );
}

export default Home;
