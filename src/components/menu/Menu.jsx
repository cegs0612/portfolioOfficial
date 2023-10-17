import React, {useContext, useEffect, useState} from 'react'
import "./menu.css";
import { LanguageContext } from '../../context/LanguageContext';
import useCurrentSection from "../../hooks/useCurrentSection";

//returns the active class if the params match
function isMenuItemActive(menuItem,currentSection) {
  return menuItem === currentSection? 'item-active' : ''
}


function Menu({closeMenu}) {
  const { language, setLanguage} = useContext(LanguageContext)
  const currentSection = useCurrentSection();
  const [menuActiveItem, setMenuActiveItem] = useState(currentSection);
  
  //sets the current section to the state
  useEffect(() => {
    setMenuActiveItem(currentSection)
  }, [currentSection])

  //handles the closeMenu scenarios
  const handleModalClick = () => closeMenu();

  useEffect(() => {
    const handleKeyDown = (event) =>{
      if(event.key==="Escape") closeMenu();
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeMenu])
  
  return (
    <div className="modal" onClick={handleModalClick}>
      <nav className='nav-menu'>
        <section className="buttons-section">
          <div className="lang-btn">
            <button className={language==="en"?"lang-selection":""} onClick={()=>setLanguage("en")} aria-label={language==="en"?"english":"inglés"}>EN</button>
            <button className={language==="es"?"lang-selection":""} onClick={()=>setLanguage("es")} aria-label={language==="en"?"spanish":"español"}>ES</button>
          </div>
          <button onClick={()=>closeMenu()} aria-label={language==="en"?"close navigation menu":"cerrar el menú de navegación"}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </section>
        <section className="nav-list">
          {language==="en"&&<ul>
            <li><a href="#landing" onClick={()=>closeMenu()} aria-label="Go to intro" className={isMenuItemActive("landing",menuActiveItem)} >INTRO</a></li>
            <li><a href="#about" onClick={()=>closeMenu()} aria-label="Go to about me" className={menuActiveItem==="about"||menuActiveItem==="about2"?'item-active':""}>ABOUT ME</a></li>
            <li><a href="#stack" onClick={()=>closeMenu()} aria-label="Go to tech stack" className={isMenuItemActive("stack",menuActiveItem)}>TECH STACK</a></li>
            <li><a href="#projects" onClick={()=>closeMenu()} aria-label="Go to projects" className={isMenuItemActive("projects",menuActiveItem)}>PROJECTS</a></li>
            <li><a href="#contact" onClick={()=>closeMenu()} aria-label="Go to contact" className={isMenuItemActive("contact",menuActiveItem)}>CONTACT</a></li>
          </ul>}
          {language==="es"&&<ul>
            <li><a href="#landing" onClick={()=>closeMenu()} aria-label="Ir a inicio" className={isMenuItemActive("landing",menuActiveItem)}>INICIO</a></li>
            <li><a href="#about" onClick={()=>closeMenu()} aria-label="Ir a sobre me" className={menuActiveItem==="about"||menuActiveItem==="about2"?'item-active':""}>SOBRE MÍ</a></li>
            <li><a href="#stack" onClick={()=>closeMenu()} aria-label="Ir a tech stack" className={isMenuItemActive("stack",menuActiveItem)}>TECH STACK</a></li>
            <li><a href="#projects" onClick={()=>closeMenu()} aria-label="Ir a proyectos" className={isMenuItemActive("projects",menuActiveItem)}>PROYECTOS</a></li>
            <li><a href="#contact" onClick={()=>closeMenu()} aria-label="Ir a contacto" className={isMenuItemActive("contact",menuActiveItem)}>CONTACTO</a></li>
          </ul>}
        </section>
        <section className="linkedIn-link">
          <a href="http://www.linkedin.com/in/carlos-eduardo-gutiérrez-sánchez-6028a97b" aria-label={language==="en"?"go to Carlos Gutiérrez LinkedIn page":"ir a la página de LinkedIn de Carlos Gutiérrez"} target='_blank' rel="noopener noreferrer">
            <img src="/icons/linkedinIcon.svg" alt='linkedin icon' />
          </a>
        </section>
      </nav>
    </div>
  )
}

export default Menu