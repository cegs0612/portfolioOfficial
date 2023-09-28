import React, {useContext, useEffect} from 'react'
import "./menu.css";
import { LanguageContext } from '../../context/LanguageContext';
import useCurrentSection from "../../hooks/useCurrentSection";


function Menu({closeMenu}) {
  const { language, setLanguage} = useContext(LanguageContext)
  const currentSection = useCurrentSection();
  
  useEffect(() => {
    const menuItems = document.querySelectorAll('.menuItem')
    
    menuItems.forEach(element => {
      element.classList.remove('item-active');  
    });
    
    for (let i = 0; i < menuItems.length; i++) {
      const element = menuItems[i];
      const href = element.getAttribute('href').slice(1);
      if ((currentSection === 'about' || currentSection === 'about2') && (href === 'about' || href === 'about2')) {
        element.classList.add('item-active');
      } else if (href === currentSection) {
        element.classList.add('item-active');
  }
    }
    return () =>{
      menuItems.forEach(element => {
        element.classList.remove('item-active');  
      });
    }
  }, [currentSection])
  
  return (
    <div className="modal">
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
            <li><a href="#landing" onClick={()=>closeMenu()} aria-label="Go to intro" className='menuItem' >INTRO</a></li>
            <li><a href="#about" onClick={()=>closeMenu()} aria-label="Go to about me" className='menuItem'>ABOUT ME</a></li>
            <li><a href="#stack" onClick={()=>closeMenu()} aria-label="Go to tech stack" className='menuItem'>TECH STACK</a></li>
            <li><a href="#projects" onClick={()=>closeMenu()} aria-label="Go to projects" className='menuItem'>PROJECTS</a></li>
            <li><a href="#contact" onClick={()=>closeMenu()} aria-label="Go to contact" className='menuItem'>CONTACT</a></li>
          </ul>}
          {language==="es"&&<ul>
            <li><a href="#landing" onClick={()=>closeMenu()} aria-label="Ir a inicio" className='menuItem'>INICIO</a></li>
            <li><a href="#about" onClick={()=>closeMenu()} aria-label="Ir a sobre me" className='menuItem'>SOBRE MÍ</a></li>
            <li><a href="#stack" onClick={()=>closeMenu()} aria-label="Ir a tech stack" className='menuItem'>TECH STACK</a></li>
            <li><a href="#projects" onClick={()=>closeMenu()} aria-label="Ir a proyectos" className='menuItem'>PROYECTOS</a></li>
            <li><a href="#contact" onClick={()=>closeMenu()} aria-label="Ir a contacto" className='menuItem'>CONTACTO</a></li>
          </ul>}
        </section>
        <section className="linkedIn-link">
          <a href="http://www.linkedin.com/in/carlos-eduardo-gutiérrez-sánchez-6028a97b" aria-label={language==="en"?"go to Carlos Gutiérrez LinkedIn page":"ir a la página de LinkedIn de Carlos Gutiérrez"} target='_blank'>
            <img src="/icons/linkedinIcon.svg" alt='linkedin icon' />
          </a>
        </section>
      </nav>
    </div>
  )
}

export default Menu