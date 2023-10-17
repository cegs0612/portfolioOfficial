import './stack.css'
import React,{useContext} from 'react'
import { LanguageContext } from "../../context/LanguageContext";

function Stack() {
  const language = useContext(LanguageContext)
  return (
    <section className="stack page" id='stack'>
      <div className="rectangle"></div>
      <div className="circle1"></div>
      <h2>Tech Stack</h2>
      <div className="left">
        <div className="stack-card first">
          <img src="/img/stackFrontEndImage.png" alt={language === 'en' ? "front end icon" : "ícono de front end"} />
          <h5>Front End</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="stack-card second">
        <img src="/img/stackBackEndImage.png" alt={language === 'en' ? "back end icon" : "ícono de back end"} />
          <h5>Back End</h5>
          <ul>
            <li>Node JS</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="stack-card third">
        <img src="/img/stackDBImage.png" alt={language === 'en' ? "database icon" : "ícono de base de datos"} />
          <h5>Database Management</h5>
          <ul>
            <li>MySQL</li>
            <li>XAMPP</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <img src="/img/stackImage.png" alt={language === 'en' ? "Tech Stack collection" : "colección de tecnologías"} />
      </div>
    </section>
  )
}

export default Stack