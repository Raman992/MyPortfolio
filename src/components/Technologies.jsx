import React from 'react'
import { techStack } from './Constant'

const Technologies = () => {
    return (
            <div className='border-b border-neutral-500 pb-20 lg:mb-35 text-center'>
                <h1 className='text-2xl lg:text-4xl pb-10 lg:mt-14 font-light tracking-tight'>Technologies</h1>
                <div className="flex flex-wrap gap-6 justify-center mt-8 px-20">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="technology_card animate-float"
                            style={{
                                animationDelay: `${Math.random()}s`
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
