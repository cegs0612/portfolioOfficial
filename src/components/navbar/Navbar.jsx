import React ,{useContext} from 'react';
import "./navbar.css";
import { LanguageContext } from "../../context/LanguageContext";

function Navbar({openMenu}) {

  const language = useContext(LanguageContext)

  return (

    <header className='navbar'>
      <a href="#landing" aria-label={language === "es"? "Ir a inicio" : "Go to intro"}>Carlos Eduardo Gutiérrez Sánchez</a>
      <div className="links">
        <a href="tel:+15714362731" aria-label={language==="es"? "Llamar al teléfono" : "Call to phone"}>+1(571)436 2731</a>
        <p>/</p>
        <a href="mailto:ce_gs@hotmail.com" aria-label={language==="es"? "Enviar correo electrónico" : "Send email to"}>ce_gs@hotmail.com</a>
      </div>
      <button onClick={openMenu} aria-label={language==="es"? "Abrir menú de navegación" : "Open navegation menu"}>
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
    
  )
}

export default Navbar