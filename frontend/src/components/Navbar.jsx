import { useState, useEffect, useCallback } from "react"
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi"
import "./Navbar.css"

const NAV_SECTIONS = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },

  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection]   = useState("home");

  const handleScroll = useCallback(() => {
    const scrollY   = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    setScrolled(scrollY > 20);
    setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

    // Determine active section
    const sections = NAV_SECTIONS.map(n => n.href.slice(1));
    let current = sections[0];
    for (const id of sections) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 100) {
        current = id;
      }
    }
    setActiveSection(current);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <div className="logo-container">
        <span className="logo-dot" />
        <h2 className="logo">Rohan Peterson TV</h2>
      </div>

      <div className="nav-controls-mobile">
        {/* Theme toggle — mobile */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        {NAV_SECTIONS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className={activeSection === href.slice(1) ? "nav-active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/resume.pdf"
            download
            className="resume-button"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </li>
        {/* Theme toggle — desktop */}
        <li>
          <button
            className="theme-toggle theme-toggle--desktop"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar