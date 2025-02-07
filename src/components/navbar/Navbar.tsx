import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { navLinks } from "./utils/constants";
import MyLogo from "~/assets/icons/script.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onScroll = () => {
    setActive(window.scrollY >= 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const linkStyle = (isActive: boolean) =>
    clsx(
      "font-mono cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full",
      isActive ? "text-black after:bg-gray-700" : "text-white after:bg-white"
    );

  return (
    <div
      className={clsx(
        "flex justify-between items-center px-6 md:px-20 py-3 fixed top-0 left-0 right-0 z-50",
        active
          ? "bg-gradient-to-r from-white to-cyan-200 shadow-md"
          : "bg-transparent"
      )}
    >
      <Link to="navbar" className="cursor-pointer">
        <img src={MyLogo} alt="Logo" width={50} height={50} />
      </Link>
      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map(({ title, href }) => (
          <Link
            key={title}
            to={href}
            duration={500}
            smooth={true}
            offset={50}
            className={linkStyle(active)}
          >
            {title.toUpperCase()}
          </Link>
        ))}
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <Menu size={30} />
      </button>
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-white to-cyan-200 flex flex-col items-center justify-center gap-6 transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <button
          className="absolute top-5 right-5 p-2 text-black "
          onClick={toggleMenu}
        >
          <X size={35} />
        </button>
        {navLinks.map(({ title, href }) => (
          <Link
            key={title}
            to={href}
            duration={500}
            smooth={true}
            offset={50}
            className="text-lg font-semibold text-gray-700"
            onClick={toggleMenu}
          >
            {title.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
