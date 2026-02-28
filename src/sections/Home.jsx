import { useTranslation } from "react-i18next";
import { IoMail } from "react-icons/io5";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div
      id="home"
      className="md:min-h-screen pt-24 mb-24 md:mb-0 md:flex justify-between items-center gap-24 relative scroll-m-24"
    >
      {/* Mobile Image */}
      <div className="md:hidden w-[200px] h-[200px] mx-auto pt-4 rounded-full overflow-hidden border border-gray-200 shadow-lg mb-8">
        <img
          className="object-cover"
          src="/images/man.png"
          alt="personal-photo"
        />
      </div>

      <div className="space-y-4 md:space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold leading-15">
          {t("home-title")}
        </h1>
        <p className="text-2xl md:text-4xl font-medium text-gray-500 max-w-4xl">
          {t("home-description")}
        </p>
        <button className="bg-black flex items-center gap-4 cursor-pointer text-white px-8 py-4 rounded-full font-medium hover:scale-105 active:scale-95 duration-75">
          <IoMail className="text-2xl md:text-3xl" />
          <span className="text-xl md:text-2xl">{t("home-contact")}</span>
        </button>
      </div>

      {/* Desktop Image */}
      <div className="w-1/3 hidden md:block overflow-hidden">
        <img
          className="object-cover"
          src="/images/man.png"
          alt="personal-photo"
        />
      </div>
    </div>
  );
}
