import { motion } from "framer-motion";
import Navbar from "../navbar/Navbar";
import HeaderCover from "~/assets/images/header.jpeg";
import { useMediaQuery } from "react-responsive";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: i * 0.3 },
  }),
};

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1140px)" });
  return (
    <div
      id="navbar"
      className="w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${HeaderCover})` }}
    >
      <Navbar />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="flex flex-col gap-9 py-28 text-3xl"
      >
        {[
          "Discipline is the bridge between goals and achievement.",
          "Success is built on consistency, not just effort.",
          "Stay disciplined, stay focused – success will follow.",
        ].map((text, i) => (
          <motion.h1
            key={i}
            custom={i}
            variants={textVariants}
            className={
              isMobile
                ? ""
                : `text-white ${i === 0 ? "ml-4" : i === 1 ? "ml-40" : "ml-80"}`
            }
            style={{
              textShadow: "white 0 0 20px",
              textAlign: isMobile ? "center" : "start",
            }}
          >
            {text}
          </motion.h1>
        ))}
      </motion.div>
    </div>
  );
};

export default Header;
