import React, { useRef } from "react";
import { RiChatSmileAiLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const Consultation: React.FC = () => {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);

  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className="pb-24 px-4 w-full bg-gradient-to-r from-white to-cyan-200 text-center"
      id="consultation"
    >
      <form
        ref={form}
        onSubmit={onSend}
        className="p-10 backdrop-blur-lg text-center rounded-2xl max-w-2xl flex flex-col gap-6 mx-auto "
      >
        <div className="flex justify-center gap-3">
          <h2 className="text-gray-900 font-sans font-semibold text-4xl mb-6">
            {t("consultation.title")}
          </h2>
          <RiChatSmileAiLine size={40} className="text-cyan-400" />
        </div>

        <input
          type="text"
          name="name"
          placeholder={t("consultation.namePlaceholder")}
          required
          className="w-full text-gray-500 px-6 py-4 bg-white/60 border border-gray-300 rounded-full outline-none focus:ring-1 focus:ring-cyan-400 shadow-sm placeholder-gray-500"
        />

        <input
          type="email"
          name="email"
          placeholder={t("consultation.emailPlaceholder")}
          required
          className="text-gray-500 w-full px-6 py-4 bg-white/60 border border-gray-300 rounded-full outline-none focus:ring-1 focus:ring-cyan-400 shadow-sm placeholder-gray-500"
        />
        <input
          type="phone"
          name="phone"
          placeholder={t("consultation.phonePlaceholder")}
          required
          className="text-gray-500 w-full px-6 py-4 bg-white/60 border border-gray-300 rounded-full outline-none focus:ring-1 focus:ring-cyan-400 shadow-sm placeholder-gray-500"
        />
        <button
          type="submit"
          className="cursor-pointer text-lg px-6 py-4 text-white font-semibold bg-gradient-to-r from-cyan-200 to-cyan-500 rounded-full shadow-lg hover:shadow-2xl  transition-all duration-300"
        >
          {t("consultation.buttonText")}
        </button>
      </form>
    </div>
  );
};

export default Consultation;
