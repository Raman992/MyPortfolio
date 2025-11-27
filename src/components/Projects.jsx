import React, { useRef } from "react";
import { projects } from "./Constant";
import { FiGithub } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 80,
        rotationY: 90,
        duration: 1,
        delay: i * 0.2,
        ease: "power3.out",
      });
    })
  }, []);

  return (
    <div className="border-b border-neutral-500 pb-20 text-center mb-20">
      <h1
        ref={titleRef}
        className="text-2xl lg:text-4xl pb-10 lg:mt-14 mt-10 font-light tracking-tight"
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-20">
        {projects.map((project, index) => (
          <div
            key={project.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="rounded-2xl border border-neutral-800 p-6 shadow-lg backdrop-blur bg-neutral-900/50 hover:shadow-purple-600/20 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              {project.title}
            </h2>
            <div className="flex justify-center pb-4">
              <div className="w-full max-w-xs h-40 overflow-hidden flex justify-center">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5 justify-center">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-neutral-800 px-3 py-1 rounded-full text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-500 transition"
              >
                <FiGithub size={18} /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
