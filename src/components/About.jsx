import { motion } from "framer-motion";
import profile from "../assets/images/profilepic.png";
import {
  FaBrain,
  FaReact,
  FaPython,
  FaCloud,
  FaDatabase,
} from "react-icons/fa";

function About() {
  return (
    <section
  id="about"
  className="bg-gray-900 text-white py-24"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= Premium Heading ================= */}

<motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center"
>

  {/* Small Badge */}

  <div
    className="
    inline-flex
    items-center
    gap-2
    px-5
    py-2
    rounded-full
    bg-cyan-500/10
    border
    border-cyan-400/30
    backdrop-blur-xl"
  >
    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

    <span className="text-cyan-300 text-sm font-medium">
      Get To Know Me
    </span>
  </div>

  {/* Main Heading */}

  <h2
    className="
    mt-6
    text-5xl
    lg:text-6xl
    font-black
    bg-gradient-to-r
    from-cyan-400
    via-blue-400
    to-purple-500
    bg-clip-text
    text-transparent"
  >
    ABOUT ME
  </h2>

  {/* Subtitle */}

  <p className="mt-5 text-gray-400 text-lg max-w-2xl mx-auto leading-8">

    Passionate about Artificial Intelligence, Machine Learning,
    Full Stack Development and building intelligent software
    solutions for real-world problems.

  </p>

</motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Side */}

          <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="flex justify-center pt-20"
>

  <div className="relative">

    {/* Glow */}

    <div
      className="
      absolute
      -inset-6
      rounded-[40px]
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-purple-600
      blur-3xl
      opacity-30"
    />

    {/* Glass Card */}

    <div
      className="
      relative
      w-[360px]
      rounded-[35px]
      bg-white/10
      backdrop-blur-2xl
      border
      border-white/10
      shadow-2xl
      overflow-hidden
      p-8"
    >

      {/* Image */}

      <div className="flex justify-center">

        <img
  src={profile}
  alt="Saad Nawaz"
  className="
  w-80
  h-80
  rounded-full
  object-cover
  object-[50%_20%]
"
/>

      </div>

      {/* Name */}

      <div className="text-center mt-8">

        <h3 className="text-3xl font-bold">
          Saad Nawaz
        </h3>

        <p className="text-cyan-300 mt-2">
          AI Engineer
        </p>

      </div>

    </div>

  </div>

</motion.div>

          {/* Right Side */}

          <motion.div
            className="pt-10"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div>

  <span className="text-cyan-400 font-semibold tracking-widest uppercase">
    Who I Am
  </span>

  <h3 className="text-4xl lg:text-5xl font-bold mt-3 leading-tight">
    Building Intelligent
    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
      AI Solutions
    </span>
  </h3>

</div>

            <p className="mt-8 text-gray-400 leading-9 text-lg">

  I specialize in developing intelligent applications using
  <span className="text-cyan-400 font-semibold">
    {" "}Artificial Intelligence
  </span>,
  <span className="text-cyan-400 font-semibold">
    {" "}Machine Learning
  </span>,
  <span className="text-cyan-400 font-semibold">
    {" "}React
  </span>,
  <span className="text-cyan-400 font-semibold">
    {" "}Python
  </span>
  and
  <span className="text-cyan-400 font-semibold">
    {" "}Flask
  </span>.

  <br /><br />

  My goal is to build scalable AI systems that solve
  real-world problems, create meaningful user experiences,
  and continuously improve my expertise in Artificial
  Intelligence, Full Stack Development and Cloud Technologies.

</p>
{/* ================= Professional Highlights ================= */}

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">

  {/* AI Solutions */}

  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
  >
    <FaBrain className="text-4xl text-pink-400 mx-auto mb-4" />

    <h4 className="font-bold">
      AI Solutions
    </h4>

    <p className="text-sm text-gray-400 mt-2">
      Intelligent software systems
    </p>

  </motion.div>

  {/* Machine Learning */}

  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
  >
    🤖

    <h4 className="mt-3 font-bold">
      Machine Learning
    </h4>

    <p className="text-sm text-gray-400 mt-2">
      Predictive AI models
    </p>

  </motion.div>

  {/* React */}

  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
  >
    <FaReact className="text-4xl text-cyan-400 mx-auto mb-4" />

    <h4 className="font-bold">
      React Development
    </h4>

    <p className="text-sm text-gray-400 mt-2">
      Modern UI & Frontend
    </p>

  </motion.div>

  {/* Python */}

  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
  >
    <FaPython className="text-4xl text-yellow-400 mx-auto mb-4" />

    <h4 className="font-bold">
      Python Backend
    </h4>

    <p className="text-sm text-gray-400 mt-2">
      APIs & Automation
    </p>

  </motion.div>

  {/* Cloud */}

  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
  >
    <FaCloud className="text-4xl text-blue-400 mx-auto mb-4" />

    <h4 className="font-bold">
      Cloud & APIs
    </h4>

    <p className="text-sm text-gray-400 mt-2">
      Scalable deployments
    </p>

  </motion.div>

  {/* Database */}

  <motion.div
    whileHover={{ y: -8, scale: 1.03 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 text-center"
  >
    <FaDatabase className="text-4xl text-green-400 mx-auto mb-4" />

    <h4 className="font-bold">
      Database Design
    </h4>

    <p className="text-sm text-gray-400 mt-2">
      SQL & Data Modeling
    </p>

  </motion.div>

</div>

           {/* ================= Information Cards ================= */}

<div className="grid sm:grid-cols-2 gap-5 mt-12">

  {/* Name */}

  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all duration-300"
  >
    <p className="text-cyan-400 text-sm font-semibold">
      👤 Full Name
    </p>

    <h4 className="mt-2 text-lg font-bold">
      Saad Nawaz
    </h4>
  </motion.div>

  {/* Degree */}

  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all duration-300"
  >
    <p className="text-cyan-400 text-sm font-semibold">
      🎓 Education
    </p>

    <h4 className="mt-2 text-lg font-bold">
      BS Artificial Intelligence
    </h4>
  </motion.div>

  {/* Location */}

  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all duration-300"
  >
    <p className="text-cyan-400 text-sm font-semibold">
      📍 Location
    </p>

    <h4 className="mt-2 text-lg font-bold">
      Faisalabad, Punjab, Pakistan
    </h4>
  </motion.div>

  {/* Status */}

  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-5 transition-all duration-300"
  >
    <p className="text-cyan-400 text-sm font-semibold">
      💼 Status
    </p>

    <h4 className="mt-2 text-lg font-bold text-green-400">
      Open to Internship
    </h4>
  </motion.div>

</div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;