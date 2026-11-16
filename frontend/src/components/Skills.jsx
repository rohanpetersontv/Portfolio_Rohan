import SectionAnimation from "../animations/SectionAnimation";
import "./Skills.css"
import { motion } from "framer-motion";
import { FaJava, FaPython, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGithub, FaDatabase, FaBrain, FaCode } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiC, SiExpress, SiMysql, SiPostgresql, SiMongodb, SiTensorflow, SiScikitlearn, SiIntellijidea } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiGitBranch } from "react-icons/bi";
import { FaToolbox } from "react-icons/fa";

function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode />,
      color: "blue",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C", icon: <SiC /> }
      ]
    },
    {
      title: "Frontend",
      icon: <FaHtml5 />,
      color: "orange",
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <IoLogoJavascript /> },
        { name: "React", icon: <FaReact /> }
      ]
    },
    {
      title: "Backend",
      icon: <FaNodeJs />,
      color: "green",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      color: "cyan",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Tools",
      icon: <FaToolbox />,
      color: "purple",
      skills: [
        { name: "Git", icon: <BiGitBranch /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
        { name: "IntelliJ IDEA", icon: <SiIntellijidea /> }
      ]
    },
    {
      title: "AI/ML",
      icon: <FaBrain />,
      color: "magenta",
      skills: [
        { name: "Machine Learning", icon: <FaBrain /> },
        { name: "TensorFlow", icon: <SiTensorflow /> },
        { name: "scikit-learn", icon: <SiScikitlearn /> }
      ]
    }
  ];

  return (
    <SectionAnimation>
      <section className="skills" id="skills">
        <div className="section-inner">
          <div className="section-header">
            <span className="tech-label">03 / SKILLS</span>
            <h2 className="section-heading">Technical Arsenal</h2>
          </div>

          <div className="skills-container">
            {skillCategories.map((category, idx) => (
              <motion.div
                className={`skill-category skill-category--${category.color}`}
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="category-title">
                  <span className="category-icon">{category.icon}</span>
                  {category.title}
                </h3>
                <div className="category-skills">
                  {category.skills.map((skill, sIdx) => (
                    <div className="skill-badge" key={sIdx}>
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SectionAnimation>
  );
}

export default Skills;