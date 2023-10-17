import React,{useState,useContext} from 'react'
import "./card.css";
import ProjectModal from "../projectModal/ProjectModal";
import { LanguageContext } from "../../context/LanguageContext";

function Card({projectData}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {language} = useContext(LanguageContext)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }
  
  return (
    <div className='project-card'>
        <h3>{projectData.title}</h3>
        <p>{projectData.stack}</p>
        {language==="en"&&<button onClick={handleOpenModal}>more</button>}
        {language==="es"&&<button onClick={handleOpenModal}>más</button>}

        {isModalOpen && <ProjectModal projectData={projectData} closeModal={handleCloseModal} />}
    </div>
  )
}

export default Card