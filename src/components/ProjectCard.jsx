import { useTranslation } from "react-i18next";
import { HiExternalLink } from "react-icons/hi";

export default function ProjectCard({
  title,
  description,
  image,
  link,
  reverse,
}) {
  const { t } = useTranslation();
  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Image */}
      <div>
        <img
          src={image}
          alt={title}
          className={`w-full h-[200px] md:h-[400px] object-cover rounded-2xl shadow-lg hover:scale-105 duration-200 ${reverse ? "hover:rotate-4" : "hover:-rotate-4"}`}
        />
      </div>

      {/* Text */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6">{title}</h2>
        <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-3 md:mb-6">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          className="text-white bg-black px-6 py-2 rounded-full text-md md:text-xl font-medium inline-flex items-center gap-2 hover:scale-105 active:scale-95 duration-75"
        >
          {t("project-preview")}
          <HiExternalLink />
        </a>
      </div>
    </div>
  );
}
