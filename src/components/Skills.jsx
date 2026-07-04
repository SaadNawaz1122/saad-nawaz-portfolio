import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";

function Skills() {
  return (
    <section id="skills" className="bg-gray-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">
          My Skills
        </h2>

        <div className="space-y-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >

              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>

              <div className="w-full h-4 bg-gray-700 rounded-full">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="h-4 bg-cyan-400 rounded-full"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;


