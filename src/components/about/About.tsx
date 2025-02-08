import { motion } from "framer-motion";
import MelsImage from "~/assets/images/mels.jpg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(); // Using the t function to get translations
  const isMobile = useMediaQuery({ query: "(max-width: 1140px)" });

  return (
    <section
      id="about"
      className="w-full flex justify-center bg-gradient-to-r from-white to-cyan-200 py-20"
    >
      <div className="flex flex-col md:flex-row items-center py-16 px-6 md:px-12">
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-cover bg-center w-60 h-60 rounded-full hidden sm:block"
            style={{ backgroundImage: `url(${MelsImage})` }}
          ></motion.div>
        ) : (
          <div
            className="bg-cover bg-center w-60 h-60 rounded-full sm:hidden"
            style={{ backgroundImage: `url(${MelsImage})` }}
          ></div>
        )}
        <div
          className={`md:ml-8 text-center md:text-left ${
            isMobile ? "" : "motion-safe"
          }`}
        >
          {!isMobile ? (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="md:ml-8 text-center md:text-left"
            >
              <h2 className="text-gray-900 font-sans font-semibold text-4xl mb-4">
                {t("about.title")}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
                {t("about.intro")}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-4">
                {t("about.work")}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-4">
                {t("about.skilled_in")}
                <span className="font-semibold">{t("about.skills")}</span>
              </p>
              <Link to="contact" className="cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 cursor-pointer px-8 py-4 text-xl font-bold text-gray-800 border-2 border-gray-800 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-cyan-200 hover:to-white hover:text-gray-800 "
                >
                  {t("about.contact_button")}
                </motion.button>
              </Link>
            </motion.div>
          ) : (
            <div>
              <h2 className="text-gray-900 font-sans font-semibold text-4xl mb-4">
                {t("about.title")}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
                {t("about.intro")}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-4">
                {t("about.work")}
              </p>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-4">
                {t("about.skilled_in")}
                <span className="font-semibold">{t("about.skills")}</span>
              </p>
              <Link to="contact" className="cursor-pointer">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-12 cursor-pointer px-8 py-4 text-xl font-bold text-gray-800 border-2 border-gray-800 rounded-full shadow-xl hover:bg-gradient-to-r hover:from-cyan-200 hover:to-white hover:text-gray-800 "
                >
                  {t("about.contact_button")}
                </motion.button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
