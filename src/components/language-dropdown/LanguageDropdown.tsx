import clsx from "clsx";
import { useState, useEffect, useRef, FC } from "react";
import { useTranslation } from "react-i18next";
import { FiChevronDown } from "react-icons/fi";

const languages = [
  { code: "en", label: "English" },
  { code: "ru", label: "Русский" },
];

type TLanguageDropdown = {
  isActive: boolean;
};

const LanguageDropdown: FC<TLanguageDropdown> = ({ isActive }) => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState<string>(
    () => localStorage.getItem("language") || i18n.language || "en"
  );
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    i18n.changeLanguage(selectedLang);
  }, [selectedLang, i18n]);

  const changeLanguage = (lng: string) => {
    setSelectedLang(lng);
    localStorage.setItem("language", lng);
    setIsOpen(false);
  };

  // Handle clicks outside of the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center justify-between m-0 p-0 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span
          className={clsx(
            isActive
              ? "text-black after:bg-gray-700"
              : "text-white after:bg-white"
          )}
        >
          {selectedLang === "en" ? "EN" : "RU"}
        </span>
        <FiChevronDown
          className={clsx(
            `w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`,
            isActive ? "text-black" : "text-white"
          )}
        />
      </button>

      {isOpen && (
        <ul className="absolute mt-1 bg-white border rounded-lg shadow-lg overflow-hidden z-10">
          {languages.map((lang) => (
            <li
              key={lang.code}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                selectedLang === lang.code ? "bg-gray-200" : ""
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="text-black text-sm font-medium">
                {lang.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
