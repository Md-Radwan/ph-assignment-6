

import { Ilibrary } from "@/types/library.type";
import Image from "next/image";
import { Bookmark, CalendarPlus } from "lucide-react";

interface ILibraryDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getLibrary = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await response.json();
  return data;
};

const LibraryDetailsPage = async ({ params }: ILibraryDetailsPageProps) => {

  const { id } = await params;

  const libraryData = await getLibrary();

  const library = libraryData.find(
    (eachLibraryData: Ilibrary) => String(eachLibraryData.id) === String(id),
  ) as Ilibrary;

  return (
    <div>
      <div className="container mx-auto min-h-screen px-4 pt-12 pb-27 text-white">
      <div className=" grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-125 overflow-hidden rounded-2xl md:h-162.5 lg:h-201.25">
          <Image
            src={library.image}
            alt={library.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* library Content */}
        <div>
          {/* Title */}
          <h1 className="text-3xl font-black uppercase md:text-4xl">
            {library.name}
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-gray-400 md:text-base">
            {library.description}
          </p>

          {/* Muscle Tags */}
          <div className="mt-5 flex flex-wrap gap-3">
            {library.muscleGroups.map((muscle: string) => (
              <div
                key={muscle}
                className="rounded-full bg-[#baff00] px-4 py-1.5 text-sm font-medium text-black"
              >
                {muscle}
              </div>
            ))}
          </div>

          {/* library Information */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-[#252a33] bg-[#151820]">
            
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-[#252a33] px-6 py-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Equipment
              </h3>

              <p className="text-sm text-gray-200 md:text-base">
                {library.equipment}
              </p>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-[#252a33] px-6 py-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Difficulty
              </h3>

              <p className="text-sm text-gray-200 md:text-base">
                {library.difficulty}
              </p>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-[#252a33] px-6 py-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Sets
              </h3>

              <p className="text-sm text-gray-200 md:text-base">
                {library.sets}
              </p>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-[#252a33] px-6 py-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Reps
              </h3>

              <p className="text-sm text-gray-200 md:text-base">
                {library.reps}
              </p>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-[#252a33] px-6 py-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Duration
              </h3>

              <p className="text-sm text-gray-200 md:text-base">
                {library.duration}
              </p>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-[#252a33] px-6 py-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Calories
              </h3>

              <p className="text-sm text-gray-200 md:text-base">
                {library.caloriesBurned}
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-6 py-5">
              <h3 className="text-xs font-bold uppercase tracking-wide text-gray-400">
                Rating
              </h3>

              <p className="text-sm text-gray-200 md:text-base">
                {library.rating}
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-9">
            <h2 className="text-lg font-bold uppercase">
              Instructions
            </h2>

            <div className="mt-5 space-y-4">
              {library.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex gap-4 text-sm leading-6 text-gray-300 md:text-base"
                >
                  <span className="text-gray-500">
                    {index + 1}.
                  </span>

                  <p>{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button className="flex items-center gap-2 px-6 py-3 border-none bg-[#baff00] text-black text-sm font-semibold leading-5 hover:bg-[#a8e600] rounded-xl cursor-pointer">
                <CalendarPlus/>
              Add to today&apos;s plan
            </button>

            <button className="flex items-center gap-2 px-6 py-3 border-gray-700 text-gray-300 text-sm font-semibold leading-5 hover:bg-transparent rounded-xl cursor-pointer outline outline-[#374151]">
                <Bookmark/>
              Save for later
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LibraryDetailsPage;
