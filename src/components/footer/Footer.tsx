import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      id="contact"
      className="bg-[#0e232b] p-20 md:p-10 flex flex-col md:flex-row justify-around w-full"
    >
      <div className="flex flex-col w-full max-w-md text-white space-y-8 mb-8 md:mb-0">
        <span className="text-silver text-sm">
          The Vagharshyan's blog is considered to be my author blog,
          <br />
          it aims to be a way of communication with various programmers.
        </span>
      </div>

      <div className="flex flex-col items-start space-y-4 mb-8 md:mb-0">
        <a
          href="https://www.facebook.com/mels.vagharshyan"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaFacebook size={20} />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mels-vagharshyan-522735227/"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaLinkedin size={20} />
          <span>Linkedin</span>
        </a>
        <a
          href="https://www.instagram.com/mels_vagharshyan/"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaInstagram size={20} />
          <span>Instagram</span>
        </a>
        <a
          href="https://github.com/melsvagharshyan"
          className="text-white flex items-center space-x-2 text-sm md:text-base"
          target="_blank"
        >
          <FaGithub size={20} />
          <span>GitHub</span>
        </a>
      </div>

      <div className="text-right text-white flex flex-col items-end">
        <div className="text-deepskyblue text-lg pb-4">Contact Me</div>
        <div className="flex flex-col items-end space-y-2">
          <a
            href="tel:+37494541615"
            className="text-white text-sm md:text-base"
          >
            +37494541615
          </a>
          <a
            href="tel:+37491991615"
            className="text-white text-sm md:text-base"
          >
            +37491991615
          </a>
          <hr className="h-[0.09px] bg-white w-full my-2" />
          <span className="text-white text-sm md:text-base">
            mels.vagharshyandev@gmail.com
          </span>
          <span className="text-white text-sm md:text-base">
            melsvagharshyan.github.io
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
