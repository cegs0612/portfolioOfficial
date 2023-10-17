import React,{useContext,useState} from 'react';
import "./projectGallery.css";
import { LanguageContext } from "../../context/LanguageContext";

function ProjectGallery({projectData}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const {language} = useContext(LanguageContext)
  const imagesLength = projectData.images.length;
 
  const prevSlide = () => {
    setCurrentSlide(prevState => prevState === 0 ? imagesLength : prevState-1);
  }

  const nextSlide = () => {
    setCurrentSlide(prevState => prevState === imagesLength ? 0 : prevState+1);
  }

  return (
    <div className="project-gallery">
              <div className="slide-container">
                <div 
                  key={"s"+0}
                  className={currentSlide===0? "slide first":"slide"}>
                  <section className="project-info">
                    <p>{projectData.description}</p>
                    <h3>{language === "en"? "Objectives":"Objetivos"}</h3>
                    <ul>
                      {projectData.objectives.map((element,index)=>{
                        return(
                          <li key={"obj"+index}>{element}</li>
                        )
                      })}
                    </ul>
                    <h3>{language === "en"? "Key Learnings":"Aprendizajes"}</h3>
                    <p>{projectData.keyLearnings}</p>
                    {projectData.notes !== null &&<>
                      <h3>{language === "en"? "Notes":"Observaciones"}</h3>
                      <p>{projectData.notes}</p>
                    </>}
                  </section>
                  <section className="project-calltoaction">
                    <img src={projectData.images[0].src} alt={projectData.images[0].alt} />
                    {language==="en"&&<button>visit the project</button>}
                    {language==="es"&&<button>visita el projecto</button>}
                  </section>
                </div>
                {projectData.images.map((image, index)=>{
                  return(
                  <div className={currentSlide===index+1? "slide slide-active":"slide"} key={"s"+(index+1)}>
                    <img src={image.src} alt={image.alt} />                    
                  </div>)
                })}
              </div>
              <div className="slide-bar">
                <button onClick={prevSlide}>&lt;</button>

                <div className={currentSlide===0? "circle-tab ct-active":"circle-tab"} key={"ct"+0}></div>

                {projectData.images.map((_, index)=>{
                  return(
                  <div className={currentSlide===index+1? "circle-tab ct-active":"circle-tab"} key={"ct"+(index+1)}></div>)
                })}

                <button onClick={nextSlide}>&gt;</button>
              </div>
            </div>
  )
}

export default ProjectGallery