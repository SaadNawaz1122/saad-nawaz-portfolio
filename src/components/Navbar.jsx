import { useState } from "react";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
  className="
  fixed
  top-0
  left-0
  w-full
  z-50
  bg-[#0B1120]/70
  backdrop-blur-xl
  border-b
  border-white/10
  text-white
  transition-all
  duration-300"
>
        <div
  className="
  max-w-7xl
  mx-auto
  h-20
  px-4
  sm:px-6
  lg:px-8
  flex
  items-center
  justify-between"
>
        <a
  href="#home"
  className="flex items-center gap-4 group"
>
  {/* Logo Circle */}
  <div
    className="
    w-12
    h-12
    rounded-2xl
    bg-gradient-to-br
    from-cyan-400
    via-blue-500
    to-purple-600
    flex
    items-center
    justify-center
    text-white
    font-black
    text-xl
    shadow-lg
    shadow-cyan-500/30
    group-hover:scale-110
    transition-all
    duration-300"
  >
    SN
  </div>

  {/* Name */}
  <div>

    <h1
      className="
      text-xl
      font-bold
      bg-gradient-to-r
      from-white
      to-cyan-300
      bg-clip-text
      text-transparent"
    >
      Saad Nawaz
    </h1>

    <p className="text-xs text-gray-400">
      AI Engineer
    </p>

  </div>
</a>
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="
                  relative
                  text-gray-300
                  hover:text-cyan-400
                  transition-all
                  duration-300
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-cyan-400
                  after:transition-all
                  after:duration-300
                  hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-xl">
            <a href="https://github.com/SaadNawaz1122" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400 cursor-pointer" />
            </a>

            <a href="https://www.linkedin.com/in/saad-nawaz-ab0309369/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            </a>
          </div>

          {/* Hamburger button - mobile & tablet only */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-2xl text-white p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 border-t border-white/10" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-2 bg-[#0B1120]/95">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-300 hover:text-cyan-400 transition-colors text-lg"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-6 pt-3 pb-1 text-xl border-t border-white/10 mt-2">
            <a href="https://github.com/SaadNawaz1122" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-cyan-400 cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/saad-nawaz-ab0309369/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;