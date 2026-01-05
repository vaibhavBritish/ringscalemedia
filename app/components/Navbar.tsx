"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const industries = [
    "B2b-Marketing",
    "Education",
    "Automotive",
    "Healthcare",
    "Homeservice",
    "Immigration",
    "Plumbing",
    "Dental",
    "Medspa",
    "Real-Estate",
    "Ecommerce",
  ];
  return (
    <header className="bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">


        <Link href={"/"}><Image src="/RingLogo.png" alt="Ring Scale" width={200} height={100} className="h-20 w-36" /></Link>


        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul
          className={`lg:flex items-center gap-8 font-medium absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent px-6 lg:px-0 py-6 lg:py-0 border-t lg:border-0 ${menuOpen ? "block" : "hidden lg:flex"
            }`}
        >
          <Link href={"/"}><li className="border-b  border-pink-600">Home</li></Link>


          <li className="relative">

            <button
              className="cursor-pointer"
              onMouseEnter={() => setMegaOpen(true)}
              onClick={() => setMegaOpen(!megaOpen)}
            >
              What We Do
            </button>

            {megaOpen && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full w-screen max-w-[980px]
                           bg-white border-t .border-gray-200 border-b-4 border-black shadow-lg"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-10 px-8">


                  <div className="md:border-r border-gray-200 pr-3">
                    <h4 className="font-semibold mb-3">Mobile Apps Development</h4>
                    <img src="/icons/mobile.png" className="h-10 mb-3" />
                    <Link href={"/what-we-do/iphone-ipad-development"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">iPhone / iPad App Development</p></Link>

                    <Link href={"/what-we-do/android-app-development"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Android App Development</p></Link>

                    <Link href={"/what-we-do/html-mobile-app-development"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">HTML 5 Mobile App Development</p></Link>

                    <Link href={"/what-we-do/cross-platform-app-development"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Cross Platform App Development</p></Link>
                  </div>

                  <div className="md:border-r border-gray-200 pr-3">
                    <h4 className="font-semibold mb-3">Web Design</h4>
                    <img src="/icons/development.png" className="h-10 mb-3" />
                    <Link href={"/what-we-do/logo-design"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Logo Design</p></Link>

                    <Link href={"/what-we-do/static-website-design"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Static Website Design</p></Link>

                    <Link href={"/what-we-do/responsive-web-design"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Responsive Website Design</p></Link>
                  </div>

                  <div className="md:border-r border-gray-200 pr-3">
                    <h4 className="font-semibold mb-3">Web Development</h4>
                    <img src="/icons/dev.png" className="h-10 mb-3" />
                    <Link href={"/what-we-do/content-management-system"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Content Management System</p></Link>
                    <Link href={"/what-we-do/e-commerce-development"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">E-Commerce Development</p></Link>

                    <Link href={"/what-we-do/web-portal"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Portal Development</p></Link>

                    <Link href={"/what-we-do/website-maintenance"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Website Maintenance</p></Link>

                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Internet Marketing</h4>
                    <img src="/icons/sem.png" className="h-10 mb-3" />
                    <Link href={"/what-we-do/search-engine-optimization"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Search Engine Optimization</p></Link>

                    <Link href={"/what-we-do/pay-per-click"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Pay Per Click</p></Link>

                    <Link href={"/what-we-do/reputation-management"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Reputation Management</p></Link>

                    <Link href={"/what-we-do/social-media-management"}><p className="cursor-pointer px-1 border-b rounded-lg py-2">Social Solutions Marketing</p></Link>
                  </div>

                </div>
              </div>
            )}
          </li>

          <Link href={"/who-we-are"}><li>Who We Are</li></Link>
          <Link href={"/our-work"}><li>Our Work</li></Link>
          <li
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            {/* Trigger */}
            <button
              className="flex items-center gap-1 font-medium hover:text-blue-600 transition"
              onClick={() => setOpen(!open)}
            >
              Industries

            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 mt-3 w-auto bg-white rounded-2xl shadow-2xl border z-50 p-2"
                >
                  {industries.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/industry/${item
                          .toLowerCase()
                          }`}
                        className="group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-600"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {item}
                        </span>

                       
                        <span className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-blue-500">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

          </li>

          <Link href={"/contact"}><li className="bg-pink-600 text-white px-4 py-2 rounded-md w-fit">
            Get In Touch
          </li></Link>
        </ul>
      </div >
    </header >
  );
};

export default Navbar;