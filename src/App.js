import './App.css';
import Axios from "axios";
import React, { useEffect } from 'react';
import { LanguageProvider } from "./context/LanguageContext";
import useWindowDimentions from "./hooks/useWindowDimentions";
import Desktop from "./desktop/Desktop";
import Phone from "./phone/Phone";
function App() {
  const windowWidth = useWindowDimentions();

  //sends data to the backend
  const sendData = async (date, position, error)=>{
    const data = {
      date,
      position,
      error
    };
    
    Axios.post('https://portfoliobackend-5km0.onrender.com',data)
    .then(console.log("."))
    .catch(err=>console.log("."))
  }
  
  //gest user current location
  useEffect(() => {
    const date = new Date();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const positionData = {
          latitude : latitude,
          longitude : longitude
        };
        sendData(date.toString(),positionData,null)
      }, (error) => {
        const err = ['Error al obtener la ubicación:', {code:error.code,message:error.message}]
        sendData(date.toString(), null, err)
      });
    } else {
      sendData(date.toString(), null,'Geolocation no está soportado en este navegador.');
    }
  }, [])
  
  
  return (
    <LanguageProvider>
      <div className="App">
        {windowWidth >= 850? <Desktop /> : <Phone />}
      </div>
    </LanguageProvider>
  );
}

export default App;
