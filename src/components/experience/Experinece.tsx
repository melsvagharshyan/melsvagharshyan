import { motion } from "framer-motion";
import { experiences } from "./utils/constants";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1140px)" });

  return (
    <section
      id="experience"
      className="w-full bg-gradient-to-r from-white to-cyan-200 py-20"
    >
      <div className="flex flex-col items-center py-16 px-6 md:px-12">
        <h2 className="text-gray-900 font-sans font-semibold text-4xl mb-6">
          Work Experience
        </h2>
        {experiences.map((experience, index) =>
          isMobile ? (
            <div
              key={index}
              className="bg-white shadow-lg rounded-3xl p-6 mb-6 w-full max-w-4xl"
            >
              <h3 className="text-cyan-700 font-sans font-bold text-xl">
                {experience.company}
              </h3>
              <p className="text-gray-800 font-semibold">{experience.role}</p>
              <p className="text-gray-500">{experience.duration}</p>
              <p className="text-gray-700 mt-2">{experience.description}</p>
            </div>
          ) : (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white shadow-lg rounded-3xl p-6 mb-6 w-full max-w-4xl"
            >
              <h3 className="text-cyan-700 font-sans font-bold text-xl">
                {experience.company}
              </h3>
              <p className="text-gray-800 font-semibold">{experience.role}</p>
              <p className="text-gray-500">{experience.duration}</p>
              <p className="text-gray-700 mt-2">{experience.description}</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Experience;
