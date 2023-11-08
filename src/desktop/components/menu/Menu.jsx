import React, {useContext, useEffect, useState} from 'react'
import "./menu.css";
import { LanguageContext } from '../../../context/LanguageContext';
import useCurrentSection from "../../../hooks/useCurrentSection";
import { motion, useAnimate, AnimatePresence } from "framer-motion";

//returns the active class if the params match
function isMenuItemActive(menuItem,currentSection) {
  if(currentSection==="about2") currentSection="about";
  return menuItem === currentSection? 'item-active' : ''
}
//text of the menu
const textMenuEnglish = [
  {
    href: "#landing",
    ariaLabel: "Go to intro",
    class: "landing",
    text: "INTRO"
  },
  {
    href: "#about",
    ariaLabel: "Go to about me",
    class: "about",
    text: "ABOUT ME"
  },
  {
    href: "#stack",
    ariaLabel: "Go to tech stack",
    class: "stack",
    text: "TECH STACK"
  },
  {
    href: "#projects",
    ariaLabel: "Go to projects",
    class: "projects",
    text: "PROJECTS"
  },
  {
    href: "#contact",
    ariaLabel: "Go to contact",
    class: "contact",
    text: "CONTACT"
  },
  
]
const textMenuSpanish = [
  {
    href: "#landing",
    ariaLabel: "Ir a inicio",
    class: "landing",
    text: "INICIO"
  },
  {
    href: "#about",
    ariaLabel: "Ir a sobre mí",
    class: "about",
    text: "SOBRE MÍ"
  },
  {
    href: "#stack",
    ariaLabel: "Ir a tech stack",
    class: "stack",
    text: "TECH STACK"
  },
  {
    href: "#projects",
    ariaLabel: "Ir a proyectos",
    class: "projects",
    text: "PROYECTOS"
  },
  {
    href: "#contact",
    ariaLabel: "Ir a contacto",
    class: "contact",
    text: "CONTACTO"
  },
  
]

function Menu({closeMenu}) {
  const { language, setLanguage} = useContext(LanguageContext)
  const currentSection = useCurrentSection();
  const [menuActiveItem, setMenuActiveItem] = useState(currentSection);
  const [scope, animate] = useAnimate()
  const [triggerUnmount, setTriggerUnmount] = useState(false)
  
  //sets the current section to the state
  useEffect(() => {
    setMenuActiveItem(currentSection)
  }, [currentSection])

  //handles the close Menu scenarios
  const handleModalClick = ()=>setTriggerUnmount(true); 

  useEffect(() => {
    const handleKeyDown = (event) =>{
      if(event.key==="Escape") setTriggerUnmount(true);
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setTriggerUnmount])
  
  //handles exit animations
  useEffect(() => {
    const exitAnimation = async()=>{
      await animate('#nav-menu', {opacity:0, right:-500})
      await animate(scope.current, {opacity: 0, left: '100vw'})
      closeMenu()
    }
    if(triggerUnmount)exitAnimation()
  }, [triggerUnmount, scope, animate,closeMenu])

  //prevents the scroll in the body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])
  
  return (
    <AnimatePresence>
      <motion.div 
        ref={scope}
        className="modal" 
        onClick={handleModalClick}
        initial={{ opacity: 0, left: '100%'}}
        animate={{opacity:1, left:0}}
        transition={{type:'spring',duration:1}}
        > 
        <motion.nav 
          id='nav-menu'
          className='nav-menu'
          initial={{opacity:0, right: -500}} 
          animate={{opacity:1, right:0}}
          transition={{type:'spring',duration:2, bounce:0}}
          >
          <section className="buttons-section">
            <div className="lang-btn">
              <motion.button 
                className={language==="en"?"lang-selection":""} 
                onClick={()=>setLanguage("en")} 
                aria-label={language==="en"?"english":"inglés"}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
              >EN</motion.button>
              <motion.button 
                className={language==="es"?"lang-selection":""} 
                onClick={()=>setLanguage("es")}
                aria-label={language==="en"?"spanish":"español"}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.9}}
              >ES</motion.button>
            </div>
            <motion.button 
              onClick={()=>setTriggerUnmount(true)} 
              aria-label={language==="en"?"close navigation menu":"cerrar el menú de navegación"}
              whileHover={{scale:1.5}}
              whileTap={{scale:0.9}}
            >
              <span className="material-symbols-outlined">close</span>
            </motion.button>
          </section>
          <section className="nav-list">
            <ul>
              {language==='en'&& textMenuEnglish.map((element, index)=>{
                return(
                  <motion.li 
                    key={'liMenu'+index}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    transition={{type:'spring', duration:1}}
                  >
                    <a 
                      href={element.href} 
                      onClick={closeMenu} 
                      aria-label={element.ariaLabel} 
                      className={isMenuItemActive(element.class,menuActiveItem)}
                    >{element.text}</a>
                  </motion.li > 
              )})}
              {language==='es'&& textMenuSpanish.map((element, index)=>{
                return(
                  <motion.li 
                    key={'liMenu'+index}
                    whileHover={{scale:1.1}}
                    whileTap={{scale:0.9}}
                    transition={{type:'spring', duration:1}}
                  >
                    <a 
                      href={element.href} 
                      onClick={closeMenu} 
                      aria-label={element.ariaLabel} 
                      className={isMenuItemActive(element.class,menuActiveItem)}
                    >{element.text}</a>
                  </motion.li >  
              )})}
            </ul>
          </section>
          <section className="linkedIn-link">
            <a 
              href="http://www.linkedin.com/in/carlos-eduardo-gutiérrez-sánchez-6028a97b" 
              aria-label={language==="en"?"go to Carlos Gutiérrez LinkedIn page":"ir a la página de LinkedIn de Carlos Gutiérrez"} 
              target='_blank' 
              rel="noopener noreferrer"
            >
              <motion.img 
                src="/icons/linkedinIcon.svg" 
                alt='linkedin icon'
                className='imgLinkedIn'
                whileHover={{scale:1.5}}
                whileTap={{scale:0.9}} 
                transition={{type:'spring',duration:1}}
              />
            </a>
          </section>
        </motion.nav>
      </motion.div>
    </AnimatePresence>
          
  )
}

export default Menu