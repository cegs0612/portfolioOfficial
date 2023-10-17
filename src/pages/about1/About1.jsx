import './about1.css'
import React, {useContext} from 'react'
import { LanguageContext } from "../../context/LanguageContext";


function About1() {
  const {language} = useContext(LanguageContext)

  return (
    <section className="about about1 page" id='about'>
      <div className="circle1"></div>
      <div className="circle circle2"></div>
      <div className="circle sc sc3"></div>
      <div className="circle sc sc4"></div>
      <div className="circle sc sc5"></div>
      {language === 'en' && <h2>About Me</h2>}
      {language === 'es' && <h2>Sobre mí</h2>}
      <img src="/img/aboutImage.png" alt={language=== 'en' ? "Carlos Gutiérrez image" : "Imagen de Carlos Gutiérrez"}/>
      <div className="text">
        { language === 'en' && 
          <><div>
            <p>I'm Carlos Eduardo Gutiérrez Sánchez, an Industrial Engineer turned Full Stack Web Developer with a passion for languages and music. Originally from Cochabamba, Bolivia, I'm 35 years old and hold a degree in Industrial Engineering from San Simon University in Cochabamba, Bolivia.</p>
          </div>
          <div className='secondPar' >
            <p>I've embarked on a Full Stack Web Development course, where I've gained proficiency in HTML, CSS, JavaScript, NodeJS, SQL, and ReactJS. This past august I joined a 4-week Front End Training Program, where I sharpened my HTML, CSS and JavaScript skills, specially focusing in the semantic and accessibility aspects.</p>
          </div></>
        }
        { language === 'es' && 
          <><div>
            <p>Soy Carlos Eduardo Gutiérrez Sánchez, ingeniero industrial, y ahora Desarrollador Web Full Stack Junior, apasionado por los idiomas y la música. Originalmente soy de Cochabamba, Bolivia y tengo 35 años. Tengo un título de licenciatura en Ingeniería Industrial de la Universidad Mayor de San Simón en Cochabamba, Bolivia</p>
          </div>
          <div className='secondPar'>
            <p>En meses pasados, hice un curso de Desarrollo Web Full Stack, donde aprendí HTML, CSS, JavaScript, NodeJS, SQL y ReactJS, y este agosto pasado hice un programa de entrenamiento Front End de cuatro semanas de duración en el que pulí mis habilidades en HTML, CSS y JavaScript, enfocado especialmente en los aspectos semántico y de accesibilidad.</p>
          </div></>
        }
      </div>
    </section>
  )
}

export default About1