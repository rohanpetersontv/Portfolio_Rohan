import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"

import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Admin from "./components/Admin"
import NotFound from "./components/NotFound"

function Home({ theme, toggleTheme }) {
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Education />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  // Default to "dark" — the portfolio is dark-first
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "light") {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;