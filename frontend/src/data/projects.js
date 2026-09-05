import project1 from "../assets/projects/project1.png";

const projects = [
  {
    title: "ASHA Worker Digital Assistant",
    image: project1,
    description:
      "A mobile application that helps ASHA workers manage patient records, record health data, work offline, and synchronize data when internet is available.",
    technologies: [
      "React Native",
      "TypeScript",
      "WatermelonDB",
      "Node.js",
    ],
    githubUrl: "https://github.com/rheapatel-23/Village-Health-Worker-Digital-Assistant",
    liveUrl: "",
  },
  {
    title: "AI-Powered Personalized Nutrition Coach",
    image: project1,
    description:
      "An AI-powered fitness recommendation system that generates personalized workout suggestions based on user information and fitness goals.",
    technologies: [
      "React",
      "Python",
      "Machine Learning",
      "Node.js",
    ],
    githubUrl: "https://github.com/rohanpetersonvt/AI-POWERED-PERSONALIZED-NUTRITION-COACH",
    liveUrl: "",
  },
  {
    title: "SupplyGraph AI",
    image: project1,
    description: "AI-powered supply chain intelligence platform.",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL"
    ],
    githubUrl: "",
    liveUrl: ""
  }
];

export default projects;