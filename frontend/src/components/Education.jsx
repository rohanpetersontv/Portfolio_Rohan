import SectionAnimation from "../animations/SectionAnimation";
import "./Education.css"
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "RL Jalappa Institute of Technology (VTU Affiliated), Karnataka, India",
      year: "2023 - 2027",
      grade: "8.5 CGPA",
      description: "Pursuing Computer Science Engineering with a focus on software development, full-stack technologies, artificial intelligence, and machine learning."
    },
    {
      degree: "Pre-University Course (12th Grade)",
      institution: "Sri Devaraj Urs PU College, Karnataka, India",
      year: "2021 - 2023",
      grade: "91%",
      description: "Completed Pre-University education."
    }
  ];

  return (
    <SectionAnimation>
      <section className="education" id="education">
        <div className="section-inner">
          <div className="section-header">
            <span className="tech-label">06 / EDUCATION</span>
            <h2 className="section-heading">Academic Journey</h2>
          </div>

          <div className="education-timeline">
            {educationData.map((edu, idx) => (
              <div className="timeline-item" key={idx}>
                <div className="timeline-dot">
                  <FaGraduationCap />
                </div>
                <motion.div
                  className="education-card"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                >
                  <div className="edu-card-accent"></div>
                  <div className="education-header">
                    <h3>{edu.degree}</h3>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <h4>{edu.institution}</h4>
                  <p className="education-description">{edu.description}</p>
                  <div className="education-grade">
                    <span>Grade: <strong>{edu.grade}</strong></span>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  )
}

export default Education;