import React from 'react'
import Whats from "../../assets/whats.jpg";
import './Whats.css'
export default function Whatsapp(){
    return(
        <section className="whatsapp">
            <a
        href="https://api.whatsapp.com/send/?phone=5563992432379&text&app_absent=0"
        
      >
    
        <img src={Whats} alt="whats" />
      </a>
      <span>Duvidas? Chame no WhatsApp</span>
        </section>
    )
}