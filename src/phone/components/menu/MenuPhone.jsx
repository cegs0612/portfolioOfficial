import React,{useContext,useState,useEffect} from 'react'
import './menuPhone.css'
import { LanguageContext } from "../../../context/LanguageContext";
import useCurrentSection from "../../../hooks/useCurrentSection";
import {motion, AnimatePresence, useAnimate} from "framer-motion"


//returns the active class if the params match
function isMenuItemActive(menuItem,currentSection) {
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


function MenuPhone({closeMenu}) {
  const {language, setLanguage} = useContext(LanguageContext)
  const currentSection = useCurrentSection();
  const [menuActiveItem, setMenuActiveItem] = useState(currentSection);
  const [scope, animate] = useAnimate()
  const [triggerUnmount, setTriggerUnmount] = useState(false)
  
  //sets the current section to the state
  useEffect(() => {
    setMenuActiveItem(currentSection)
  }, [currentSection])

  //prevents the scroll in the body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [])
  //handles enter and exit animations
  useEffect(() => {
    const exitAnimation = async()=>{
      await animate("section",{opacity:0})
      await animate(scope.current, {opacity:0 , left: "100%"})
      closeMenu()
    }
    if(triggerUnmount)exitAnimation()  
  }, [triggerUnmount,animate,scope,closeMenu])
  
  
  return (
    <AnimatePresence>
      <motion.nav 
        ref={scope}
        className='menu-phone'
        initial={{opacity: 0, left: '100%'}}
        animate={{opacity:1, left:0}}
        //exit={{clipPath:"circle(1px at 80% 5%)"}}
        transition={{type:'spring', bounce:0, duration:1.5}}
      >
        <motion.section 
          className="buttons-section"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{type:'spring', bounce:0, duration:1}}
        >
          <div className="language-btns">
            <button 
              className={language==="en"?"lang-selection":""} 
              onClick={()=>setLanguage("en")} 
              aria-label={language==="en"?"english":"inglés"}
            >EN</button>
            <button 
              className={language==="es"?"lang-selection":""} 
              onClick={()=>setLanguage("es")} 
              aria-label={language==="en"?"spanish":"español"}
            >ES</button>            
          </div>
          <motion.button 
            onClick={()=>setTriggerUnmount(true)} 
            aria-label={language==="en"?"close navigation menu":"cerrar el menú de navegación"}
            initial={{scale:0.5}}
            animate={{scale:1.5}}
            whileTap={{scale:0.9}}
          >
            <span className="material-symbols-outlined">close</span>
          </motion.button>
        </motion.section>
        <motion.section 
          className="nav-list"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{type:'spring', bounce:0, duration:1}}
        >
          <ul>
            {language==='en'&& textMenuEnglish.map((element, index)=>{
              return(
                <motion.li 
                  key={'liMenu'+index}
                  whileTap={{scale:0.9}}
                  transition={{type:'spring', duration:1}}
                >
                  <a 
                    href={element.href} 
                    onClick={()=>setTriggerUnmount(true)} 
                    aria-label={element.ariaLabel} 
                    className={isMenuItemActive(element.class,menuActiveItem)}
                  >{element.text}</a>
                </motion.li > 
            )})}
            {language==='es'&& textMenuSpanish.map((element, index)=>{
              return(
                <motion.li 
                  key={'liMenu'+index}
                  whileTap={{scale:0.9}}
                  transition={{type:'spring', duration:1}}
                >
                  <a 
                    href={element.href} 
                    onClick={()=>setTriggerUnmount(true)} 
                    aria-label={element.ariaLabel} 
                    className={isMenuItemActive(element.class,menuActiveItem)}
                  >{element.text}</a>
                </motion.li >  
            )})}  
          </ul>
        </motion.section>
        <motion.section 
          className="bottom-section"
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{type:'spring', bounce:0, duration:1}}
        >
          <a 
            href="tel:+15714362731" 
            aria-label={language==="es"? "Llamar al teléfono" : "Call to phone"}
          >+1(571)436 2731</a>
          <a 
            href="mailto:ce_gs@hotmail.com" 
            aria-label={language==="es"? "Enviar correo electrónico" : "Send email to"}
          >ce_gs@hotmail.com</a>
          <a 
            href="http://www.linkedin.com/in/carlos-eduardo-gutiérrez-sánchez-6028a97b" 
            aria-label={language==="en"?"go to Carlos Gutiérrez LinkedIn page":"ir a la página de LinkedIn de Carlos Gutiérrez"} 
            target='_blank' 
            rel="noopener noreferrer"
          >
            <img src="/portfolioOfficial/icons/linkedinIcon.svg" alt='linkedin icon' />
          </a>
        </motion.section>
      </motion.nav>
    </AnimatePresence>
  )
}

export default MenuPhone