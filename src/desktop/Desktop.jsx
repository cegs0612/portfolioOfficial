import React, {useState} from 'react'
import Navbar from './components/navbar/Navbar';
import Menu from "./components/menu/Menu";
import Landing from "./pages/landing/Landing";
import About1 from "./pages/about1/About1";
import About2 from "./pages/about2/About2";
import Stack from "./pages/stack/Stack";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function Desktop() { 
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const openMenu = () => setIsMenuOpen(true)
    const closeMenu = () => setIsMenuOpen(false)     

    return (
        <React.Fragment>
            {!isMenuOpen && <Navbar openMenu={openMenu}/> }
            {isMenuOpen && <Menu closeMenu={closeMenu} /> }
            <div className='section-container'>
                <Landing/>
                <About1/>
                <About2/>
                <Stack/>
                <Projects/>
                <Contact/>
            </div>
        </React.Fragment>
    )
}

export default Desktop