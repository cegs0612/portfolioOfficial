import './projects.css'
import React, {useContext} from 'react'
import { LanguageContext } from "../../context/LanguageContext";
import { projectsDataEng, projectsDataSpa } from "../../data/projectsData";
import Card from "../../components/card/Card";


function Projects() {
const {language} = useContext(LanguageContext)
  return (
    <section className="projects page" id='projects'>
      <div className="circle"></div>
      
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
    </section>
  )
}

export default Projects