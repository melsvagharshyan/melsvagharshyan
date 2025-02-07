import { motion } from "framer-motion";
import MelsImage from "~/assets/images/mels.jpg";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1140px)" });

  return (
    <section
      id="about"
      className="w-full flex justify-center bg-gradient-to-r from-white to-cyan-200 py-20"
    >
      <div className="flex flex-col md:flex-row items-center py-16 px-6 md:px-12">
        {/* Image container with animation on larger screens only */}
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

        {/* Content text with conditional animation */}
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
              className="text-gray-900 font-sans font-semibold text-4xl mb-4"
            >
              Software Developer
            </motion.div>
          ) : (
            <div className="text-gray-900 font-sans font-semibold text-4xl mb-4">
              Software Developer
            </div>
          )}

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Experienced Frontend Engineer with a strong background in building
            responsive, scalable, and user-centric web applications. I
            specialize in modern JavaScript frameworks such as React.js and
            Redux, with deep expertise in crafting complex UIs, optimizing
            performance, and ensuring cross-browser compatibility.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-4">
            My work involves translating designs into efficient, reusable code,
            collaborating closely with backend teams, and focusing on seamless
            user experiences. I consistently apply best practices in UI/UX
            development, accessibility, and performance optimization.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mt-4">
            Skilled in:{" "}
            <span className="font-semibold">
              React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, SASS,
              Tailwind CSS, REST APIs, WebSocket, Git, Docker.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
