import React, {useContext, useEffect, useState} from 'react'
import './navbarPhone.css'
import { LanguageContext } from "../../../context/LanguageContext";
import { motion, useAnimate } from "framer-motion";

function NavbarPhone({openMenu}) {
    const {language} = useContext(LanguageContext)
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
        <a 
            href="#landing" 
            aria-label={language === "es"? "Ir a inicio" : "Go to intro"}
        >Carlos Eduardo Gutiérrez Sánchez</a>

        <motion.button 
            onClick={()=>{setTriggerUnmount(true)}}
            aria-label={language==="en"? "Open navegation menu":"Abrir menú de navegación"}
            initial={{scale:0.5}}
            animate={{scale:1.2}}
            whileTap={{scale:0.8}}
        >
            <span className="material-symbols-outlined">menu</span>
        </motion.button>
    </motion.header>
  )
}

export default NavbarPhone