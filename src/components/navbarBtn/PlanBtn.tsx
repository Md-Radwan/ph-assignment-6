"use client"

import { LibraryContext } from '@/context/LibraryContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanBtn = () => {
      const { addToToday } = useContext(LibraryContext) as { addToToday: { id: number }[] };
    return (
        <Link href="/myPlan" className="flex items-center gap-2 cursor-pointer">
            <span className="text-sm text-[#C7C9CE]">Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#CCFF00] px-2 text-xs font-bold text-[#0B0D0F]">
              {addToToday.length}
            </span>
        </Link>
    );
};

export default PlanBtn;