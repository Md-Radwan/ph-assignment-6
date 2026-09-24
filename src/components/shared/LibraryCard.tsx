import { Ilibrary } from "@/types/library.type";
import { Clock3, Flame, Star } from "lucide-react";
import Image from 'next/image';

// interface IlibraryCardProps {
//     library: Ilibrary;
// }
//  { libraryInfo: Ilibrary }
const LibraryCard = ({ libraryInfo }:{ libraryInfo: Ilibrary }) => {
    return (
        <div className="w-full max-w-98.75 overflow-hidden rounded-2xl border border-[#2A2E36] bg-[#15171D] text-white">
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                width={392}
                height={192}
                  src={libraryInfo.image}
                  alt={libraryInfo.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Muscle Groups */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {libraryInfo.muscleGroups.slice(0, 2).map((muscle: string) => (
                    <span
                      key={muscle}
                      className="rounded-full bg-[#B8F500] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-black"
                    >
                      {muscle}
                    </span>
                  ))}
                </div>

                {/* Workout Name */}
                <h2 className="mb-1 text-xl font-extrabold uppercase leading-tight tracking-wide">
                  {libraryInfo.name}
                </h2>

                {/* Equipment */}
                <p className="text-sm text-[#8B8F98]">{libraryInfo.equipment}</p>

                {/* Divider */}
                <div className="my-4 h-px bg-[#292D35]" />

                {/* Stats */}
                <div className="flex items-center gap-5 text-sm text-[#9A9EA7]">
                  {/* Duration */}
                  <div className="flex items-center gap-1.5">
                    <Clock3 size={15} strokeWidth={1.8} />
                    <span>{libraryInfo.duration} min</span>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-1.5">
                    <Flame size={15} strokeWidth={1.8} />
                    <span>{libraryInfo.caloriesBurned} kcal</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <Star size={15} strokeWidth={1.8} />
                    <span>{libraryInfo.rating}</span>
                  </div>
                </div>
              </div>
            </div>
    );
};

export default LibraryCard;