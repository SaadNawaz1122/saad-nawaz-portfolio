import { motion } from "framer-motion";
import { education } from "../data/portfolioData";

function Education() {
  return (
    <section id="education" className="bg-gray-950 text-white py-24">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">

        {/* ================= Heading ================= */}

<motion.div
  initial={{ opacity: 0, y: -40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="text-center mb-20"
>

  <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">

    Academic Journey

  </p>

  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black">

    Education

    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

      & Learning Path

    </span>

  </h2>

  <p className="max-w-3xl mx-auto mt-8 text-gray-400 leading-8">

    My academic journey has built a strong foundation in
    Artificial Intelligence, Machine Learning, Software
    Development and modern web technologies.

  </p>

</motion.div>
        <div
  className="
  hidden
  sm:block
  absolute
  left-0
  sm:-left-2
  top-10
  w-6
  h-6
  rounded-full
  bg-cyan-400
  border-4
  border-[#030712]
  shadow-lg
  shadow-cyan-500"
/>
        {education.map((item) => (
          <motion.div
  key={item.id}
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{
    scale: 1.02,
    y: -8,
  }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="
  relative
  ml-0
  sm:ml-10
  mb-14
  rounded-3xl
  bg-white/5
  backdrop-blur-2xl
  border
  border-cyan-500/20
  hover:border-cyan-400/40
  shadow-2xl
  hover:shadow-cyan-500/20
  transition-all
  duration-500
  p-5
  sm:p-8
  "
>
            {/* ================= Card Header ================= */}

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">

  {/* Left Side */}

  <div>

    <div className="flex items-center gap-3">

      <div
        className="
        w-14
        h-14
        rounded-2xl
        bg-cyan-500/20
        border border-cyan-400/30
        flex
        items-center
        justify-center
        text-2xl"
      >
        🎓
      </div>

      <div>

        <h3 className="text-2xl font-bold">

          {item.degree}

        </h3>

        <p className="mt-2 text-lg font-medium text-cyan-300">
  🏫 {item.institute}
</p>

      </div>

    </div>

  </div>

  {/* Duration Badge */}

  <div className="mt-4 inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-medium">
  📅 {item.duration}
</div>
</div>

            
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;