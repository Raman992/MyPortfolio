import React, { useRef } from 'react';
import { techStack } from './Constant';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(titleRef.current, {
        opacity: 0,
        x: -300,
        scale: 0.5,
      });

      tl.from(
        cardsRef.current,
        {
          opacity: 0,
          scale: 0.5,
          stagger: 0.2,
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="border-b border-neutral-500 pb-20 lg:mb-35 text-center">
      <h1
        ref={titleRef}
        className="text-2xl lg:text-4xl pb-10 lg:mt-14 font-light tracking-tight"
      >
        Technologies
      </h1>
      <div className="flex flex-wrap gap-6 justify-center mt-8 px-20">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            ref={(el) => (cardsRef.current[index] = el)}
            className="technology_card animate-float"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="text-4xl">{tech.icon}</div>
            <span className="text-xl text-gray-300 font-medium">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
