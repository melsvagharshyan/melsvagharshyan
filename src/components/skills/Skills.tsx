import { useMemo } from "react";
import Slider from "react-slick";
import { skills } from "./utils/constants";
import { useMediaQuery } from "react-responsive";

const Skills = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1140px)" });
  const skillsSlider = useMemo(() => skills, []);

  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: isMobile ? 1 : 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      appendDots: (dots: React.ReactNode) => (
        <div className="mt-6">
          <ul className="flex justify-center gap-2">{dots}</ul>
        </div>
      ),
    }),
    []
  );

  return (
    <div className="w-full  bg-gradient-to-r from-white to-cyan-200 flex justify-center items-center">
      <div className="w-2/4">
        {/* <h2 className="text-xl text-center mb-4">My Frontend Skills</h2> */}
        <Slider {...sliderSettings} className="flex">
          {skillsSlider.map((skill) => (
            <div key={skill.title}>
              <div className="flex justify-center items-center">
                <img
                  src={skill.icon}
                  alt={skill.title}
                  className="w-24 h-24 object-contain transition-transform duration-300  rounded-2xl"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;
