import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCentercode } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import { SAIcon, USIcon } from "../icons";

export default function Navbar({ changeLanguage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <nav className="md:max-w-7xl md:left-1/2 md:-translate-x-1/2 w-full fixed top-0 left-0 flex justify-between items-center p-4 border-b-2 bg-[#f4f4f4] z-10 border-gray-200">
      <FaCentercode size={40} />

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between items-center gap-6">
        <a
          className="cursor-pointer border-b border-transparent duration-200 hover:border-black"
          href="#home"
        >
          {t("nav-home")}
        </a>
        <a
          className="cursor-pointer border-b border-transparent duration-200 hover:border-black"
          href="#about"
        >
          {t("nav-about")}
        </a>
        <a
          className="cursor-pointer border-b border-transparent duration-200 hover:border-black"
          href="#projects"
        >
          {t("nav-projects")}
        </a>
        <a
          className="cursor-pointer border-b border-transparent duration-200 hover:border-black"
          href="#contact"
        >
          {t("nav-contact")}
        </a>
      </div>

      <button
        onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
        className="hidden md:block cursor-pointer"
      >
        {i18n.language === "en" ? <SAIcon /> : <USIcon />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`w-full h-screen flex flex-col pt-40 px-12 space-y-8
  bg-[#f4f4f4] fixed top-0 left-0 z-50
  transition-all duration-300 ease-in-out
  ${
    isMenuOpen
      ? "opacity-100 visible pointer-events-auto"
      : "opacity-0 invisible pointer-events-none"
  }`}
      >
        <IoClose
          size={40}
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8"
        />

        <a
          className="cursor-pointer text-3xl font-medium border-b border-transparent duration-200 hover:border-black"
          href="#home"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("nav-home")}
        </a>
        <a
          className="cursor-pointer text-3xl font-medium border-b border-transparent duration-200 hover:border-black"
          href="#about"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("nav-about")}
        </a>
        <a
          className="cursor-pointer text-3xl font-medium border-b border-transparent duration-200 hover:border-black"
          href="#projects"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("nav-projects")}
        </a>
        <a
          className="cursor-pointer text-3xl font-medium border-b border-transparent duration-200 hover:border-black"
          href="#contact"
          onClick={() => setIsMenuOpen(false)}
        >
          {t("nav-contact")}
        </a>
      </div>

      <div className="md:hidden flex justify-between items-center gap-8">
        <button
          onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
          className="cursor-pointer"
        >
          {i18n.language === "en" ? <SAIcon /> : <USIcon />}
        </button>

        <IoMenu size={40} onClick={() => setIsMenuOpen(true)} />
      </div>
    </nav>
  );
}
