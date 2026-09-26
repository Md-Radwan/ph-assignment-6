"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from '@/assets/logo.png'
import PlanBtn from "../navbarBtn/PlanBtn";
import SaveBtn from "../navbarBtn/SaveBtn";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  return (
    <header className="border-b border-[#1C1F26]">
      <div className="mx-auto flex h-20 container items-center justify-between px-5 lg:px-0">
        {/* ================= LEFT - LOGO ================= */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
          >
            {/* Logo Icon */}
            <Image src={logo} alt="logo image"></Image>

            <span className="text-[20px] font-extrabold tracking-wide text-white">
              FITLOG
            </span>
          </Link>
        </div>

        {/* ================= CENTER NAVIGATION ================= */}
        <nav className="hidden items-center gap-2 lg:flex">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              isActive("/")
                ? "bg-[#19240F] text-[#CCFF00]"
                : "text-[#969AA3] hover:bg-[#14171B] hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/myPlan"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              isActive("/myPlan")
                ? "bg-[#19240F] text-[#CCFF00]"
                : "text-[#969AA3] hover:bg-[#14171B] hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-5">
          {/* Plan */}
          <PlanBtn/>

          {/* Saved */}
          <SaveBtn/>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className="lg:hidden">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#292D34] bg-[#111418] text-white"
              aria-label="Open navigation menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-48 rounded-xl border border-[#252930] bg-[#111418] p-2 shadow-xl"
            >
              <li>
                <Link
                  href="/"
                  className={
                    isActive("/") ? "bg-[#19240F] text-[#CCFF00]" : ""
                  }
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/myPlan"
                  className={
                    isActive("/myPlan")
                      ? "bg-[#19240F] text-[#CCFF00]"
                      : ""
                  }
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;