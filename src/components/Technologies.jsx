import React from 'react'
import {
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiExpress
} from "react-icons/si";

const Technologies = () => {
    const techStack = [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React", icon: <SiReact className="text-cyan-400" /> },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    ];
    return (

            <div className='border-b border-neutral-500 pb-4 lg:mb-35 text-center'>
                <h1 className='text-2xl lg:text-4xl pb-10 lg:mt-14 font-light tracking-tight'>Technologies</h1>
                <div className="flex flex-wrap gap-6 justify-center mt-8 px-20">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="technology_card animate-float"
                            style={{
                                animationDelay: `${Math.random() * 2}s`
                            }}
                        >
                            <div className="text-4xl">
                                {tech.icon}
                            </div>
                            <span className="text-xl text-gray-300 font-medium">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

    )
}

export default Technologies
