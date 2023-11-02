import React, {useState} from 'react'
import NavbarPhone from "./components/navbar/NavbarPhone";
import MenuPhone from "./components/menu/MenuPhone";
import LandingPhone from "./pages/landing/LandingPhone";
import AboutPhone from "./pages/about/AboutPhone";
import StackPhone from "./pages/stack/StackPhone";
import ProjectsPhone from "./pages/projects/ProjectsPhone";
import ContactPhone from "./pages/contact/ContactPhone";

function Phone() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <React.Fragment>
      {!isMenuOpen && <NavbarPhone openMenu={toggleMenu}/>}
      {isMenuOpen && <MenuPhone closeMenu={toggleMenu}/>}
      <div className="section-container">
        <LandingPhone/>
        <AboutPhone/>
        <StackPhone/>
        <ProjectsPhone/>
        <ContactPhone/>
      </div>
    </React.Fragment>
  )
}

export default Phone