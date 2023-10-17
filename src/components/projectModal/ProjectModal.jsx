import "./projectModal.css";
import React, { useContext } from 'react'
import { LanguageContext } from "../../context/LanguageContext";
import ProjectGallery from "../projectGallery/ProjectGallery";

function ProjectModal({projectData,closeModal}) {
  const {language} = useContext(LanguageContext) 
  return (
    <div className="project-modal">
        <div className="project-container">
            <button onClick={closeModal} className="close-btn" aria-label={language==="en"?"close":"cerrar"}>X</button>
            <h3>{projectData.title}</h3>
            <ProjectGallery projectData={projectData} />
        </div>
    </div>
  )
}

export default ProjectModal