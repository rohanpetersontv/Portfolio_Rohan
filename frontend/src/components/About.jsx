import "./About.css"
import { motion } from "framer-motion";
import SectionAnimation from "../animations/SectionAnimation";

function About() {
  const stats = [
    { number: "2+", label: "Projects Built" },
    { number: "8.5", label: "CGPA" },
    { number: "6+", label: "Technologies" },
    { number: "Open", label: "To Work" },
  ];

  return (
    <SectionAnimation>
      <section className="about" id="about">
        <div className="section-inner">
          <div className="section-header">
            <span className="tech-label">02 / ABOUT</span>
            <h2 className="section-heading">About Me</h2>
          </div>

          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a <strong>Computer Science Engineering student</strong> at RL Jalappa Institute
                of Technology (VTU), Karnataka, India — currently in my 3rd year (2023–2027) with
                an 8.5 CGPA — passionate about building full-stack applications and AI-powered solutions.
              </p>
              <p>
                I enjoy learning new technologies and developing projects that solve real-world problems.
                My interests span <strong>web development</strong>, <strong>artificial intelligence</strong>,
                machine learning, and scalable software engineering.
              </p>
              <p>
                Currently sharpening my problem-solving skills and preparing for software engineering
                opportunities. I'm open to internships, collaborations, and exciting projects —
                feel free to reach out!
              </p>
            </div>

            {/* Stats Row */}
            <div className="about-stats">
              {stats.map((stat, i) => (
                <motion.div
                  className="about-stat-card"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default About;