import React, {useContext} from 'react'
import { LanguageContext } from "../../../context/LanguageContext";
import "./aboutPhone.css";
import { motion } from "framer-motion";

function AboutPhone() {
  const {language} = useContext(LanguageContext)

  const circleVariants = {
    hidden:{scale:0},
    visible:{scale:1},
    transition:{type:'spring', duration:1.5}
  }
  const circle2Variants = {
    hidden:{clipPath:"circle(20% at 0% 100%)"},
    visible:{clipPath:"circle(100% at 0% 100%)"},
    transition:{type:'spring', duration:1.5, bounce:0}
  }
  const divVariants = {
    hidden:{scaleX:0.5},
    visible:{scaleX:1},
    transition:{type:'spring', duration:1}
  }

  return (
    <section className='about-phone page' id='about'>
      <div className='about1-phone'>
        <div className="circles-about">
          <motion.div 
            className="circle1-about"
            initial='hidden'
            whileInView='visible'
            transition='transition'
            variants={circleVariants}
          ></motion.div>
          <motion.div 
            className="circle2-about"
            initial='hidden'
            whileInView='visible'
            variants={circle2Variants}
          ></motion.div>
        </div>
        <div className="about-phone-foreground">
          <div className="text-about1">
          {language === 'en' && <h2>About Me</h2>}
          {language === 'es' && <h2>Sobre mí</h2>}
          {language === 'en' && <div className='paragraph-container'>
            <motion.div 
              className="about-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <p>I'm Carlos Eduardo Gutiérrez Sánchez, an Industrial Engineer turned Full Stack Web Developer with a passion for languages and music. Originally from Cochabamba, Bolivia, I'm 35 years old and hold a degree in Industrial Engineering from San Simon University in Cochabamba, Bolivia.</p>
            </motion.div>
            <motion.div 
              className="about-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <p>I've embarked on a Full Stack Web Development course, where I've gained proficiency in HTML, CSS, JavaScript, NodeJS, SQL, and ReactJS. This past august I joined a 4-week Front End Training Program, where I sharpened my HTML, CSS and JavaScript skills, specially focusing in the semantic and accessibility aspects.</p>
            </motion.div>
          </div>}
          {language === 'es' && <div className='paragraph-container'>
            <motion.div 
              className="about-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <p>Soy Carlos Eduardo Gutiérrez Sánchez, ingeniero industrial, y ahora Desarrollador Web Full Stack Junior, apasionado por los idiomas y la música. Originalmente soy de Cochabamba, Bolivia y tengo 35 años. Tengo un título de licenciatura en Ingeniería Industrial de la Universidad Mayor de San Simón en Cochabamba, Bolivia</p>
            </motion.div>
            <motion.div 
              className="about-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <p>En meses pasados, hice un curso de Desarrollo Web Full Stack, donde aprendí HTML, CSS, JavaScript, NodeJS, SQL y ReactJS, y este agosto pasado hice un programa de entrenamiento Front End de cuatro semanas de duración en el que pulí mis habilidades en HTML, CSS y JavaScript, enfocado especialmente en los aspectos semántico y de accesibilidad.</p>
            </motion.div>            
          </div>}
          </div>
          <img src="/img/aboutImage.png" alt={language=== 'en' ? "Carlos Gutiérrez image" : "Imagen de Carlos Gutiérrez"}/>
        </div>
      </div>
      <div className="about2-phone">
        <div className="circles-about">
          <motion.div 
            className="circle1-about"
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{type:'spring',duration:1.5}}
          ></motion.div>
          <motion.div 
            className="circle2-about"
            initial='hidden'
            whileInView='visible'
            variants={circleVariants}
          ></motion.div>
        </div>
        <div className="about-phone-foreground">
          {language === 'en' && <div className="about2-phone-text">
            <motion.div 
              className="about2-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <p>Beyond my technical pursuits, I'm deeply passionate about music and languages. I studied music at San Simon University, specializing in lyric singing and piano. On the linguistic front, I'm fluent in both Spanish and English, and I've also acquired proficiency in French, German, Portuguese, and some Italian. Currently, I'm dedicated to learning Russian and Hindi, continually expanding my horizons.</p>           
            </motion.div>
            <motion.div 
              className="about2-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <h3>Professional Values</h3>
              <ul>
                <li><strong>Quality and Excellence</strong>. Commitment to excellence in all tasks and projects constantly seeking ways to improve and refine results.</li>
                <li><strong>Continuous Learning</strong>. Commitment to lifelong professional development enjoying acquiring new knowledge and skills.</li>
                <li><strong>Communication and Empathy.</strong> Be assertive and clear when communicating ideas and opinions, value empathy and understanding in professional interactions. </li>
              </ul>         
            </motion.div>
            <motion.div 
              className="about2-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <h3>Work Philosophy</h3>
              <ul>
                <li><strong>Balance between personal and work life</strong> Prioritize a healthy balance between personal and work goals recognizing its positive impact on well-being and performance.</li>
                <li><strong>Flexibility and adaptability.</strong> Have the ability to adapt quickly to new challenges, embracing and accepting them in work and personal environment.</li>
              </ul>
            </motion.div>
          </div>}
          {language === 'es' && <div className="about2-phone-text">
            <motion.div 
              className="about2-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <p>Más allá de mi perfeccionamiento técnico, tengo una profunda pasión por la música y los idiomas. Estudié música en la Universidad Mayor de San Simón, especializándome en canto lírico y piano. Por otro lado, en el aspecto lingüístico, tengo fluidez tanto en español como en inglés, y también he estudiado francés, alemán, portugués e italiano. Actualmente estoy aprendiendo ruso e hindi.</p>           
            </motion.div>
            <motion.div 
              className="about2-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <h3>Valores Profesionales</h3>
              <ul>
                <li><strong>Calidad y Excelencia.</strong> Compromiso con la excelencia en todas las tareas y proyectos, buscando constantemente formas de mejorar y perfeccionar los resultados.</li>
                <li><strong>Aprendizaje continuo.</strong>  Compromiso con el desarrollo profesional a largo plazo, disfrutando adquiriendo nuevos conocimientos y habilidades.</li>
                <li><strong>Comunicación y Empatía.</strong> Ser asertivo y claro al comunicar ideas y opiniones, valorando la empatía y comprensión en las interacciones profesionales.</li>
              </ul>
            </motion.div>
            <motion.div 
              className="about2-text-phone-bc"
              initial='hidden'
              whileInView='visible'
              variants={divVariants}
            >
              <h3>Filosofía de trabajo</h3>
              <ul>
                <li><strong>Equilibrio entre la vida personal y laboral.</strong> Priorizar un equilibrio saludable entre las metas personales y laborales, reconociendo su impacto en el bienestar y desempeño.</li>
                <li><strong>Flexibilidad y Adaptabilidad.</strong> Tener la capacidad de adaptarse ágilmente a nuevos desafíos y aceptarlos en el entorno laboral y personal.</li>
              </ul>
            </motion.div>
          </div>}
        </div>
      </div>
    </section>
  )
}

export default AboutPhone