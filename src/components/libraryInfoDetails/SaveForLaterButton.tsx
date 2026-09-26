"use client";

import { LibraryContext } from "@/context/LibraryContext";
import { Ilibrary } from "@/types/library.type";
import { Bookmark} from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ library }: { library: Ilibrary }) => {

  const { saveForLater, setSaveForLater } = useContext(LibraryContext) as {
    saveForLater: Ilibrary[];
    setSaveForLater: React.Dispatch<React.SetStateAction<Ilibrary[]>>;
  };
  
  const handleSaveForLaterButton = () => {
  const alreadySaved = saveForLater.some(
    (item) => item.id === library.id
  );

  if (alreadySaved) {
    toast.error(`${library.name} is already in save for later`);
    return;
  }

  setSaveForLater([...saveForLater, library]);
  toast.success(`${library.name} added to save for later`);
};
  return (
    <button className="flex items-center gap-2 px-6 py-3 border-gray-700 text-gray-300 text-sm font-semibold leading-5 hover:bg-transparent rounded-xl cursor-pointer outline outline-[#374151]" onClick={() => handleSaveForLaterButton()}>
      <Bookmark />
      Save for later
    </button>
  );
};

export default SaveForLaterButton;
