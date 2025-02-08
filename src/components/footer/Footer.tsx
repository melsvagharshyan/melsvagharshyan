import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import React from "react";
import { Link } from "react-scroll";
import MyLogo from "~/assets/icons/script.png";
import { useTranslation } from "react-i18next"; // Importing useTranslation

const Footer: React.FC = () => {
  const { t } = useTranslation(); // Using the t function to get translations

  return (
    <div
      id="contact"
      className="bg-[#0e232b] p-20 md:p-10 flex flex-col md:flex-row justify-around w-full"
    >
      <div className="flex flex-col w-full max-w-md text-white space-y-8 mb-8 md:mb-0">
        <Link to="navbar" className="cursor-pointer">
          <img src={MyLogo} alt="Logo" width={100} />
        </Link>
        <span className="text-silver text-sm">
          {t("footer.description")} {/* Translating the description */}
        </span>
      </div>

      <div className="flex flex-col items-start space-y-4 mb-8 md:mb-0">
        <a
          href="https://www.facebook.com/mels.vagharshyan"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaFacebook size={20} />
          <span>{t("footer.socials.facebook")}</span>{" "}
          {/* Translating Facebook */}
        </a>
        <a
          href="https://www.linkedin.com/in/mels-vagharshyan-522735227/"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaLinkedin size={20} />
          <span>{t("footer.socials.linkedin")}</span>{" "}
          {/* Translating LinkedIn */}
        </a>
        <a
          href="https://www.instagram.com/mels_vagharshyan/"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaInstagram size={20} />
          <span>{t("footer.socials.instagram")}</span>{" "}
          {/* Translating Instagram */}
        </a>
        <a
          href="https://github.com/melsvagharshyan"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaGithub size={20} />
          <span>{t("footer.socials.github")}</span> {/* Translating GitHub */}
        </a>
      </div>

      <div className="text-right text-white flex flex-col items-end">
        <div className="text-deepskyblue text-lg pb-4">
          {t("footer.contactMe")} {/* Translating "Contact Me" */}
        </div>
        <div className="flex flex-col items-end space-y-2">
          <a
            href="tel:+37494541615"
            className="text-white text-sm md:text-base"
          >
            {t("footer.phone1")} {/* Translating phone number 1 */}
          </a>
          <a
            href="tel:+37491991615"
            className="text-white text-sm md:text-base"
          >
            {t("footer.phone2")} {/* Translating phone number 2 */}
          </a>
          <hr className="h-[0.09px] bg-white w-full my-2" />
          <span className="text-white text-sm md:text-base">
            {t("footer.email")} {/* Translating email */}
          </span>
          <span className="text-white text-sm md:text-base">
            {t("footer.website")} {/* Translating website */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
