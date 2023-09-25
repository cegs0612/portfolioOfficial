import React, {useContext} from 'react'
import "./menu.css";
import { LanguageContext } from '../../context/LanguageContext';


function Menu({closeMenu}) {
  const { language, setLanguage} = useContext(LanguageContext)

  return (
    <div className="modal">
      <nav className='nav-menu'>
        <section className="close-btn">
          <button onClick={()=>closeMenu()}>
            <span class="material-symbols-outlined">close</span>
          </button>
        </section>
        <section className="lang-btn">
          <button onClick={()=>setLanguage("en")}>{language==="en"? "ENG" : "ING"}</button>
          <button onClick={()=>setLanguage("es")}>{language==="en"? "SPA" : "ESP"}</button>
        </section>
        <section className="nav-list">
          <ul>
            <li>INTRO</li>
            <li>ABOUT ME</li>
            <li>TECH STACK</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
          </ul>
        </section>
        <section className="linkedIn-link">

        </section>
      </nav>
    </div>
  )
}

export default Menu