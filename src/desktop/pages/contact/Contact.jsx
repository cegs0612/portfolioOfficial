import './contact.css'
import React, {useContext, useState} from 'react'
import { LanguageContext } from "../../../context/LanguageContext";
import Axios from "axios";
import { BounceLoader } from "react-spinners";
import { motion } from "framer-motion";

function Contact() {
  const {language} = useContext(LanguageContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)){
      language==="en"? 
        alert("Type valid email"):alert("Ingrese un correo electrónico válido")
      document.getElementById("email").focus();
      return
    }
    const dataMsg = {
      name,
      email,
      message
    }
    
    Axios.post('http://localhost:3001/message', dataMsg)
    .then(response  =>{
      setIsSending(false)
      language === "en"?
        alert("Thanks for sending a message, I'll contact you as soon as possible to the email provided"):
        alert("Gracias por escribir, me contactaré contigo lo antes posible al correo electrónico proporcionado");
      setName("");
      setEmail("");
      setMessage("");
    }).catch(err=>{
      setIsSending(false);
      language === "en"?
        alert("Something went wrong, try again, please"):
        alert("Ocurrió un error, inténtalo de nuevo, por favor");
      console.log(err)
      return
    });
  }

  return (
    <section className="contact page" id='contact'>
      {isSending && <motion.div 
        className="sending-modal"
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring', duration:1.5}}
      >
        <BounceLoader  size={150} color={'#A73121'} />
      </motion.div>}      
      <motion.div 
        className="circle1"
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring', duration:1.5}}
      ></motion.div>
      <motion.div 
        className="circle2"
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{type:'spring', duration:2, bounce:0}}
      ></motion.div>
      <div className="content">
        <motion.div 
          className="left-side"
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{type:'spring', duration:1.5}}
        >
          {language==="en"&&<h2>CONTACT</h2>}
          {language==="es"&&<h2>CONTACTO</h2>}

          <div>
            {language==="en"&&<h3>CONTACT INFO</h3>}
            {language==="es"&&<h3>INFORMACIÓN DE CONTACTO</h3>}

            <a 
              href="tel:+15714362731" 
              aria-label={language==="es"? "Llamar al teléfono" : "Call to phone"}
              className='phone'
            >+1(571)436 2731</a>
            <a 
              href="mailto:ce_gs@hotmail.com" 
              aria-label={language==="es"? "Enviar correo electrónico" : "Send email to"}
              className='email'
              >ce_gs@hotmail.com</a>
          </div>
        </motion.div>
        <motion.div 
          className="right-side"
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{type:'spring', duration:1.5}}
        >
          {language==="en"&&<h3>Let's talk</h3>}
          {language==="es"&&<h3>Conversemos</h3>}

          <form onSubmit={handleSubmit} >
          {language==="en"&&<label htmlFor="name">Full Name</label>}
          {language==="es"&&<label htmlFor="name">Nombre Completo</label>}
          
          <input 
            type="text"
            required 
            id="name" 
            name="name" 
            placeholder={language==="en"? "Name":"Nombre"} 
            value={name}
            onChange={(event)=>{setName(event.target.value)}}
          />
          
          
          {language==="en"&&<label htmlFor="email">Email</label>}
          {language==="es"&&<label htmlFor="email">Correo Electrónico</label>}
          

          <input 
            type="text" 
            required
            id="email" 
            name="email" 
            placeholder={language==="en"? "name@email.com":"nombre@correo.com"} 
            value={email}
            onChange={(event)=>{setEmail(event.target.value)}}  
          />
          
          {language==="en"&&<label htmlFor="message">Message</label>}
          {language==="es"&&<label htmlFor="message">Mensaje</label>}
          
          
          <textarea 
            name="message" 
            required
            id="message" 
            cols="50" 
            rows="10" 
            placeholder={language==="en"? "Hi! I wanted to contact you to...":"¡Hola!, quería contactarte para..."}
            value={message}
            onChange={(event)=>{setMessage(event.target.value)}}
          ></textarea>
          

          {language==="en"&& <motion.input 
            type="submit" 
            value="Send Message" 
            className='submit-btn'
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}} 
          />}
          {language==="es"&& <motion.input 
            type="submit" 
            value="Enviar Mensaje" 
            className='submit-btn'
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}} 
          />}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact