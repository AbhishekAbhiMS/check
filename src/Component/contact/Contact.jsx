
import "./contact.css"
import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { ThemeContext} from '../../Context'
import { useContext } from 'react'
const Contact = () => {
    const theme=useContext(ThemeContext)
    const darkMode=theme.state;

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5s9guai', 'template_dac0kx7', form.current, 'OgE3dw5PUdtn17rys')
        .then((result) => {
            console.log(result.text);
            alert("message is sended")
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
   <div className="contact-form" id="Contact">
    <div className="w-left">
        <div className="awesome">
            <span style={{color:darkMode?"white":''}}>Get in touch</span>
            <span>Contact me</span>
        </div>
    </div>
    <div className="w-right">
        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name="user-name" className="user" placeholder="Name"/>
            <input type="email" name="user-email" className="user" placeholder="Email"/>
            <textarea name="message" className="user" cols="30" rows="10" placeholder="Message"></textarea>
            <input type="submit" value="send" className="button" onClick={sendEmail} />



        </form>
    </div>
   </div>
  )
}

export default Contact