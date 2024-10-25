import React from 'react'
import "./about.css"

export const About = () => {
  return (
    <>
      <div className='insta'>
          <a href='https://www.instagram.com/'>
            <img src='../images/download.jpeg'/>
          </a>
      </div>
      <div className='git'>
        <a href="https://github.com/Raghunandan2003">
          <img src='../images/GitHub-Mark-ea2971cee799.png'/>
        </a>
      </div>
         <div className='main'>
           <p>I am a passionate full-stack developer with a strong foundation in both front-end and back-end technologies. My expertise spans various programming languages and frameworks, enabling me to build robust and scalable web applications that deliver exceptional user experiences. I thrive on the challenge of transforming complex requirements into elegant solutions, ensuring that every project I undertake is executed with precision and creativity.
           n addition to my technical skills, I serve as a project management tech engineer, where I 
              <br/>
           leverage my organizational abilities and technical knowledge to oversee project lifecycles from conception to completion. I excel at coordinating teams, managing timelines, and ensuring that projects align with business objectives. My approach emphasizes collaboration, transparency, and continuous improvement, which helps drive successful outcomes and fosters a positive team environment.
           </p>
           <div className='resume'>
           <img src='../images/Screenshot (101).png'/>
           <a href="../images/Screenshot (101).png" download="w3logo">
          <button className='Btn'>Download</button>
           </a>
           </div>
           
         </div>
    
    </>
  
  )
}
