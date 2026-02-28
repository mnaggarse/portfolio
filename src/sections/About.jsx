import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div id="about" className="scroll-m-24 mb-24">
      <h1 className="text-4xl md:text-6xl font-semibold mb-6">
        {t("about-title")}
      </h1>
      <div className="space-y-4">
        <p className="text-lg md:text-2xl text-gray-600">
          {t("about-paragraph-1")}
        </p>
        <p className="text-lg md:text-2xl text-gray-600">
          {t("about-paragraph-2")}
        </p>
        <p className="text-lg md:text-2xl text-gray-600">
          {t("about-paragraph-3")}
        </p>
      </div>
    </div>
  );
}
