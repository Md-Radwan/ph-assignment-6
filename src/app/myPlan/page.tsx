"use client";

import { Oswald } from "next/font/google";
import { LibraryContext } from "@/context/LibraryContext";
import React, { useContext, useState } from "react";
import { Ilibrary } from "@/types/library.type";
import Link from "next/link";
import MyPlanCard from "@/components/shared/MyPlanCard";
import SavedCard from "@/components/shared/SavedCard";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const MyPlan = () => {
  const { addToToday, saveForLater, removeFromToday, removeFromSaved } = useContext(LibraryContext) as {
    addToToday: Ilibrary[];
    saveForLater: Ilibrary[];
    removeFromToday: (id: number) => void;
    removeFromSaved: (id: number) => void;
  };

  const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
    "duration",
  );

  console.log(addToToday, saveForLater, "addToToday", "saveForLater");

  const sortLibraryInfo = (library: Ilibrary[]) => {
    const sortedLibrary = [...library];

    if (sortBy === "duration") {
      sortedLibrary.sort((a, b) => b.duration - a.duration);
    } else if (sortBy === "calories") {
      sortedLibrary.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortBy === "rating") {
      sortedLibrary.sort((a, b) => b.rating - a.rating);
    }

    return sortedLibrary;
  };

  const sortedAddToToday = sortLibraryInfo(addToToday);
  const sortedSaveForLater = sortLibraryInfo(saveForLater);

  const totalExercises = addToToday.length;

  const totalMinutes = addToToday.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = addToToday.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  return (
    <section>
      <div className="container mx-auto px-3 md:px-0">
        <h1
          className={`${oswald.className} mt-10 uppercase font-bold text-3xl leading-7.5`}
        >
          my plan
        </h1>
        <p className="mt-2">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* total exercises minutes calories section is start */}

        <div className="w-full rounded-2xl border border-[#252a34] bg-[#13161c] px-6 py-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Exercises */}
            <div className="px-0 md:px-6 lg:px-0">
              <p className="text-sm text-[#858b97]">Exercises</p>

              <h3 className="mt-1 text-4xl font-extrabold text-[#baff00]">
                {totalExercises}
              </h3>
            </div>

            {/* Minutes */}
            <div className="border-t border-[#252a34] px-0 pt-5 md:border-l md:border-t-0 md:px-8 md:pt-0">
              <p className="text-sm text-[#858b97]">Minutes</p>

              <h3 className="mt-1 text-4xl font-extrabold text-white">
                {totalMinutes}
              </h3>
            </div>

            {/* Calories */}
            <div className="border-t border-[#252a34] px-0 pt-5 md:border-l md:border-t-0 md:px-8 md:pt-0">
              <p className="text-sm text-[#858b97]">Calories</p>

              <h3 className="mt-1 text-4xl font-extrabold text-white">
                {totalCalories}
              </h3>
            </div>
          </div>
        </div>
        {/* total exercises minutes calories section is end */}

        {/* name of each tab group should be unique */}
        <div className="mt-10 relative">
          <div className="flex flex-col md:flex-row gap-3 items-center text-right absolute right-0 -top-7 md:top-0">
            <h2 className="text-lg font-bold w-30">Sort By</h2>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calories" | "rating")
              }
              className="select"
            >
              {/* <option disabled={true}>Sort By</option> */}
              <option value={"duration"}>Duration</option>
              <option value={"calories"}>Calories</option>
              <option value={"rating"}>Rating</option>
            </select>
          </div>
          <div className="tabs tabs-lift gap-6">
            <input
              type="radio"
              name="my_tabs_3"
              className="tab rounded-xl"
              aria-label="Today's Plan"
              defaultChecked
            />
            <div className="tab-content bg-[#101217] border-base-300 p-6 rounded-xl ">
              <div className="space-y-4">
                {sortedAddToToday.length > 0 ? (
                  sortedAddToToday.map((library: Ilibrary) => {
                    return (
                      <MyPlanCard key={library.id} MyPlanCardInfo={library} onRemove={removeFromToday}/>
                    );
                  })
                ) : (
                  <div className="flex flex-col justify-center items-center py-24.5">
                    <h2 className="text-xl leading-5 font-bold">
                      NOTHING HERE YET
                    </h2>
                    <p className="text-[12px] text-[#A1A1AA] leading-4 mt-2 pb-6">
                      Browse the library and add a lift to get today moving.
                    </p>
                    <button className="bg-[#C2F10D] rounded-full py-2.5 px-6 text-black text-[12px] leading-4 font-semibold cursor-pointer">
                      <Link href={"/"}>Go to workouts</Link>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <input
              type="radio"
              name="my_tabs_3"
              className="tab rounded-xl"
              aria-label="Saved"
            />
            <div className="tab-content bg-[#101217] border-base-300 p-6 rounded-xl">
              <div className="space-y-4">
                {sortedSaveForLater.length > 0 ? (
                  sortedSaveForLater.map((library: Ilibrary) => {
                    return (
                      <SavedCard key={library.id} MySavedCardInfo={library} onRemove={removeFromSaved}
/>
                    );
                  })
                ) : (
                  <div className="flex flex-col justify-center items-center py-24.5">
                    <h2 className="text-xl leading-5 font-bold">
                      NOTHING HERE YET
                    </h2>
                    <p className="text-[12px] text-[#A1A1AA] leading-4 mt-2 pb-6">
                      Browse the library and add a lift to get today moving.
                    </p>
                    <button className="bg-[#C2F10D] rounded-full py-2.5 px-6 text-black text-[12px] leading-4 font-semibold cursor-pointer">
                      <Link href={"/"}>Go to workouts</Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPlan;







// "use client";

// import { Oswald } from "next/font/google";
// import { LibraryContext } from "@/context/LibraryContext";
// import React, { useContext, useState } from "react";
// import { Ilibrary } from "@/types/library.type";
// import Link from "next/link";
// import MyPlanCard from "@/components/shared/MyPlanCard";
// import SavedCard from "@/components/shared/SavedCard";

// const oswald = Oswald({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
// });

// const MyPlan = () => {
//   const { addToToday, saveForLater } = useContext(LibraryContext) as {
//     addToToday: Ilibrary[];
//     saveForLater: Ilibrary[];
//   };

//   const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">(
//     "duration",
//   );

//   console.log(addToToday, saveForLater, "addToToday", "saveForLater");

//   const sortLibraryInfo = (library: Ilibrary[]) => {
//     const sortedLibrary = [...library];

//     if (sortBy === "duration") {
//       sortedLibrary.sort((a, b) => b.duration - a.duration);
//     } else if (sortBy === "calories") {
//       sortedLibrary.sort((a, b) => b.calories - a.calories);
//     } else if (sortBy === "rating") {
//       sortedLibrary.sort((a, b) => b.rating - a.rating);
//     }

//     return sortedLibrary;
//   };

//   const sortedAddToToday = sortLibraryInfo(addToToday);
//   const sortedSaveForLater = sortLibraryInfo(saveForLater);

//   const totalExercises = addToToday.length;

//   const totalMinutes = addToToday.reduce(
//     (total, exercise) => total + exercise.duration,
//     0,
//   );

//   const totalCalories = addToToday.reduce(
//     (total, exercise) => total + exercise.caloriesBurned,
//     0,
//   );

//   return (
//     <section>
//       <div className="container mx-auto">
//         <h1
//           className={`${oswald.className} mt-10 uppercase font-bold text-3xl leading-7.5`}
//         >
//           my plan
//         </h1>
//         <p className="mt-2">
//           Cap of five lifts for today. Finish them, then load more.
//         </p>

//         {/* total exercises minutes calories section is start */}

//         <div className="w-full rounded-2xl border border-[#252a34] bg-[#13161c] px-6 py-6 mt-6">
//           <div className="grid grid-cols-1 md:grid-cols-3">
//             {/* Exercises */}
//             <div className="px-0 md:px-6 lg:px-0">
//               <p className="text-sm text-[#858b97]">Exercises</p>

//               <h3 className="mt-1 text-4xl font-extrabold text-[#baff00]">
//                 {totalExercises}
//               </h3>
//             </div>

//             {/* Minutes */}
//             <div className="border-t border-[#252a34] px-0 pt-5 md:border-l md:border-t-0 md:px-8 md:pt-0">
//               <p className="text-sm text-[#858b97]">Minutes</p>

//               <h3 className="mt-1 text-4xl font-extrabold text-white">
//                 {totalMinutes}
//               </h3>
//             </div>

//             {/* Calories */}
//             <div className="border-t border-[#252a34] px-0 pt-5 md:border-l md:border-t-0 md:px-8 md:pt-0">
//               <p className="text-sm text-[#858b97]">Calories</p>

//               <h3 className="mt-1 text-4xl font-extrabold text-white">
//                 {totalCalories}
//               </h3>
//             </div>
//           </div>
//         </div>
//         {/* total exercises minutes calories section is end */}

//         {/* name of each tab group should be unique */}
//         <div className="mt-10 relative">
//           <div className="flex gap-3 items-center text-right absolute right-0 top-0">
//             <h2 className="text-lg font-bold w-30">Sort By</h2>
//             <select
//               value={sortBy}
//               onChange={(e) =>
//                 setSortBy(e.target.value as "duration" | "calories" | "rating")
//               }
//               className="select"
//             >
//               {/* <option disabled={true}>Sort By</option> */}
//               <option value={"duration"}>Duration</option>
//               <option value={"calories"}>Calories</option>
//               <option value={"rating"}>Rating</option>
//             </select>
//           </div>
//           <div className="tabs tabs-lift gap-6">
//             <input
//               type="radio"
//               name="my_tabs_3"
//               className="tab rounded-xl"
//               aria-label="Today's Plan"
//               defaultChecked
//             />
//             <div className="tab-content bg-[#101217] border-base-300 p-6 rounded-xl ">
//               <div className="space-y-4">
//                 {sortedAddToToday.length > 0 ? (
//                   sortedAddToToday.map((library: Ilibrary) => {
//                     return (
//                       <MyPlanCard key={library.id} MyPlanCardInfo={library} />
//                     );
//                   })
//                 ) : (
//                   <div className="flex flex-col justify-center items-center py-24.5">
//                     <h2 className="text-xl leading-5 font-bold">
//                       NOTHING HERE YET
//                     </h2>
//                     <p className="text-[12px] text-[#A1A1AA] leading-4 mt-2 pb-6">
//                       Browse the library and add a lift to get today moving.
//                     </p>
//                     <button className="bg-[#C2F10D] rounded-full py-2.5 px-6 text-black text-[12px] leading-4 font-semibold cursor-pointer">
//                       <Link href={"/"}>Go to workouts</Link>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <input
//               type="radio"
//               name="my_tabs_3"
//               className="tab rounded-xl"
//               aria-label="Saved"
//             />
//             <div className="tab-content bg-[#101217] border-base-300 p-6 rounded-xl">
//               <div className="space-y-4">
//                 {sortedSaveForLater.length > 0 ? (
//                   sortedSaveForLater.map((library: Ilibrary) => {
//                     return (
//                       <SavedCard key={library.id} MySavedCardInfo={library} />
//                     );
//                   })
//                 ) : (
//                   <div className="flex flex-col justify-center items-center py-24.5">
//                     <h2 className="text-xl leading-5 font-bold">
//                       NOTHING HERE YET
//                     </h2>
//                     <p className="text-[12px] text-[#A1A1AA] leading-4 mt-2 pb-6">
//                       Browse the library and add a lift to get today moving.
//                     </p>
//                     <button className="bg-[#C2F10D] rounded-full py-2.5 px-6 text-black text-[12px] leading-4 font-semibold cursor-pointer">
//                       <Link href={"/"}>Go to workouts</Link>
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MyPlan;
