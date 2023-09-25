import React ,{useContext} from 'react';
import "./navbar.css";
import { LanguageContext } from "../../context/LanguageContext";

function Navbar({openMenu}) {

  const language = useContext(LanguageContext)

  return (

    <header className='navbar'>
      <a href="#landing" aria-label={language === "es"? "Ir a la página de inicio" : "Go to Intro"}>Carlos Eduardo Gutiérrez Sánchez</a>
      <ul className="links">
        <li><a href="tel:+15714362731" aria-label={language==="es"? "Llamar al teléfono" : "Call to phone"}>+1(571)436 2731</a></li>
        <li>/</li>
        <li><a href="mailto:ce_gs@hotmail.com" aria-label={language==="es"? "Enviar correo electrónico" : "Send email to"}>ce_gs@hotmail.com</a></li>
      </ul>
      <button onClick={openMenu} aria-label={language==="es"? "Abrir menú de navegación" : "Open navegation menu"}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
    
  )
}

export default Navbar