import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pt-12 pb-16 px-3 md:px-0">
      <div className="container mx-auto rounded-2xl bg-[#15171D] border border-[#222630] flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center p-8 md:p-10 lg:p-14">
        <div>
          <h4 className="uppercase font-bold text-[11px] leading-4 tracking-[1.1px] text-[#C2F800] text-center md:text-left">
            Workout library
          </h4>
          <h1 className="my-5.25 w-auto md:max-w-150 font-extrabold text-[32px] md:text-[60px] md:leading-15 text-center md:text-left">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-[#9CA3AF] text-[16px] text-center md:text-left leading-6 w-auto md:max-w-120">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <div className="flex justify-center md:justify-normal">
              <Link href={'/library'}>
                   <button className="uppercase font-bold text-[12px] leading-4 text-black py-3 px-6 bg-[#C2F800] rounded-md mt-7 cursor-pointer">
                browse workouts
              </button>
              </Link>
          </div>
        </div>
        <div>
          <Image src={bannerImg} alt="Banner Image"></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
