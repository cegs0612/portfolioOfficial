import {useState,useEffect} from 'react'

function useWindowDimentions() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      };
      
      window.addEventListener('resize',handleResize);
      return () => {
        window.removeEventListener('resize',handleResize);
      }
    }, [])
    
    return windowWidth;
}

export default useWindowDimentions;