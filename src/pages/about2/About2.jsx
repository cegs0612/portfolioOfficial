import './about2.css'
import React, {useContext} from 'react'
import { LanguageContext } from "../../context/LanguageContext";

function About2() {
  const {language} = useContext(LanguageContext)
  return (
    <section className="about about2 page" id='about2'>
      <div className="circle1"></div>
      <div className="circle2"></div>
      {language === 'en' && <div className="about2-text">
        <div className='first'>
          <p>Beyond my technical pursuits, I'm deeply passionate about music and languages. I studied music at San Simon University, specializing in lyric singing and piano. On the linguistic front, I'm fluent in both Spanish and English, and I've also acquired proficiency in French, German, Portuguese, and some Italian. Currently, I'm dedicated to learning Russian and Hindi, continually expanding my horizons.</p>
        </div>
        <div className='second'>
          <h3>Professional Values</h3>
          <ul>
            <li><strong>Quality and Excellence</strong>. Commitment to excellence in all tasks and projects constantly seeking ways to improve and refine results.</li>
            <li><strong>Continuous Learning</strong>. Commitment to lifelong professional development enjoying acquiring new knowledge and skills.</li>
            <li><strong>Communication and Empathy.</strong> Be assertive and clear when communicating ideas and opinions, value empathy and understanding in professional interactions. </li>
          </ul>
        </div>
        <div className='third'>
          <h3>Work Philosophy</h3>
          <ul>
            <li><strong>Balance between personal and work life</strong> Prioritize a healthy balance between personal and work goals recognizing its positive impact on well-being and performance.</li>
            <li><strong>Flexibility and adaptability.</strong> Have the ability to adapt quickly to new challenges, embracing and accepting them in work and personal environment.</li>
          </ul>
        </div>
      </div>}
      {language === 'es' && <div className="about2-text">
        <div className='first'>
          <p>Más allá de mi perfeccionamiento técnico, tengo una profunda pasión por la música y los idiomas. Estudié música en la Universidad Mayor de San Simón, especializándome en canto lírico y piano. Por otro lado, en el aspecto lingüístico, tengo fluidez tanto en español como en inglés, y también he estudiado francés, alemán, portugués e italiano. Actualmente estoy aprendiendo ruso e hindi. </p>
        </div>
        <div className='second'>
          <h3>Valores Profesionales</h3>
          <ul>
            <li><strong>Calidad y Excelencia.</strong> Compromiso con la excelencia en todas las tareas y proyectos, buscando constantemente formas de mejorar y perfeccionar los resultados.</li>
            <li><strong>Aprendizaje continuo.</strong>  Compromiso con el desarrollo profesional a largo plazo, disfrutando adquiriendo nuevos conocimientos y habilidades.</li>
            <li><strong>Comunicación y Empatía.</strong> Ser asertivo y claro al comunicar ideas y opiniones, valorando la empatía y comprensión en las interacciones profesionales.</li>
          </ul>
        </div>
        <div className='third'>
          <h3>Filosofía de trabajo</h3>
          <ul>
            <li><strong>Equilibrio entre la vida personal y laboral.</strong> Priorizar un equilibrio saludable entre las metas personales y laborales, reconociendo su impacto en el bienestar y desempeño.</li>
            <li><strong>Flexibilidad y Adaptabilidad.</strong> Tener la capacidad de adaptarse ágilmente a nuevos desafíos y aceptarlos en el entorno laboral y personal.</li>
          </ul>
        </div>
      </div>}
    </section>
  )
}

export default About2