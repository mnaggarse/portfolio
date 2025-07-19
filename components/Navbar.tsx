"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full border-b z-50 ${
        isOpen ? "bg-white" : "bg-white/65 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between max-w-5xl px-6 py-4 mx-auto">
        <h1 className="text-3xl font-bold">M.Elnaggar</h1>

        <Menu
          size={30}
          className={`${isOpen ? "hidden" : "cursor-pointer md:hidden"}`}
          onClick={() => setIsOpen(!isOpen)}
        />

        <X
          size={30}
          className={`${isOpen ? "cursor-pointer md:hidden" : "hidden"}`}
          onClick={() => setIsOpen(!isOpen)}
        />

        {/* Desktop Menu */}
        <ul className="items-center justify-between hidden gap-4 md:flex">
          <li className="text-slate-700 font-medium cursor-pointer">Home</li>
          <li className="text-slate-700 font-medium cursor-pointer">About</li>
          <li className="text-slate-700 font-medium cursor-pointer">Skills</li>
          <li className="text-slate-700 font-medium cursor-pointer">
            Projects
          </li>
          <li className="text-slate-700 font-medium cursor-pointer">Contact</li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="w-full h-screen md:hidden fixed flex flex-col gap-8 px-14 py-14 top-17 border-y left-0 bg-white">
            <Link href="#home" onClick={() => setIsOpen(false)}>
              <li className="text-xl text-slate-700 font-medium p-2 hover:font-semibold cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="#about" onClick={() => setIsOpen(false)}>
              <li className="text-xl text-slate-700 font-medium p-2 hover:font-semibold cursor-pointer">
                About
              </li>
            </Link>
            <Link href="#skills" onClick={() => setIsOpen(false)}>
              <li className="text-xl text-slate-700 font-medium p-2 hover:font-semibold cursor-pointer">
                Skills
              </li>
            </Link>
            <Link href="#projects" onClick={() => setIsOpen(false)}>
              <li className="text-xl text-slate-700 font-medium p-2 hover:font-semibold cursor-pointer">
                Projects
              </li>
            </Link>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              <li className="text-xl text-slate-700 font-medium p-2 hover:font-semibold cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
}
