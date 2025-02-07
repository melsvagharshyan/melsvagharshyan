import { IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const ArrowTop: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  function ArrowShow() {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", ArrowShow);
  }, []);

  return (
    <Link duration={500} smooth={true} to={"navbar"}>
      <IoIosArrowUp
        style={{ display: show ? "block" : "none" }}
        size={40}
        className="fixed bottom-[10%] right-[2.8%] bg-cyan-400 bg-opacity-10 text-deepskyblue rounded-md cursor-pointer z-10 shadow-cyan-600 shadow-sm transition-all duration-200 ease-in-out"
      />
    </Link>
  );
};

export default ArrowTop;
