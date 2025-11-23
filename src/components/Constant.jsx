import { FiCamera, FiCode, FiCoffee } from 'react-icons/fi'
import { SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

export const about_items = [
  { title: "Main Stack", icon: <FiCode />, desc: "React · MongoDb · Express.js · Tailwind · Node.js" },
  { title: "Past Life", icon: <FiCoffee />, desc: "Barista & Coffee Instructor → Tech Sales → Tech Repair → Photo Editor → Full-time coding" },
  { title: "Currently", icon: <FiCamera />, desc: "BCA student · Building real projects · Hunting for my first dev job" },
];


export const techStack = [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
  ];  