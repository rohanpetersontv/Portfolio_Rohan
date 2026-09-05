import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-bg">
        <div className="notfound-grid" />
      </div>

      <motion.div
        className="notfound-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="notfound-code"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          404
        </motion.div>

        <span className="tech-label notfound-label">ERROR / PAGE_NOT_FOUND</span>

        <h1 className="notfound-title">Signal Lost</h1>

        <p className="notfound-description">
          The page you're looking for doesn't exist or has been moved.
          <br />
          Check the URL or navigate back to base.
        </p>

        <div className="notfound-terminal">
          <span className="terminal-prompt">$</span>
          <span className="terminal-text">
            GET <span className="terminal-path">{window.location.pathname}</span>
          </span>
          <span className="terminal-status">→ 404 Not Found</span>
        </div>

        <div className="notfound-actions">
          <Link to="/" className="btn-home">
            ← RETURN HOME
          </Link>
          <Link to="/#contact" className="btn-contact">
            CONTACT
          </Link>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="notfound-deco deco-1" />
      <div className="notfound-deco deco-2" />
    </div>
  );
}

export default NotFound;
