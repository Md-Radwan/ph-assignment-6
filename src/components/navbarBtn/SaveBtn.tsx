"use client"

import { LibraryContext } from "@/context/LibraryContext";
import Link from "next/link";
import React, { useContext } from "react";

const SaveBtn = () => {
  const {saveForLater } = useContext(LibraryContext) as { saveForLater: { id: number }[] };
  return (
    <Link href="/myPlan" className="flex items-center gap-2">
      <span className="text-sm text-[#969AA3]">Saved</span>

      <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#3A3E46] px-2 text-xs text-[#A7ABB4]">
        {saveForLater.length}
      </span>
    </Link>
  );
};

export default SaveBtn;
