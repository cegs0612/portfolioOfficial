import './projects.css'
import React, {useContext} from 'react'
import { LanguageContext } from "../../../context/LanguageContext";
import { projectsDataEng, projectsDataSpa } from "../../../data/projectsData";
import Card from "../../components/card/Card";
import { motion } from "framer-motion";

function Projects() {
const {language} = useContext(LanguageContext)
  return (
    <motion.section 
      className="projects page" 
      id='projects'
      initial={{opacity:0.5}}
      whileInView={{opacity:1}}
      transition={{type:'spring', duration:1}}
    >
      <motion.div 
        className="circle-project-desktop"
        initial={{clipPath:"circle(20% at 25% 75%)"}}
        whileInView={{clipPath:"circle(60% at 25% 75%)"}}
        transition={{type:'spring', duration:2}}
      ></motion.div>
      
      {language === 'en' && <h2>Projects</h2>}
      {language === 'es' && <h2>Proyectos</h2>}
      
      {language === 'en' && <div className="projects-container">
        {projectsDataEng.map((element, index)=>{
          return(
          <React.Fragment key={'p'+index}>
            <Card projectData = {element} />
          </React.Fragment>)
        })}
      </div>}
      {language === 'es' && <div className="projects-container">
        {projectsDataSpa.map((element, index)=>{
          return(
          <React.Fragment key={'p'+index}>
            <Card projectData = {element} />
          </React.Fragment>)
        })}
      </div>}
    </motion.section>
  )
}

export default Projects