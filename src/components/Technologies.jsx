import React from 'react'
import { techStack } from './Constant'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Technologies = () => {
    
    useGSAP(() => {

    const tl = gsap.timeline({
      defaults: { ease: "power3.out", duration: 1 },
        scrollTrigger: {
        trigger: '#tech',
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
    });

    tl.from('#tech_title', {
      opacity: 0,
      x: -150,
      scale: 0.5,
    })

    tl.from('#tech_card', {
      opacity: 0,
      x: 150,
      scale: 0.5,
      stagger:0.2,
    }, );
  }, []);
    return (
        <div id='tech' className='border-b border-neutral-500 pb-20 lg:mb-35 text-center'>
            <h1 id='tech_title' className='text-2xl lg:text-4xl pb-10 lg:mt-14 font-light tracking-tight'>Technologies</h1>
            <div id='tech_card' className="flex flex-wrap gap-6 justify-center mt-8 px-20">
                {techStack.map((tech, index) => (
                    <div
                        key={tech.name}
                        className="technology_card animate-float"
                        style={{
                            animationDelay: `${index * 0.2}s`
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
