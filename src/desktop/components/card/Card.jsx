import React,{useState,useContext} from 'react'
import "./card.css";
import ProjectModal from "../projectModal/ProjectModal";
import { LanguageContext } from "../../../context/LanguageContext";
import { motion } from "framer-motion";

function Card({projectData}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {language} = useContext(LanguageContext)

  const handleOpenModal = () => setIsModalOpen(true)

  const handleCloseModal = () => setIsModalOpen(false)
  
  return (
    <React.Fragment>
      {!isModalOpen && <motion.div 
          className='project-card'
          initial={{scale:0}}
          whileInView={{scale:1}}
          whileHover={{scale:1.15}}
          transition={{type:'spring', duration:0.75}}
        >
          <h3>{projectData.title}</h3>
          <p>{projectData.stack}</p>
          {<motion.button
            onClick={handleOpenModal}
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            transition={{type:'spring', duration:0.5}} 
          >
          {language==='en'? "more":"más"}</motion.button>}    
      </motion.div>} 
      {isModalOpen && <ProjectModal projectData={projectData} closeModal={handleCloseModal} />}
    </React.Fragment>
    
  )
}

export default Card