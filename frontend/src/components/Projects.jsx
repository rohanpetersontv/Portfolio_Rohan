import { useState } from "react";
import "./Projects.css"
import { motion } from "framer-motion";
import SectionAnimation from "../animations/SectionAnimation";
import projectsData from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [projects] = useState(projectsData);

  return (
    <SectionAnimation>
      <section className="projects" id="projects">
        <div className="section-inner">
          <div className="section-header">
            <span className="tech-label">04 / PROJECTS</span>
            <h2 className="section-heading">Featured Work</h2>
          </div>

          {projects.length === 0 ? (
            <p className="empty-text">No projects found.</p>
          ) : (
            <>
              <div className="projects-container">
                {projects.map((project, index) => (
                  <motion.div
                    className="project-card"
                    key={project.id || index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="project-image-placeholder">
                      {project.image ? (
                        <img src={project.image} alt={project.title} />
                      ) : (
                        <div className="placeholder-img">
                          <span className="placeholder-icon">◈</span>
                          <span>PROJECT_IMG_NOT_FOUND</span>
                        </div>
                      )}
                      <div className="project-overlay">
                        <span>VIEW PROJECT</span>
                      </div>
                    </div>

                    <div className="project-content">
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="tech-stack">
                        {project.technologies?.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </div>

                      <div className="project-buttons">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-github">
                            <FaGithub /> VIEW_CODE
                          </a>
                        )}
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-live">
                            <FaExternalLinkAlt /> LIVE_DEMO
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* GitHub Profile CTA */}
              <motion.div
                className="projects-github-cta"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="cta-label">[ MORE PROJECTS ]</span>
                <a
                  href="https://github.com/rohanpetersontv"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-github cta-github-btn"
                >
                  <FaGithub /> VIEW ALL ON GITHUB
                </a>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Projects;