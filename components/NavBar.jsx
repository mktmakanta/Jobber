"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Check from "./Check";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) =>
    pathname === path
      ? "text-green-600  after:block after:absolute relative  after:h-0.5 after:w-full after:bg-green-600 after:top-10  "
      : "";
  const isActiveMobile = (path) => (pathname === path ? " bg-green-100 " : "");
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu
  };

  // to prevent background scroll when meu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="shadow-md  md:h-max p-3 md:px-5 z-30 sticky top-0 bg-slate-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" text-2xl font-semibold ">
          <div className="flex items-center justify-center gap-1 ">
            <Image
              src={"/images/logo.svg"}
              alt="jobber logo"
              quality={100}
              width={30}
              height={30}
            />
            <h1>Jobber</h1>
          </div>
        </Link>
        <div className="hidden md:flex space-x-8 text-slate-500 font-medium">
          <Link href="/" className={` ${isActive("/")}`}>
            Find Jobs
          </Link>
          <Link href="/findtalent" className={`  ${isActive("/findtalent")}`}>
            Find Talent
          </Link>
          <Link href="/uploadjob" className={`${isActive("/uploadjob")}`}>
            Upload Job
          </Link>
          <Link href="/aboutus" className={`${isActive("/aboutus")}`}>
            About Us
          </Link>
        </div>

        <div className="md:flex gap-2 hidden">
          <div className="size-8 rounded-full bg-slate-200 flex justify-center items-center">
            N
          </div>
          <div className="px-3  py-1 ring-1 ring-green-600 text-green-600 rounded-md hover:bg-green-100">
            <Check />
          </div>
        </div>
        <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className=" menu md:hidden h-screen w-2/3 flex justify-end absolute right-0 top-0 ">
          <div className="w-full shadow-lg bg-white flex flex-col justify-between h-full py-10">
            <div className=" text-xl px-5 space-y-3 bg-white flex flex-col">
              <Link
                onClick={handleLinkClick}
                href="/"
                className={`mobile-link px-4 py-2 rounded-md text-green-800 hover:ring-1 hover:ring-green-300 hover:bg-green-100/65 ${isActiveMobile(
                  "/"
                )}`}
              >
                Find Jobs
              </Link>
              <Link
                href="/findtalent"
                onClick={handleLinkClick}
                className={`mobile-link px-4 py-2 rounded-md text-green-800 hover:ring-1 hover:ring-green-300 hover:bg-green-100/65 ${isActiveMobile(
                  "/findtalent"
                )}`}
              >
                Find Talent
              </Link>
              <Link
                href="/uploadjob"
                onClick={handleLinkClick}
                className={`mobile-link px-4 py-2 rounded-md text-green-800 hover:ring-1 hover:ring-green-300 hover:bg-green-100/65 ${isActiveMobile(
                  "/uploadjob"
                )}`}
              >
                Upload Job
              </Link>
              <Link
                href="/aboutus"
                onClick={handleLinkClick}
                className={`mobile-link px-4 py-2 rounded-md text-green-800 hover:ring-1 hover:ring-green-300 hover:bg-green-100/65 ${isActiveMobile(
                  "/aboutus"
                )}`}
              >
                About Us
              </Link>
            </div>
            <div className=" text-xl space-y-5 bg-white flex flex-col px-5">
              <Link
                href="/"
                onClick={handleLinkClick}
                className="mobile-link px-4 py-2 rounded-md text-green-800 hover:ring-1 hover:ring-green-300 hover:bg-green-100/65 bg-green-100"
              >
                <Check />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
