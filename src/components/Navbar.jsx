import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
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
  px-8
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
          <li>
  <a
    href="#home"
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
    Home
  </a>
</li>
          <li>
  <a
    href="#about"
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
    About
  </a>
</li>
          <li>
  <a
    href="#skills"
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
    Skills
  </a>
</li>
          <li>
  <a
    href="#projects"
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
    Projects
  </a>
</li>
          <li>
  <a
    href="#contact"
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
    Contact
  </a>
</li>
        </ul>

        <div className="flex items-center gap-4 text-xl">
          <a href="https://github.com/SaadNawaz1122" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-cyan-400 cursor-pointer" />
          </a>

          <a href="https://www.linkedin.com/in/saad-nawaz-ab0309369/" target="_blank" rel="noreferrer">
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;