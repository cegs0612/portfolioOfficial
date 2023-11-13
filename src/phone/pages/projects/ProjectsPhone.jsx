import React, {useContext} from 'react'
import  "./projectsPhone.css";
import { LanguageContext } from "../../../context/LanguageContext";
import { projectsDataEng,projectsDataSpa } from "../../../data/projectsData";
import CardPhone from "../../components/card/CardPhone";
import { motion } from "framer-motion";

function ProjectsPhone() {
  const {language} = useContext(LanguageContext)
  return (
    <section className="projects-phone page" id='projects'>
      {language === 'en' && <h2>Projects</h2>}
      {language === 'es' && <h2>Proyectos</h2>}
      {language === 'en' && <div className="projects-container-phone">
        {projectsDataEng.map((element, index)=>{
          return(
          <React.Fragment key={'p'+index}>
            <CardPhone projectData = {element} />
          </React.Fragment>)
        })}
      </div>}
      {language === 'es' && <div className="projects-container-phone">
        {projectsDataSpa.map((element, index)=>{
          return(
          <React.Fragment key={'p'+index}>
            <CardPhone projectData = {element} />
          </React.Fragment>)
        })}
      </div>}
      <motion.div 
        className="circle-projects-phone"
        initial={{clipPath:"circle(20% at 0% 100%)"}}
        whileInView={{clipPath:"circle(60% at 35% 80%)"}}
        transition={{type:'spring', duration:2}}
      ></motion.div>
    </section>
  )
}

export default ProjectsPhone