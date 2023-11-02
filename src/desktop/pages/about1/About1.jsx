import './about1.css'
import React, {useContext} from 'react'
import { LanguageContext } from "../../../context/LanguageContext";
import { motion} from "framer-motion";

const text = {
  english: {
    p1: "I'm Carlos Eduardo Gutiérrez Sánchez, an Industrial Engineer turned Full Stack Web Developer with a passion for languages and music. Originally from Cochabamba, Bolivia, I'm 35 years old and hold a degree in Industrial Engineering from San Simon University in Cochabamba, Bolivia.",
    p2: "I've embarked on a Full Stack Web Development course, where I've gained proficiency in HTML, CSS, JavaScript, NodeJS, SQL, and ReactJS. This past august I joined a 4-week Front End Training Program, where I sharpened my HTML, CSS and JavaScript skills, specially focusing in the semantic and accessibility aspects."
  },
  spanish: {
    p1: "Soy Carlos Eduardo Gutiérrez Sánchez, ingeniero industrial, y ahora Desarrollador Web Full Stack Junior, apasionado por los idiomas y la música. Originalmente soy de Cochabamba, Bolivia y tengo 35 años. Tengo un título de licenciatura en Ingeniería Industrial de la Universidad Mayor de San Simón en Cochabamba, Bolivia",
    p2: "En meses pasados, hice un curso de Desarrollo Web Full Stack, donde aprendí HTML, CSS, JavaScript, NodeJS, SQL y ReactJS, y este agosto pasado hice un programa de entrenamiento Front End de cuatro semanas de duración en el que pulí mis habilidades en HTML, CSS y JavaScript, enfocado especialmente en los aspectos semántico y de accesibilidad."
  }
}

function About1() {
  const {language} = useContext(LanguageContext)
  
  const circleVariants = {
    hidden:{scale:0},
    visible:{scale:1},
    transition:{type:'spring', duration:1.5}
  }
  const circle2Variants = {
    hidden:{clipPath:"circle(20% at 0% 100%)"},
    visible:{clipPath:"circle(100% at 0% 100%)"},
  }
  const divVariants = {
    hidden:{scaleX:1.5},
    visible:{scaleX:1},
    transition:{type:'spring', duration:1}
  }

  return (
    <motion.section 
      className="about about1 page" 
      id='about'
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{type:'spring', duration:1}}
    >
      <motion.div className="circle1" variants={circleVariants} initial="hidden" whileInView="visible" transition="transition"></motion.div>
      <motion.div className="circle circle2" variants={circle2Variants} initial="hidden" whileInView="visible" transition={{type:'spring', duration:1.5, bounce:0}}></motion.div>
      <motion.div className="circle sc sc3" variants={circleVariants} initial="hidden" whileInView="visible" transition="transition"></motion.div>
      <motion.div className="circle sc sc4" variants={circleVariants} initial="hidden" whileInView="visible" transition="transition"></motion.div>
      <motion.div className="circle sc sc5" variants={circleVariants} initial="hidden" whileInView="visible" transition="transition"></motion.div>
      {language === 'en' && <h2>About Me</h2>}
      {language === 'es' && <h2>Sobre mí</h2>}
      <img src="/img/aboutImage.png" alt={language=== 'en' ? "Carlos Gutiérrez image" : "Imagen de Carlos Gutiérrez"}/>
      <div className="text">
        <motion.div variants={divVariants} initial="hidden" whileInView="visible" transition="transition">
          <p>{language==='en'? text.english.p1 : text.spanish.p1}</p>
        </motion.div>
        <motion.div className='secondPar' variants={divVariants} initial="hidden" whileInView="visible" transition="transition">
            <p>{language==='en'? text.english.p2 : text.spanish.p2}</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About1