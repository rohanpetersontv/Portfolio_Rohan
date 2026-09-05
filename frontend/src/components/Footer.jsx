import "./Footer.css"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="logo-dot"></span>
              Rohan Peterson TV
            </h2>
            <p className="footer-description">
              &gt; Building the next generation of digital tools.
            </p>
          </div>

          <div className="footer-links-container">
            <p className="footer-links-title">_CONNECT</p>
            <div className="footer-links">
              <a href="https://github.com/rohanpetersontv" target="_blank" rel="noreferrer" className="footer-link">
                <FaGithub /> GITHUB
              </a>
              <a href="https://www.linkedin.com/in/rohanpetersontv" target="_blank" rel="noreferrer" className="footer-link">
                <FaLinkedin /> LINKEDIN
              </a>
              <a href="mailto:rohanpetertv@gmail.com" className="footer-link">
                <FaEnvelope /> EMAIL
              </a>
              <a href="/resume.pdf" download className="footer-link">
                <FaFilePdf /> RESUME
              </a>
            </div>
          </div>

          <div className="footer-links-container">
            <p className="footer-links-title">_NAVIGATE</p>
            <div className="footer-links">
              {["#about", "#skills", "#projects", "#experience", "#education", "#contact"].map(href => (
                <a key={href} href={href} className="footer-link">
                  {href.slice(1).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">[ 2026 ] Rohan Peterson T V. All Rights Reserved.</p>
          <p className="system-status">
            <span className="status-dot"></span>
            SYS_STATUS: ONLINE
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer