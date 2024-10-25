import React from 'react'
import "./skill.css"
export const Skills = () => {
  return (
    <>
    <div className='Skills-intro'>
       <p>I am a full-stack developer proficient in the MERN stack, which includes MongoDB, Express.js, React, and Node.js. My expertise allows me to create dynamic and responsive web applications that deliver great user experiences.I use Git for version control, ensuring smooth collaboration and code management across projects. My experience in Java enables me to build robust applications with strong object-oriented programming principles.With a passion for coding and a focus on best practices, I thrive in collaborative environments and am committed to delivering high-quality solutions. </p>
    </div>
      <div className='box'>
        <img className='java' src='../skills/download (1).png'/>
        <img  className='node' src='../skills/download (2).png'/>
        <img className='react' src='../skills/download (3).png'/>
        <img className='express' src='../skills/download (4).png'/>
          <div>
              <img className='python' src='../skills/download.jpeg'/>
              <img className='javascript'  src='../skills/download.png'/>
              <img className='mongo' src='../skills/MongoDB_Logo.jpg'/>
          </div>
      </div>
    
    </>
  )
}
