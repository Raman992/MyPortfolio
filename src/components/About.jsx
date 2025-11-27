import React, { useRef } from 'react'
import { about_items, about_para } from './Constant'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const paraRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(subtitleRef.current, {
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(paraRef.current.children, {
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.5,
      delay: 0.2,
      ease: "power3.out"
    });

    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
          end:"top top",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        delay: index * 0.2,
        ease: "back.out(1.7)"
      })
    })
  }, [])

  return (
    <div className='border-b text-center border-neutral-500 pb-4 lg:mb-35 mb-10 items-center flex flex-col '>
      <h1 ref={titleRef} className='my-18 text-6xl lg:text-4xl'>About Me</h1>
      <h2 ref={subtitleRef} className='text-2xl text-purple-400 pb-5'>
        Hey, I'm Raman Shakya
      </h2>
      <div ref={paraRef} className='max-w-2/3'>
        {about_para.map((item, index) => (
          <p  key={index}>
            {item.Description}
          </p>
        ))}
      </div>
      <div className='flex flex-col lg:flex-row gap-9 mb-3 lg:mb-20 px-4 mt-20 '>
        {about_items.map((abt, index) => (
          <div
            key={abt.title}
            ref={(el) => (cardsRef.current[index] = el)}
            className="about_card"
          >
            <span className="text-purple-400 text-4xl mb-4">{abt.icon}</span>
            <h2 className="text-xl font-semibold mb-2">{abt.title}</h2>
            <p className="text-gray-400">{abt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default About
