import "./About.css"
import { motion } from "framer-motion";
import SectionAnimation from "../animations/SectionAnimation";

function About() {
  const cards = [];

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
                I am a Computer Science Engineering student passionate about
                building full-stack applications and AI-powered solutions.
              </p>
              <p>
                I enjoy learning new technologies and developing projects that
                solve real-world problems. My interests include web development,
                artificial intelligence, machine learning, and software engineering.
              </p>
              <p>
                Currently, I am improving my problem-solving and development skills
                while preparing for software engineering opportunities.
              </p>
            </div>

            
          </div>
        </div>
      </section>
    </SectionAnimation>
  )
}

export default About