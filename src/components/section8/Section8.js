import React from 'react'
import './Section8.css'
import ReactPlayer from "react-player";
export default function Section8() {
    return (
        <section className="section8">
            <div className="text-section8">
            <span style={{fontSize:'24px',color:'#fff'}}>
                <strong>ENTENDA COMO É FÁCIL </strong> 
                USAR A PLATAFORMA MAIS COMPLETA DO BRASIL
            </span>
            </div>
        
          

            <ReactPlayer
          style={{marginBottom:'30px'}}
                url="https://www.youtube.com/watch?v=OBAXqWDC0n8&feature=emb_logo"
            />
        </section>
    )
}