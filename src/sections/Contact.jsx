import { useState } from "react";
import { useTranslation } from "react-i18next";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = encodeURIComponent(subject);
    const body = encodeURIComponent(message);

    const mailtoLink = `mailto:mnaggarse@gmail.com?subject=${title}&body=${body}`;

    window.location.href = mailtoLink;
  };

  return (
    <div id="contact" className="w-full h-screen flex items-center">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-semibold mb-8">
          {t("contact-title")}
        </h1>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("contact-name-placeholder")}
            className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-lg md:text-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-gray-400 focus:border-transparent transition-all"
          />
          <input
            type="text"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder={t("contact-subject-placeholder")}
            className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-lg md:text-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-gray-400 focus:border-transparent transition-all"
          />
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={t("contact-message-placeholder")}
            className="w-full bg-white border border-gray-200 rounded-2xl px-6 py-4 text-lg md:text-xl shadow-sm focus:outline-none focus:ring-3 focus:ring-gray-400 focus:border-transparent transition-all resize-none h-48"
          ></textarea>
          <button
            type="submit"
            className="w-full cursor-pointer bg-black text-white px-8 py-3 rounded-full text-md md:text-xl font-medium inline-flex items-center justify-center gap-4 active:scale-95 duration-75"
          >
            <IoMail className="text-xl md:text-2xl" />
            {t("contact-send")}
          </button>
        </form>

        <div className="mt-12 mb-8 relative">
          <hr className="border-2 border-gray-200" />
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f4f4f4] px-4 text-gray-400">
            {t("contact-social-media")}
          </p>
        </div>

        <div className="flex justify-evenly items-center gap-2">
          <a
            href="#"
            className="text-gray-400 hover:text-black hover:-translate-y-1 transition-all"
          >
            <FaFacebook className="text-3xl md:text-4xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black hover:-translate-y-1 transition-all"
          >
            <FaLinkedin className="text-3xl md:text-4xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black hover:-translate-y-1 transition-all"
          >
            <FaGithub className="text-3xl md:text-4xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black hover:-translate-y-1 transition-all"
          >
            <FaTelegram className="text-3xl md:text-4xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black hover:-translate-y-1 transition-all"
          >
            <IoLogoWhatsapp className="text-3xl md:text-4xl" />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-black hover:-translate-y-1 transition-all"
          >
            <BiLogoGmail className="text-3xl md:text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
