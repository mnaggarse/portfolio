import { useTranslation } from "react-i18next";
import { IoMail } from "react-icons/io5";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 md:flex justify-between items-center gap-12">
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold">{t("greeting")}</h1>
        <p className="text-2xl md:text-4xl font-medium text-gray-500 max-w-4xl">
          {t("description")}
        </p>
        <button className="bg-black flex items-center gap-4 cursor-pointer text-white px-6 py-4 rounded-full font-medium hover:scale-105 active:scale-95 duration-75">
          <IoMail className="text-2xl md:text-3xl" />
          <span className="text-xl md:text-2xl">{t("contact me button")}</span>
        </button>
      </div>

      <div className="w-[512px] h-[512px] rounded-full overflow-hidden shadow-xl border border-gray-200">
        <img src="./images/man.png" alt="personal-photo" />
      </div>
    </div>
  );
}
