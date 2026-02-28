import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

export default function App() {
  const { i18n } = useTranslation();
  const [isSwitching, setIsSwitching] = useState(false);

  const changeLanguage = async (lang) => {
    if (lang === i18n.language) return;

    setIsSwitching(true);

    setTimeout(async () => {
      await i18n.changeLanguage(lang);
      setIsSwitching(false);
    }, 200);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="px-4 md:px-12 xl:px-0 max-w-7xl mx-auto pb-12">
      <Navbar changeLanguage={changeLanguage} />

      <div
        className={`transition-opacity duration-200 ${isSwitching ? "opacity-0" : "opacity-100"}`}
      >
        <Home />
        <About />
        <Projects />
      </div>
    </div>
  );
}
