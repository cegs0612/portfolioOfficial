import './stack.css'
import React,{useContext} from 'react'
import { LanguageContext } from "../../../context/LanguageContext";
import { motion } from "framer-motion";

function Stack() {
  const language = useContext(LanguageContext)
  return (
    <motion.section 
      className="stack page" 
      id='stack'
      initial={{scale:0.7}}
      whileInView={{scale:1}}
      transition={{type:'spring', duration:1}}
    >
      <motion.div 
        className="rectangle"
        initial={{scaleY:0}}
        whileInView={{scaleY:1}}
        transition={{type:'spring',duration:2}}
      ></motion.div>
      <motion.div 
        className="circle1"
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring',duration:2}}
      ></motion.div>
      <h2>Tech Stack</h2>
      <motion.div 
        className="left"
        initial={{scaleY:0}}
        whileInView={{scaleY:1}}
        transition={{type:'spring',duration:2}}
      >
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
      </motion.div>
      <div className="right">
        <motion.img 
          src="/img/stackImage.png" 
          alt={language === 'en' ? "Tech Stack collection" : "colección de tecnologías"}
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{type:'spring',duration:2}} 
        />
      </div>
    </motion.section>
  )
}

export default Stack