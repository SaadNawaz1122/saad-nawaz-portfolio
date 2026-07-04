import { projects } from "../data/portfolioData";
import resumeImg from "../assets/images/resume-analyzer.png";
import chatbotImg from "../assets/images/chatbot.png";
import weatherImg from "../assets/images/weather-dashboard.png";
import spamImg from "../assets/images/spam-classifier.png";
import shoeImg from "../assets/images/shoe-shop.png";
import portfolioImg from "../assets/images/portfolio.png";

function Projects() {
  return (
    <section id="projects" className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >

              
              <img
  src={project.image}
  alt={project.title}
  className="
    w-full
    h-56
    object-cover
    rounded-2xl
    mb-6
    border
    border-cyan-500/20
    transition-all
    duration-500
    group-hover:scale-105
  "
/>

              <h3 className="text-2xl font-bold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">

                {project.technologies.map((tech, index) => (

                  <span
                    key={index}
                    className="bg-cyan-600 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <p className="text-yellow-400 font-semibold mb-4">
                {project.status}
              </p>

              <div className="flex gap-3">

                <button className="bg-cyan-500 px-4 py-2 rounded-lg">
                  GitHub
                </button>

                <button className="border border-cyan-500 px-4 py-2 rounded-lg">
                  Live Demo
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;