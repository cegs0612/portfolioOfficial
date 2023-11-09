import React, {useContext} from 'react'
import "./landing.css";
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

function Landing() {
const {language} = useContext(LanguageContext)

  return (
    <motion.section 
      className="landing page" 
      id='landing'
      initial={{opacity:0.5}}
      whileInView={{opacity:1}}
      transition={{type:'spring', duration:0.5}}
    >
      <motion.div 
        className="circle1"
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring',duration:1.5}}  
      ></motion.div> 
      <motion.div 
        className="circle2"
        initial={{clipPath:"circle(20% at 75% 75%)"}}
        whileInView={{clipPath:"circle(75% at 75% 75%)"}}
        transition={{type:'spring',duration:1.5, bounce:0}}
      ></motion.div>     
      <img src="%PUBLIC_URL%/img/landingImage.png" alt={language=== 'en' ? textLanding.english.imgAlt : textLanding.spanish.imgAlt} className="img-landing" />
      <motion.div 
        className="text-container"
        initial={{scale:0.7}}
        whileInView={{scale:1}}
        transition={{type:'spring', duration:1}}
      >
        <div className="landing-text">
          <h1>{language==='en'? textLanding.english.h1 : textLanding.spanish.h1}</h1>
          <h2>{language==='en'? textLanding.english.h2 : textLanding.spanish.h2}</h2>
          <p>{language==='en'? textLanding.english.p : textLanding.spanish.p}</p>
          <motion.a 
            href="#projects"
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
          >{language==='en'? textLanding.english.button : textLanding.spanish.button}</motion.a>
        </div>
      </motion.div> 
    </motion.section>
  )
}

export default Landing