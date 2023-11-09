import React, {useContext} from 'react';
import "./stackPhone.css";
import { LanguageContext } from "../../../context/LanguageContext";
import { motion } from "framer-motion";

function StackPhone() {
  const {language} = useContext(LanguageContext)
  return (
    <section className="stack-phone page" id='stack'>
      <div className="stack1-phone">
        <motion.div 
          className="circle"
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{type:'spring',duration:2}}
        ></motion.div>
        <h2>Tech Stack</h2>
        <div className="img-container-stack-phone">
          <motion.img 
            src="/portfolioOfficial/img/stackImage.png" 
            alt={language === 'en' ? "Tech Stack collection" : "colección de tecnologías"} 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{type:'spring',duration:2}}
          />
        </div>
      </div>
      <motion.div 
        className="stack2-phone"
        initial={{scaleY:0}}
        whileInView={{scaleY:1}}
        transition={{type:'spring',duration:1.5, bounce:0}}
      >
        <div className="stack-card-phone">
          <img src="/portfolioOfficial/img/stackFrontEndImage.png" alt={language === 'en' ? "front end icon" : "ícono de front end"} />
          <h5>Front End</h5>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="stack-card-phone">
          <img src="/portfolioOfficial/img/stackBackEndImage.png" alt={language === 'en' ? "back end icon" : "ícono de back end"} />
          <h5>Back End</h5>
          <ul>
            <li>Node JS</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="stack-card-phone">
          <img src="/portfolioOfficial/img/stackDBImage.png" alt={language === 'en' ? "database icon" : "ícono de base de datos"} />
          <h5>Database Management</h5>
          <ul>
            <li>MySQL</li>
            <li>XAMPP</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default StackPhone