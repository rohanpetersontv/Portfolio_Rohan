import SectionAnimation from "../animations/SectionAnimation";
import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Personal Projects",
      duration: "2023 - Present",
      type: "DEVELOPMENT",
      description:
        "Building full-stack web applications using React, Node.js, Express, and MySQL/PostgreSQL. Focused on clean architecture, responsive design, and real-world problem solving.",
      highlights: ["React / Node.js", "REST APIs", "MySQL / MongoDB"]
    },
    {
      role: "AI & ML Practitioner",
      company: "Self-Directed Learning",
      duration: "2024 - Present",
      type: "AI / ML",
      description:
        "Developing machine learning models and AI-powered solutions using Python, TensorFlow, and Scikit-learn. Exploring deep learning, data pipelines, and predictive analytics.",
      highlights: ["Python / TensorFlow", "Scikit-learn", "Data Analysis"]
    }
  ];

  return (
    <SectionAnimation>
      <section className="experience" id="experience">
        <div className="section-inner">
          <div className="section-header">
            <span className="tech-label">05 / EXPERIENCE</span>
            <h2 className="section-heading">Development Track</h2>
          </div>

          <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="exp-timeline-item" key={index}>
              <div className="exp-timeline-dot">
                <FaBriefcase />
              </div>
              <motion.div
                className="experience-card"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <div className="exp-card-accent"></div>
                <div className="experience-header">
                  <div className="exp-header-left">
                    <span className="exp-type">{exp.type}</span>
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <span key={i} className="exp-highlight-tag">{h}</span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Experience;
