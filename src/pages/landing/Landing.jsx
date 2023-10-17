import React, {useContext} from 'react'
import "./landing.css";
import { LanguageContext } from "../../context/LanguageContext";


function Landing() {
const {language} = useContext(LanguageContext)

  return (
    <section className="landing page" id='landing'>
      <div className="circle1"></div> 
      <div className="circle2"></div>     
      <img src="/img/landingImage.png" alt={language=== 'en' ? "Carlos Gutiérrez image" : "Imagen de Carlos Gutiérrez"} className="img-landing" />
      <div className="text-container">
        {language === 'en' && <div className="landing-text">
          <h1>Carlos Gutiérrez</h1>
          <h2>Full Stack Web Developer</h2>
          <p>I'm Carlos Gutierrez, a Junior Full Stack Web Developer with experience in technologies like HTML, CSS, JavaScript (both in its pure form and in the MERN stack). Currently, I'm based in Kolkata, India, and I'm passionate about creating exceptional web experiences.</p>
          <a href="#projects">Explore My Projects</a>
        </div>}
        {language === 'es' && <div className="landing-text">
          <h1>Carlos Gutiérrez</h1>
          <h2>Desarrollador Web Full Stack</h2>
          <p>Mi nombre es Carlos Gutiérrez, un Desarrollador Web Full Stack Junior con conocimientos en tecnologías como HTML, CSS y JavaScript, tanto en su forma pura como en el stack MERN. Actualmente, resido en Calcuta, India, y disfruto de la creación de experiencias web extraordinarias.</p>
          <a href="#projects">Explora Mis Proyectos</a>
        </div>}
      </div>
      
    </section>
  )
}

export default Landing