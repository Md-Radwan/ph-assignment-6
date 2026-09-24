import LibraryCard from "../shared/LibraryCard";
import { Ilibrary } from "@/types/library.type";

const getLibrary = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const Library = async () => {
  const libraryData = await getLibrary();
  console.log(libraryData);
  return (
    <section className="container mx-auto px-3 md:px-0">
      <h1 className="uppercase font-bold text-3xl leading-9 text-center md:text-left">the library</h1>
      <p className="text-[#9CA3AF] text-sm leading-5 mt-2 pb-8 text-center md:text-left">Twelve lifts covering every major muscle group.</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {libraryData.map((libraryInfo:Ilibrary, ind:number) => {
          return (
            <LibraryCard libraryInfo={libraryInfo} key={ind}/>
          );
        })}
      </div>
    </section>
  );
};

export default Library;
