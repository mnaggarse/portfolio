import { useTranslation } from "react-i18next";

export default function ProjectCard({ title, description, image, reverse }) {
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
          className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* Text */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6">{title}</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-3 md:mb-6">
          {description}
        </p>
        <a
          href="#"
          className="text-blue-600 font-medium hover:underline inline-flex items-center gap-2"
        >
          {t("project-get-in-touch")}
        </a>
      </div>
    </div>
  );
}
