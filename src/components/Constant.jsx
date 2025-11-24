//Aboutme items
import { FiCamera, FiCode, FiCoffee } from 'react-icons/fi'
export const about_items = [
  { title: "Main Stack", icon: <FiCode />, desc: "React · MongoDb · Express.js · Tailwind · Node.js" },
  { title: "Past Life", icon: <FiCoffee />, desc: "Barista & Coffee Instructor → Tech Sales → Tech Repair → Photo Editor → Full-time coding" },
  { title: "Currently", icon: <FiCamera />, desc: "BCA student · Building real projects · Hunting for my first dev job" },
];


//Aboutme paragraph
export const about_para = [
  {
  Description:"Full-stack developer with proficiency in the MERN stack (MongoDB, Express, React, and Node.js) focusing on writing clean, performant code and modern-looking UI with Tailwind CSS.I enjoy breaking down complex problems, designing efficient solutions, and delivering applications that are intuitive and user-centric."
},
{
  Description:"I am all about continuous learning and improving my craft every day—be that searching for better design patterns, optimizing workflows, or mastering new tools.Currently open to join a team, and excited about the opportunity to contribute to a team in which impactful products can be built while growing as a developer."
}
];


//Technologies
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
export const techStack = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  ];  


//Projects
  import textconverter from '../assets/screenshots/textc1.png'
  export const projects = [
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built with React and Tailwind CSS, showcasing projects, skills, and experience.",
    tech: ["React", "Tailwind", "Vite"],
    link: "",
    github: "https://github.com/raman992/myportfolio",
    image: "./logo.png"  
  },  
  {
    title: "Text Conveter",
    desc: "A super-fast, beginner-built text editor made with React + Vite + Bootstrap my very first React project!",
    tech: ["React", "Bootstrap", "Vite"],
    link: "",
    github: "https://github.com/Raman992/TextConverter",
    image: textconverter 
  },
  ];
