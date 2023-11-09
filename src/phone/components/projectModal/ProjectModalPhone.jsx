import React,{useContext, useState, useEffect} from 'react'
import './projectModalPhone.css'
import { LanguageContext } from "../../../context/LanguageContext";
import { motion, useAnimate } from "framer-motion";

function ProjectModalPhone({projectData,closeModal}) {
    const {language} = useContext(LanguageContext);
    const [triggerClose, setTriggerClose] = useState(false)
    const [scope, animate] = useAnimate();

    useEffect(() => {
      const closeProject = async()=>{
        animate(".pm-phone-content", {scale:0})
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
      className='projectModal-phone'
      ref={scope}
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{type:'spring', duration:1.5}}
    >
      <motion.button 
        className="close-modal-project-phone"
        onClick={()=>setTriggerClose(true)} 
        aria-label={language==="en"?"close":"cerrar"}
        whileTap={{scale:0.9}}
        transition={{type:'spring', duration:0.5}}
      >X</motion.button>
      <motion.div 
        className="pm-phone-content"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{type:'spring', duration:1.5, delay:0.5}}
      >
          <div className="info-project">
            <h3>{projectData.title}</h3>
            {projectData.description.map((element, index) =>{return<p key={"dp"+index}>{element}</p>})}
            <h3>{language === "en"? "Objectives":"Objetivos"}</h3>
            <ul>
              {projectData.objectives.map((element,index)=>{
                return(
                  <li key={"obj"+index}>{element}</li>
                )
              })}
            </ul>
            {projectData.keyLearnings !== null && <>
              <h3>{language === "en"? "Key Learnings":"Aprendizajes"}</h3>
              <p>{projectData.keyLearnings}</p>
            </>}
            {projectData.notes !== null &&<>
              <h3>{language === "en"? "Notes":"Observaciones"}</h3>
              {projectData.notes.map((element, index) =>{return<p key={"np"+index}>{element}</p>})}
            </>}
          </div>
          {projectData.projectURL!==null && <a
            href={projectData.projectURL}
            target='_blank' 
            rel="noopener noreferrer"
          >{language==="en"?'visit the project':'visita el proyecto'}</a>}
          <div className="images-project">
            {projectData.images.map((image, index)=>{
              return(
                <motion.img 
                  key={'img'+index}
                  src={'/portfolioOfficial'+image.src}
                  alt={image.alt} 
                  initial={{scale:0, opacity:0}}
                  whileInView={{scale:1, opacity:1}}
                  transition={{type:'spring', duration:1.5, bounce:0}}
                />
              )})
            }
          </div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectModalPhone