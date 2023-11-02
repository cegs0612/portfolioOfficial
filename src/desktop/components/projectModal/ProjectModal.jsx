import "./projectModal.css";
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from "../../../context/LanguageContext";
import ProjectGallery from "../projectGallery/ProjectGallery";
import { motion, useAnimate } from "framer-motion";

function ProjectModal({projectData,closeModal}) {
  const {language} = useContext(LanguageContext) 
  const [triggerClose, setTriggerClose] = useState(false)
  const [scope, animate ] = useAnimate()
  //handles closing scenarios
  useEffect(() => {
    const handleKeyDown = (event) =>{
      if(event.key==="Escape") setTriggerClose(true);
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setTriggerClose])

  useEffect(() => {
    const closeProject = async()=>{
      animate(".project-container", {scale:0})
      await animate(scope.current,{opacity:0})
      closeModal()
    }
    if(triggerClose) closeProject()
  }, [triggerClose,animate,scope,closeModal])
  
  //prevents the scroll in the body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])
  

  return (
    <motion.div 
      key='projectModal'
      ref={scope}
      className="project-modal"
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{type:'spring', duration:1}}
    >
      <motion.div 
        className="project-container"
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring', duration:1.5}}
      >
        <motion.button 
          onClick={()=>setTriggerClose(true)} 
          className="close-btn" 
          aria-label={language==="en"?"close":"cerrar"}
          whileHover={{scale:1.5}}
          whileTap={{scale:0.9}}
          transition={{type:'spring', duration:0.5}}
        >X</motion.button>
        <h3>{projectData.title}</h3>
        <ProjectGallery projectData={projectData} />
      </motion.div>
    </motion.div>
  )
}

export default ProjectModal