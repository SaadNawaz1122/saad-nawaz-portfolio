import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
function Contact() {
  return (
    <section
      id="contact"
      className="bg-gray-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* ================= Contact Heading ================= */}

<motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-20"
>

  <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">

    CONTACT

  </p>

  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-6xl font-black">

    Let's Build

    <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

      Something Amazing Together

    </span>

  </h2>

  <p className="max-w-3xl mx-auto mt-8 text-gray-400 leading-8 text-lg">

    Whether you have an internship opportunity,
    an AI project, freelance work, or just want to say hello,
    I'd love to hear from you.

  </p>

</motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Contact Form */}

          <motion.form
            
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
relative
rounded-[35px]
bg-white/10
backdrop-blur-2xl
border border-white/10
hover:border-cyan-400/40
shadow-2xl
hover:shadow-cyan-500/20
transition-all
duration-500
p-5 sm:p-8
space-y-6
overflow-hidden
"
          >
            {/* Glow */}

<div
  className="
  absolute
  inset-0
  bg-gradient-to-br
  from-cyan-500/5
  via-transparent
  to-purple-500/5
  pointer-events-none"
/>

            <input
              type="text"
              placeholder="Your Name"
              className="
relative
w-full
px-5
py-4
rounded-2xl
bg-white/5
backdrop-blur-xl
border border-white/10
placeholder-gray-500
focus:border-cyan-400
focus:ring-2
focus:ring-cyan-400/30
outline-none
transition-all
duration-300
"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full p-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-cyan-400 outline-none"
            ></textarea>

            <button
className="
w-full
py-4
rounded-2xl
bg-gradient-to-r
from-cyan-500
via-blue-500
to-purple-600
font-semibold
text-lg
shadow-xl
shadow-cyan-500/20
hover:shadow-cyan-500/50
hover:scale-[1.02]
transition-all
duration-300
"
>
🚀 Send Message
</button>

          </motion.form>

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
space-y-6
rounded-[35px]
bg-white/10
backdrop-blur-2xl
border border-white/10
hover:border-cyan-400/40
shadow-2xl
hover:shadow-cyan-500/20
transition-all
duration-500
p-5 sm:p-8
"
          >

            <motion.div
  whileHover={{ x: 8 }}
  className="
  flex
  items-center
  gap-5
  p-5
  rounded-2xl
  bg-white/5
  border border-white/10
  hover:border-cyan-400/40
  transition-all
  duration-300"
>

  <div
    className="
    w-14
    h-14
    rounded-2xl
    bg-cyan-500/20
    flex
    items-center
    justify-center"
  >
    <FaEnvelope className="text-2xl text-cyan-400" />
  </div>

  <div>

    <h3 className="font-semibold text-lg">
      Email
    </h3>

    <p className="text-gray-400">
      saadnawaz369@gmail.com
    </p>

  </div>

</motion.div>

            <motion.div
  whileHover={{ y: -6, scale: 1.02 }}
  className="
  flex
  items-center
  gap-5
  p-6
  rounded-3xl
  bg-white/10
  backdrop-blur-xl
  border border-white/10
  hover:border-cyan-400/40
  hover:shadow-xl
  hover:shadow-cyan-500/20
  transition-all
  duration-300"
>

  <div
    className="
    w-16
    h-16
    rounded-2xl
    bg-cyan-500/20
    flex
    items-center
    justify-center"
  >
    <FaPhoneAlt className="text-3xl text-cyan-400" />
  </div>

  <div>

    <h3 className="text-lg font-bold">

      Phone

    </h3>

    <p className="text-gray-400">

      +92 327 1213369

    </p>

  </div>

</motion.div>

            <motion.div
  whileHover={{ y: -6, scale: 1.02 }}
  className="
  flex
  items-center
  gap-5
  p-6
  rounded-3xl
  bg-white/10
  backdrop-blur-xl
  border border-white/10
  hover:border-cyan-400/40
  hover:shadow-xl
  hover:shadow-cyan-500/20
  transition-all
  duration-300"
>

  <div
    className="
    w-16
    h-16
    rounded-2xl
    bg-cyan-500/20
    flex
    items-center
    justify-center"
  >
    <FaMapMarkerAlt className="text-3xl text-cyan-400" />
  </div>

  <div>

    <h3 className="text-lg font-bold">

      Location

    </h3>

    <p className="text-gray-400">

      Faisalabad, Punjab, Pakistan

    </p>

  </div>

</motion.div>

            {/* ================= Social Media ================= */}

<div className="grid grid-cols-2 gap-5 pt-6">

  {/* GitHub */}

  <motion.a
    whileHover={{
      y: -6,
      scale: 1.03,
    }}
    href="https://github.com/SaadNawaz1122"
    target="_blank"
    rel="noreferrer"
    className="
    flex
    items-center
    gap-4
    p-5
    rounded-3xl
    bg-white/10
    backdrop-blur-xl
    border border-white/10
    hover:border-cyan-400/40
    hover:shadow-xl
    hover:shadow-cyan-500/20
    transition-all
    duration-300"
  >

    <div
      className="
      w-14
      h-14
      rounded-2xl
      bg-cyan-500/20
      flex
      items-center
      justify-center"
    >
      <FaGithub className="text-3xl text-cyan-400" />
    </div>

    <div>

      <h3 className="font-bold">

        GitHub

      </h3>

      <p className="text-gray-400 text-sm">

        View Projects

      </p>

    </div>

  </motion.a>

  {/* LinkedIn */}

  <motion.a
    whileHover={{
      y: -6,
      scale: 1.03,
    }}
    href="https://www.linkedin.com/in/saad-nawaz-ab0309369/"
    target="_blank"
    rel="noreferrer"
    className="
    flex
    items-center
    gap-4
    p-5
    rounded-3xl
    bg-white/10
    backdrop-blur-xl
    border border-white/10
    hover:border-cyan-400/40
    hover:shadow-xl
    hover:shadow-cyan-500/20
    transition-all
    duration-300"
  >

    <div
      className="
      w-14
      h-14
      rounded-2xl
      bg-blue-500/20
      flex
      items-center
      justify-center"
    >
      <FaLinkedin className="text-3xl text-blue-400" />
    </div>

    <div>

      <h3 className="font-bold">

        LinkedIn

      </h3>

      <p className="text-gray-400 text-sm">

        Professional Profile

      </p>

    </div>

  </motion.a>

</div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Contact;