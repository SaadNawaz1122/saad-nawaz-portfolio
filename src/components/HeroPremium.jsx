import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import profile from "../assets/images/profilepic.png";

import {
  FaPython,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiFlask,
  SiMysql,
} from "react-icons/si";

function HeroPremium() {
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});

useEffect(() => {
  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
    >
   {/* Mouse Glow */}
  <motion.div
    animate={{
      x: mousePosition.x - 180,
      y: mousePosition.y - 180,
    }}
    transition={{
      type: "spring",
      stiffness: 120,
      damping: 20,
    }}
    className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-cyan-400/30 blur-[120px] pointer-events-none z-10"
  />
      {/* Background */}
       <div className="absolute inset-0">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[180px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-500/20 blur-[180px] animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-pink-500/10 blur-[160px]"></div>

      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-screen flex items-center px-5 sm:px-6 lg:px-8 py-28 lg:py-0">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

  {/* Left Side */}

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
  >

    {/* AI Badge */}

    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-xl">

      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>

      <span className="text-cyan-300 font-medium text-sm">
        AI Student • React Developer • Python
      </span>

    </div>

    {/* Hello */}

    <p className="text-cyan-400 text-xl mt-10">
      👋 Hii, I'm
    </p>

    {/* Name */}

    <h1 className="mt-4 text-4xl sm:text-5xl lg:text-7xl font-black leading-tight">

      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

        Saad Nawaz

      </span>

    </h1>

    {/* Typing */}

    <div className="mt-8 min-h-[70px] text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-300">

      <TypeAnimation
        sequence={[
          "Artificial Intelligence Student",
          2000,
          "Machine Learning Enthusiast",
          2000,
          "React Frontend Developer",
          2000,
          "Future AI Engineer",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />

    </div>

    {/* Description */}

    <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">

      Passionate about Artificial Intelligence, Machine Learning,
      React and Python. I enjoy building intelligent software,
      modern web applications and creating innovative AI-powered
      solutions that solve real-world problems.

    </p>
    {/* Action Buttons */}

<div className="flex flex-wrap gap-5 mt-10">

  {/* Download CV */}

  <motion.a
    href="/Saad_Nawaz_CV.pdf"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/60 transition-all duration-300"
  >
    <div className="flex flex-wrap gap-4">

  {/* View CV */}

  <a
    href="/Saad_Nawaz_CV.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="
      px-6
      sm:px-8
      py-3.5
      sm:py-4
      rounded-2xl
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      text-white
      font-semibold
      shadow-lg
      shadow-cyan-500/30
      hover:scale-105
      transition-all
      duration-300
    "
  >
    📄 View CV
  </a>

  {/* Download CV */}

  <a
    href="/Saad_Nawaz_CV.pdf"
    download
    className="
      px-6
      sm:px-8
      py-3.5
      sm:py-4
      rounded-2xl
      border
      border-cyan-400
      text-cyan-400
      font-semibold
      hover:bg-cyan-500/10
      hover:scale-105
      transition-all
      duration-300
    "
  >
    ⬇️ Download CV
  </a>

</div>
  </motion.a>

  {/* Hire Me */}

  <motion.a
    href="#contact"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-cyan-400 text-cyan-300 font-semibold backdrop-blur-xl bg-white/5 hover:bg-cyan-500/10 transition-all duration-300"
  >
    💼 Hire Me
  </motion.a>

</div>
{/* Tech Stack */}

<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 max-w-2xl">

  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition"
  >
    <FaPython className="text-3xl text-yellow-400" />
    <span className="font-medium">Python</span>
  </motion.div>

  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition"
  >
    <FaReact className="text-3xl text-cyan-400" />
    <span className="font-medium">React</span>
  </motion.div>

  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition"
  >
    <SiTensorflow className="text-3xl text-orange-400" />
    <span className="font-medium">AI / ML</span>
  </motion.div>

  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition"
  >
    <SiFlask className="text-3xl text-gray-200" />
    <span className="font-medium">Flask</span>
  </motion.div>

  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition"
  >
    <FaGitAlt className="text-3xl text-red-500" />
    <span className="font-medium">Git</span>
  </motion.div>

  <motion.div
    whileHover={{ y: -6, scale: 1.03 }}
    className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-cyan-400 transition"
  >
    <SiMysql className="text-3xl text-blue-400" />
    <span className="font-medium">SQL</span>
  </motion.div>

</div>
{/* Statistics */}

<div className="grid grid-cols-3 gap-3 sm:gap-5 mt-12 max-w-2xl">

  {/* Projects */}

  <motion.div
    whileHover={{ y: -8 }}
    className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-3 sm:p-6 text-center"
  >

    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
    <div className="absolute top-2 right-2 sm:top-5 sm:right-5 text-cyan-400 text-base sm:text-2xl">
  🚀
</div>
   <h3 className="relative text-2xl sm:text-4xl lg:text-5xl font-black text-cyan-400">
  <CountUp end={10} duration={2}/>
  +
</h3>

<h4 className="relative mt-2 sm:mt-4 text-xs sm:text-lg font-semibold text-white">
  Completed Projects
</h4>

<p className="relative mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-400 leading-4 sm:leading-6 hidden sm:block">
  AI, React, Flask & Python applications
</p>

  </motion.div>

  {/* Learning */}

  <motion.div
    whileHover={{ y: -8 }}
    className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-white/5 backdrop-blur-xl p-3 sm:p-6 text-center"
  >

    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
    <div className="absolute top-2 right-2 sm:top-5 sm:right-5 text-purple-400 text-base sm:text-2xl">
  🧠
</div>
    <h3 className="relative text-2xl sm:text-4xl lg:text-5xl font-black text-purple-400">
  <CountUp end={3} duration={2}/>
  +
</h3>

<h4 className="relative mt-2 sm:mt-4 text-xs sm:text-lg font-semibold text-white">
  AI Journey
</h4>

<p className="relative mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-400 leading-4 sm:leading-6 hidden sm:block">
  Continuous learning in AI & Software Engineering
</p>

  </motion.div>

  {/* Technologies */}

  <motion.div
    whileHover={{ y: -8 }}
    className="relative overflow-hidden rounded-2xl border border-pink-500/20 bg-white/5 backdrop-blur-xl p-3 sm:p-6 text-center"
  >

    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-transparent"></div>
    <div className="absolute top-2 right-2 sm:top-5 sm:right-5 text-pink-400 text-base sm:text-2xl">
  ⚡
</div>
    <h3 className="relative text-2xl sm:text-4xl lg:text-5xl font-black text-pink-400">
  <CountUp end={12} duration={2}/>
  +
</h3>

<h4 className="relative mt-2 sm:mt-4 text-xs sm:text-lg font-semibold text-white">
  Core Technologies
</h4>

<p className="relative mt-1 sm:mt-2 text-[11px] sm:text-sm text-gray-400 leading-4 sm:leading-6 hidden sm:block">
  Building modern AI & Full Stack solutions
</p>

  </motion.div>

</div>

  </motion.div>

 {/* ================= Right Side ================= */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="flex justify-center lg:justify-end"
>
  <div className="relative">

    {/* Rotating Glow */}

    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute -inset-5 rounded-[40px]
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-purple-500
      blur-2xl
      opacity-40"
    />
    {/* ================= Floating Python ================= */}

<motion.div
  animate={{ y: [-12, 12, -12] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="hidden sm:block absolute -left-6 sm:-left-12 top-20 z-20"
>
  <div
    className="
    w-20 h-20
    rounded-2xl
    bg-white/10
    backdrop-blur-xl
    border border-white/10
    flex flex-col
    items-center
    justify-center
    shadow-xl"
  >
    <FaPython className="text-4xl text-yellow-400" />

    <span className="text-xs mt-2 text-gray-300">
      Python
    </span>
  </div>
</motion.div>
{/* ================= Floating React ================= */}

<motion.div
  animate={{ y: [12, -12, 12] }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="hidden sm:block absolute -right-6 sm:-right-12 top-36 z-20"
>
  <div
    className="
    w-20 h-20
    rounded-2xl
    bg-white/10
    backdrop-blur-xl
    border border-white/10
    flex flex-col
    items-center
    justify-center
    shadow-xl"
  >
    <FaReact className="text-4xl text-cyan-400" />

    <span className="text-xs mt-2 text-gray-300">
      React
    </span>
  </div>
</motion.div>
{/* ================= Floating AI ================= */}

<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="hidden sm:block absolute -left-4 sm:-left-10 bottom-24 z-20"
>
  <div
    className="
    w-20 h-20
    rounded-2xl
    bg-white/10
    backdrop-blur-xl
    border border-white/10
    flex flex-col
    items-center
    justify-center
    shadow-xl"
  >
    <SiTensorflow className="text-4xl text-orange-400" />

    <span className="text-xs mt-2 text-gray-300">
      AI / ML
    </span>
  </div>
</motion.div>
{/* ================= Floating Flask ================= */}

<motion.div
  animate={{ y: [10, -10, 10] }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="hidden sm:block absolute -right-4 sm:-right-10 bottom-12 z-20"
>
  <div
    className="
    w-20 h-20
    rounded-2xl
    bg-white/10
    backdrop-blur-xl
    border border-white/10
    flex flex-col
    items-center
    justify-center
    shadow-xl"
  >
    <SiFlask className="text-4xl text-white" />

    <span className="text-xs mt-2 text-gray-300">
      Flask
    </span>
  </div>
</motion.div>

    {/* ================= Glass Card ================= */}

   <motion.div
  whileHover={{
    rotateX: 8,
    rotateY: -8,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 180,
    damping: 15,
  }}
  style={{
    transformStyle: "preserve-3d",
  }}
  className="
  relative
  w-[85vw]
  max-w-[380px]
  rounded-[35px]
  bg-white/10
  backdrop-blur-2xl
  border border-white/10
  hover:border-cyan-400/40
  shadow-2xl
  hover:shadow-cyan-500/30
  transition-all
  duration-500
  overflow-hidden
  p-8"
>


      {/* Internship Badge */}

      <div className="flex justify-center">

        <div
          className="flex items-center gap-2
          bg-green-500/20
          border border-green-400/30
          rounded-full
          px-5 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

          <span className="text-sm text-green-300">
            Available for Internship
          </span>

        </div>

      </div>

      {/* Image */}

      <div className="flex justify-center mt-8">

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-40"></div>

          <img
            src={profile}
            alt="Saad Nawaz"
            className="
            relative
            w-56
            h-56
            rounded-full
            object-cover
            object-[center_top]
            border-[5px]
            border-cyan-400"
          />

        </div>

      </div>

      {/* Name */}

      <div className="text-center mt-8">

        <h2 className="text-3xl font-bold">
          Saad Nawaz
        </h2>

        <p className="text-cyan-300 mt-2">
          Artificial Intelligence Student
        </p>

      </div>

      {/* Badges */}

      <div className="flex justify-center gap-3 mt-8 flex-wrap">

        <div
          className="px-4 py-2 rounded-full
          bg-white/10 backdrop-blur-xl"
        >
          📍 Faisalabad, Pakistan
        </div>

        <div
          className="px-4 py-2 rounded-full
          bg-cyan-500/20
          border border-cyan-400/30"
        >
          ⭐ Open to Work
        </div>

      </div>

    </motion.div>

  </div>

</motion.div>

{/* ================= Scroll Indicator ================= */}

<motion.div
  animate={{ y: [0, 10, 0] }}
  transition={{
    duration: 2,
    repeat: Infinity,
  }}
  className="absolute bottom-8 left-1/2 -translate-x-1/2"
>
  <div className="w-8 h-14 rounded-full border-2 border-cyan-400/30 flex justify-center p-2">
    <motion.div
      animate={{ y: [0, 18, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
      className="w-2 h-2 rounded-full bg-cyan-400"
    />
  </div>
</motion.div>

</div>

</div>

</section>
  );
}

export default HeroPremium;