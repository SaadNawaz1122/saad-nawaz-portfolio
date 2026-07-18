import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-[#020617] text-white border-t border-cyan-500/10 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      </div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20">

        {/* Name */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black">

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

              Saad Nawaz

            </span>

          </h2>

          <p className="mt-4 text-xl text-gray-300">

            AI Engineer • Machine Learning • React Developer

          </p>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-8">

            Building intelligent applications with Artificial Intelligence,
            modern web technologies and scalable software solutions.

          </p>

        </motion.div>

        {/* Divider */}

        <div className="w-full h-px bg-white/10 my-12"></div>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-8 text-gray-300">

          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>

          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>

          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>

        </div>

        {/* Social */}

        <div className="flex justify-center gap-6 mt-12">

          <a
            href="https://github.com/SaadNawaz1122"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
          >
            <FaGithub className="text-2xl" />
          </a>

          <a
            href="https://www.linkedin.com/in/saad-nawaz-ab0309369/"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
          >
            <FaLinkedin className="text-2xl" />
          </a>

          <a
            href="mailto:saadnawaz369@gmail.com"
            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
          >
            <FaEnvelope className="text-2xl" />
          </a>

        </div>

        {/* Copyright */}

        <div className="mt-14 text-center">

          <p className="text-gray-500">

            © 2026 Saad Nawaz. All Rights Reserved.

          </p>

          <p className="text-gray-600 mt-2">

            Designed & Developed with ❤️ using React, Tailwind CSS & Framer Motion

          </p>

        </div>

        {/* Back To Top */}

        <a
          href="#home"
          className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 transition flex items-center justify-center shadow-lg shadow-cyan-500/30"
        >
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;