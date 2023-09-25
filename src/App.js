import './App.css';
import React, { useState } from 'react';
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from './components/navbar/Navbar';
import Menu from "./components/menu/Menu";
import Landing from "./pages/landing/Landing";
import About1 from "./pages/about1/About1";
import About2 from "./pages/about2/About2";
import Stack from "./pages/stack/Stack";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <LanguageProvider>
      <div className="App">
        <Navbar openMenu={toggleMenu}/>
        {isMenuOpen && <Menu closeMenu={toggleMenu} />}
        <div className='section-container'>
          <Landing/>
          <About1/>
          <About2/>
          <Stack/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;
