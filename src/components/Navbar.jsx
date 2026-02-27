import { useTranslation } from "react-i18next";
import { IoLogoOctocat } from "react-icons/io";
import { USIcon, SAIcon } from "../icons";

export default function Navbar({ changeLanguage }) {
  const { i18n, t } = useTranslation();

  return (
    <nav className="flex justify-between items-center">
      <IoLogoOctocat size={32} />

      <div className="flex justify-between items-center gap-6">
        <a href="#home">{t("home")}</a>
        <a href="#about">{t("about")}</a>
        <a href="#contact">{t("contact")}</a>
      </div>

      <button
        onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
        className="cursor-pointer"
      >
        {i18n.language === "en" ? <SAIcon /> : <USIcon />}
      </button>
    </nav>
  );
}
