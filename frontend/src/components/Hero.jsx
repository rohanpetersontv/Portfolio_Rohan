import "./Hero.css";
import profileImage from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import InteractiveBackground from "./InteractiveBackground";

function Hero() {
  return (
    <section className="hero" id="home">
      <InteractiveBackground />

      <div className="hero-inner">
        {/* Left Content */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.span
            className="tech-label hero-label"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            01 / INTRODUCTION
          </motion.span>

          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Rohan Peterson TV
          </motion.h1>

          <motion.h2
            className="hero-role"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Typewriter
              words={[
                "Full Stack Developer",
                "Computer Science Student",
                "AI Enthusiast",
                "React Developer",
                "Software Engineer",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={75}
              deleteSpeed={45}
              delaySpeed={2200}
            />
          </motion.h2>

          <motion.p
            className="hero-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <span className="prompt-arrow">&gt;</span> building digital solutions...
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            Passionate Computer Science Engineering student dedicated to
            building modern web applications, AI-powered solutions, and
            scalable software that solves real-world problems.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            <a href="#projects" className="primary-button">
              VIEW PROJECTS
            </a>
            <a href="/resume.pdf" download className="secondary-button">
              DOWNLOAD RESUME
            </a>
          </motion.div>

          <motion.div
            className="hero-metadata"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="metadata-item">
              <span className="metadata-key">[ SYSTEM ]</span>
              <span className="metadata-val">PORTFOLIO ONLINE</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-key">[ STACK ]</span>
              <span className="metadata-val">REACT / NODE / MYSQL</span>
            </div>
            <div className="metadata-item">
              <span className="metadata-key">[ STATUS ]</span>
              <span className="metadata-val status-available">AVAILABLE FOR HIRE</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="profile-frame">
            {/* Orbiting rings */}
            <div className="orbit-ring orbit-ring-1" />
            <div className="orbit-ring orbit-ring-2" />
            <div className="glow-ring" />
            <motion.img
              src={profileImage}
              alt="Rohan Peterson T V"
              className="profile-image"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Floating badges */}
            <motion.div
              className="float-badge badge-react"
              animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              ⚛ React
            </motion.div>
            <motion.div
              className="float-badge badge-node"
              animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              ⬡ Node.js
            </motion.div>
            <motion.div
              className="float-badge badge-ai"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ◈ AI/ML
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span>SCROLL</span>
        <div className="scroll-line">
          <motion.div
            className="scroll-dot"
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;