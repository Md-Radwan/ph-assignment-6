"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { Ilibrary } from "@/types/library.type";
import { CalendarPlus } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddToTodayButton = ({ library }: { library: Ilibrary }) => {
  const { addToToday, setAddToToday } = useContext(LibraryContext) as {
    addToToday: Ilibrary[];
    setAddToToday: React.Dispatch<React.SetStateAction<Ilibrary[]>>;
  };

  const handleAddToTodayButton = () => {
    const alreadyAdded = addToToday.some(
      (item) => item.id === library.id
    );

    if (alreadyAdded) {
      toast.error(`${library.name} is already in today's plan`);
      return;
    }

    setAddToToday([...addToToday, library]);

    toast.success(`${library.name} added to today's plan`);
  };

  return (
    <button
      className="flex cursor-pointer items-center gap-2 rounded-xl border-none bg-[#baff00] px-6 py-3 text-sm font-semibold leading-5 text-black hover:bg-[#a8e600]"
      onClick={handleAddToTodayButton}
    >
      <CalendarPlus />
      Add to today&apos;s plan
    </button>
  );
};

export default AddToTodayButton;