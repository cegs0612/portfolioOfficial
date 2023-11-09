import React,{useContext,useState} from 'react';
import "./projectGallery.css";
import { LanguageContext } from "../../../context/LanguageContext";
import {motion,useAnimate} from "framer-motion";

function ProjectGallery({projectData}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const {language} = useContext(LanguageContext)
  const imagesLength = projectData.images.length;
  const [scope, animate] = useAnimate();

  const prevSlide = async () => {
    const currentId = String("#s"+currentSlide)
    await animate(currentId, {opacity:0, scale:0})
    setCurrentSlide(prevState => prevState === 0 ? imagesLength : prevState-1);
  }

  const nextSlide = async() => {
    const currentId = String("#s"+currentSlide)
    await animate(currentId, {opacity:0, scale:0})
    setCurrentSlide(prevState => prevState === imagesLength ? 0 : prevState+1);
  }  

  return (
    <div className="project-gallery" >
      <div className="slide-container" ref={scope}>
        <motion.div 
          key={"s"+0}
          id={'s'+0}
          className={currentSlide===0? "slide first":"slide"}
          initial={{scale:0, opacity:0}}
          whileInView={{scale:1, opacity:1}}
          transition={{type:'spring', duration:1.5}}
        >
          <section className="project-info">
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
          </section>
          <section className="project-calltoaction">
            <img src={'/portfolioOfficial'+projectData.images[0].src} alt={projectData.images[0].alt} />
            {projectData.projectURL!==null && <motion.a
              href={projectData.projectURL}
              target='_blank' 
              rel="noopener noreferrer"
              whileHover={{scale:1.1}}
              whileTap={{scale:0.9}}
            >{language==="en"?'visit the project':'visita el proyecto'}</motion.a>}
          </section>
        </motion.div>
        {projectData.images.map((image, index)=>{
          return(
          <motion.div 
            className={currentSlide===index+1? "slide slide-active":"slide"} 
            key={"s"+(index+1)}
            id={"s"+(index+1)}
            initial={{scale:0, opacity:0}}
            whileInView={{scale:1, opacity:1}}
            transition={{type:'spring', duration:1.5}}
          >
            <img src={'/portfolioOfficial'+image.src} alt={image.alt} /> 
          </motion.div>)
        })}
      </div>
      <div className="slide-bar">
        <motion.button 
          onClick={prevSlide}
          whileHover={{scale:1.5}}
          whileTap={{scale:0.9}}
        >&lt;</motion.button>

        <motion.div 
          className={currentSlide===0? "circle-tab ct-active":"circle-tab"} 
          onClick={()=>setCurrentSlide(0)}
          key={"ct"+0}
          whileHover={{scale:2}}
          whileTap={{scale:0.9}}
          transition={{type:'spring', duration:0.2}}
        ></motion.div>

        {projectData.images.map((_, index)=>{
          return(
          <motion.div 
            className={currentSlide===index+1? "circle-tab ct-active":"circle-tab"} 
            key={"ct"+(index+1)}
            onClick={()=>setCurrentSlide(index+1)}
            whileHover={{scale:1.5}}
            whileTap={{scale:0.9}}
            transition={{type:'spring', duration:0.5}}
          ></motion.div>)
        })}

        <motion.button 
          onClick={nextSlide}
          whileHover={{scale:1.5}}
          whileTap={{scale:0.9}}
        >&gt;</motion.button>
      </div>
    </div>
  )
}

export default ProjectGallery