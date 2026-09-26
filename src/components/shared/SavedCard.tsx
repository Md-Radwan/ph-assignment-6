import { Ilibrary } from "@/types/library.type";
import { Check, Clock3, Flame, Star, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

interface IMySavedCardInfoProps {
  MySavedCardInfo: Ilibrary;
  onRemove: (id: number) => void;
}

const SavedCard = ({ MySavedCardInfo, onRemove }: IMySavedCardInfoProps) => {


const handleOnRemove = () => {
  onRemove(MySavedCardInfo.id);
  toast.success(`${MySavedCardInfo.name} removed from saved`);
};

  return (
    <div className="w-full rounded-[26px] border border-[#242934] bg-[#13161c] p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
        {/* Image */}
        <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-2xl sm:h-40 lg:w-64">
          <Image
            src={MySavedCardInfo.image}
            alt={MySavedCardInfo.name}
            fill
            unoptimized
            className="object-cover"
            sizes="256px"
          />
        </div>

        {/* Workout Information */}
        <div className="min-w-0 flex-1">
          <h3 className="text-2xl font-extrabold uppercase tracking-wide text-white">
            {MySavedCardInfo.name}
          </h3>

          <p className="mt-1 text-lg font-semibold text-[#8f96a3]">
            {MySavedCardInfo.equipment}
          </p>

          {/* Workout Stats */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <Clock3 size={22} className="text-[#baff00]" />
              <span className="text-base text-[#d0d4db]">
                {MySavedCardInfo.duration} min
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Flame size={22} className="fill-[#baff00] text-[#baff00]" />
              <span className="text-base text-[#d0d4db]">
                {MySavedCardInfo.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Star size={22} className="text-[#baff00]" />
              <span className="text-base text-[#d0d4db]">
                {MySavedCardInfo.rating}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row lg:items-center">
          <Link href={`/library/${MySavedCardInfo.id}`}>
            <button className="btn btn-outline rounded-full border-[#344052] px-7 text-white hover:border-[#baff00] hover:bg-transparent hover:text-white">
              View Details
            </button>
          </Link>

          <button
          onClick={handleOnRemove}
            className="btn btn-ghost btn-circle text-[#747c88] hover:bg-transparent hover:text-white"
            aria-label={`Remove ${MySavedCardInfo.name}`}
          >
            <X size={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedCard;
