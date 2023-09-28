import {useEffect,useState} from 'react'
//returns the vertical position of the window
function useWindowVerticalPosition() {
    const [yPosition, setYPosition] = useState(window.scrollY);

    useEffect(() => {
      function handleScroll() {
        setYPosition(window.scrollY);
      }
      
      window.addEventListener('scroll',handleScroll);

      return () => {
        window.removeEventListener('scroll',handleScroll);
      }
    }, [])
    
    return yPosition;
}

export default useWindowVerticalPosition