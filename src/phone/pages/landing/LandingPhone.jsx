import React, {useContext} from 'react'
import './landingPhone.css'
import { LanguageContext } from "../../../context/LanguageContext";
import { motion } from "framer-motion";

const textLanding = {
  english: {
    h1:"Carlos Gutiérrez",
    h2:"Full Stack Web Developer",
    p:"I'm Carlos Gutierrez, a Junior Full Stack Web Developer with experience in technologies like HTML, CSS, JavaScript (both in its pure form and in the MERN stack). Currently, I'm based in Kolkata, India, and I'm passionate about creating exceptional web experiences.",
    button:"Explore My Projects",
    imgAlt:"Carlos Gutiérrez image"
  },
  spanish: {
    h1:"Carlos Gutiérrez",
    h2:"Desarrollador Web Full Stack",
    p:"Mi nombre es Carlos Gutiérrez, un Desarrollador Web Full Stack Junior con conocimientos en tecnologías como HTML, CSS y JavaScript, tanto en su forma pura como en el stack MERN. Actualmente, resido en Calcuta, India, y disfruto de la creación de experiencias web extraordinarias.",
    button:"Explora Mis Proyectos",
    imgAlt:"Imagen de Carlos Gutiérrez"
  } 
}


function LandingPhone() {
  const {language} = useContext(LanguageContext)
  return (
    <section className='landing-phone page' id='landing'>
      <motion.div  
        className="circle1-phone"
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring',duration:1.5}}
      ></motion.div>
      <div className="text-container-phone">
        <div className="landing-text-phone">
          <h1>{language==='en'? textLanding.english.h1 : textLanding.spanish.h1}</h1>
          <h2>{language==='en'? textLanding.english.h2 : textLanding.spanish.h2}</h2>
          <p>{language==='en'? textLanding.english.p : textLanding.spanish.p}</p>
          <a href="#projects">{language==='en'? textLanding.english.button : textLanding.spanish.button}</a>
        </div>
        <img 
          src="/portfolioOfficial/img/landingImage.png" 
          alt={language=== 'en' ? textLanding.english.imgAlt : textLanding.spanish.imgAlt} 
          className="img-landing" 
        />
      </div>
      <motion.div 
        className="circle2-phone"
        initial={{clipPath:"circle(20% at 75% 75%)"}}
        whileInView={{clipPath:"circle(75% at 75% 75%)"}}
        transition={{type:'spring',duration:1.5, bounce:0}}
      ></motion.div>         
    </section>
  )
}

export default LandingPhone