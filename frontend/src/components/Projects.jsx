import { useState, useEffect } from "react";
import "./Projects.css"
import { motion } from "framer-motion";
import SectionAnimation from "../animations/SectionAnimation";
import { getProjects } from "../services/api";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProjects();
      setProjects(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setError("Failed to load projects. Make sure the backend server is running.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <SectionAnimation>
      <section className="projects" id="projects">
        <div className="section-inner">
          <div className="section-header">
            <span className="tech-label">04 / PROJECTS</span>
            <h2 className="section-heading">Featured Work</h2>
          </div>

          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p className="loading-text">Loading projects...</p>
            </div>
          ) : error ? (
            <div className="error-state">
              <p className="error-text">[ ERROR ] {error}</p>
              <button className="retry-btn" onClick={fetchProjects}>↻ RETRY</button>
            </div>
          ) : projects.length === 0 ? (
            <p className="empty-text">No projects found.</p>
          ) : (
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
          )}
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Projects;