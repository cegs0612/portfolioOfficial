import React,{useState,useContext} from 'react'
import "./cardPhone.css"
import { LanguageContext } from "../../../context/LanguageContext";
import ProjectModalPhone from "../projectModal/ProjectModalPhone";
import { motion } from "framer-motion";

function CardPhone({projectData}) {
    const {language} = useContext(LanguageContext)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleOpenModal = () =>setIsModalOpen(true)

    const handleCloseModal = () =>    setIsModalOpen(false)

  return (
    <React.Fragment>
      {!isModalOpen && <motion.div 
        className='project-card-phone'
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring', duration:0.75}}
      >
        <h3>{projectData.title}</h3>
        <p>{projectData.stack}</p>
        {<motion.button 
          onClick={handleOpenModal}
          whileTap={{scale:0.9}}
        >{language==='en'? 'more':'más'}</motion.button>}     
    </motion.div>}
      {isModalOpen && <ProjectModalPhone projectData={projectData} closeModal={handleCloseModal} />}
    </React.Fragment>
    
  )
}

export default CardPhone