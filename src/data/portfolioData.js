import resumeImg from "../assets/images/resume-analyzer.png";
import chatbotImg from "../assets/images/chatbot.png";
import weatherImg from "../assets/images/weather-dashboard.png";
import spamImg from "../assets/images/spam-classifier.png";
import shoeImg from "../assets/images/shoe-shop.png";
import portfolioImg from "../assets/images/portfolio.png";
export const skills = [
  {
    name: "Python",
    percentage: 90,
  },
  {
    name: "Machine Learning",
    percentage: 85,
  },
  {
    name: "React",
    percentage: 80,
  },
  {
    name: "JavaScript",
    percentage: 80,
  },
  {
    name: "HTML & CSS",
    percentage: 95,
  },
  {
    name: "Java",
    percentage: 75,
  },
  {
    name: "SQL",
    percentage: 80,
  },
  {
    name: "Flask",
    percentage: 70,
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Resume Analyzer",
    image: resumeImg,
    description:
      "An AI-powered application that analyzes resumes and provides suggestions.",
    technologies: [
      "Python",
      "Flask",
      "NLP",
      "Scikit-learn",
      "Tailwind CSS",
    ],
    status: "In Development",
    github: "#",
    live: "#",
  },

  {
    id: 2,
    title: "AI Chatbot",
    image: chatbotImg,
    description:
      "A modern AI chatbot with a clean web interface.",
    technologies: [
      "Python",
      "Flask",
      "React",
      "Tailwind CSS",
    ],
    status: "In Development",
    github: "#",
    live: "#",
  },

  {
    id: 3,
    title: "Weather Dashboard",
    image: weatherImg,
    description:
      "Responsive weather application with live forecast.",
    technologies: [
      "Flask",
      "JavaScript",
      "Weather API",
      "Tailwind CSS",
    ],
    status: "Completed",
    github: "#",
    live: "#",
  },

  {
    id: 4,
    title: "Spam Email Classifier",
    image: spamImg,
    description:
      "Machine learning model for spam detection.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NumPy",
    ],
    status: "In Development",
    github: "#",
    live: "#",
  },

  {
    id: 5,
    title: "Shoe Shop Website",
    image: shoeImg,
    description:
      "Modern e-commerce website for a shoe store.",
    technologies: [
      "React",
      "Flask",
      "MySQL",
      "Tailwind CSS",
    ],
    status: "In Development",
    github: "#",
    live: "#",
  },

  {
    id: 6,
    title: "Personal Portfolio",
    image: portfolioImg,
    description:
      "Responsive portfolio built with React and Tailwind CSS.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    status: "Completed",
    github: "#",
    live: "#",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Artificial Intelligence",
    institute: "NFC IEFR FAISALABAD",
    duration: "2023 - 2027",
    description:
      "Studying Artificial Intelligence with a focus on Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Database Systems and Software Engineering.",
  },
];