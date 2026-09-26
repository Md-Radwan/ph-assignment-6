import React from "react";
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#222630] mt-10 ">
      <div className="container mx-auto py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={logo} width={20} height={20} alt="logo" />
          <h3 className="font-bold leading-5 text-sm">FITLOG</h3>
        </div>
        <div>
          <h3 className="text-[#8A92A0]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
