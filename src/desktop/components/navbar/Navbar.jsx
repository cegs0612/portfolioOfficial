import React , {useContext, useState, useEffect} from 'react';
import "./navbar.css";
import { LanguageContext } from "../../../context/LanguageContext";
import { motion , useAnimate} from "framer-motion";

function Navbar({openMenu}) {
  const language = useContext(LanguageContext)
  const [scope , animate] = useAnimate();
  const [triggerUnmount, setTriggerUnmount] = useState(false)
  
  useEffect(() => {
    const exitAnimation = async()=>{
      await animate(scope.current, {top:'-100%', opacity:0})
      openMenu()
    }
    if(triggerUnmount)exitAnimation()
  }, [triggerUnmount, scope, animate, openMenu])
  

  return (
    <motion.header 
      className='navbar'
      ref={scope}
      initial={{top:'-100%', opacity:0}}
      animate={{top:0, opacity:1}}
      transition={{type:'spring',duration:1, bounce:0}}
    >
      <a href="#landing" aria-label={language === "es"? "Ir a inicio" : "Go to intro"}>Carlos Eduardo Gutiérrez Sánchez</a>
      <div className="links">
        <a href="tel:+15714362731" aria-label={language==="es"? "Llamar al teléfono" : "Call to phone"}>+1(571)436 2731</a>
        <p>/</p>
        <a href="mailto:ce_gs@hotmail.com" aria-label={language==="es"? "Enviar correo electrónico" : "Send email to"}>ce_gs@hotmail.com</a>
      </div>
      <motion.button 
        onClick={()=>{setTriggerUnmount(true)}} 
        aria-label={language==="es"? "Abrir menú de navegación" : "Open navegation menu"}
        initial={false}
        whileHover={{scale: 1.5}}
        whileTap={{scale: 0.9, rotate:180}}
      >
        <span className="material-symbols-outlined">menu</span>
      </motion.button>
    </motion.header>
  )
}

export default Navbar