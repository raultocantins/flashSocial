import React from 'react'
import './Section8.css'
import ReactPlayer from "react-player";
export default function Section8() {
    return (
        <section className="section8">
            <div className="bloco-section8">

          
            <span id="player" style={{ color: "rgb(255, 255, 255)", fontWeight:"700", fontFamily:"reklamescriptw00-medium,cursive", fontSize: '31px' }}>Aperte o play</span>
            <svg fill="#fff" preserveAspectRatio="none" data-bbox="20 50.974 160.001 98.054" viewBox="20 50.974 160.001 98.054" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img">
                <g>
                    <path d="M20.734 129.127c-.737.409-.901 1.31-.573 2.129l10.237 17.116.328.328.082.082c.164.164.328.246.491.246h.328c.082 0 .246 0 .409-.082.082-.082.082-.082.164-.082s.082-.082.164-.082l17.198-9.745c.737-.328.983-1.228.573-1.965-.328-.737-1.228-.983-1.965-.573l-14.168 8.026c9.254-36.607 26.861-62.567 52.494-77.144 41.848-23.913 91.148-8.845 91.639-8.681.737.246 1.556-.246 1.802-.983s-.246-1.556-.983-1.802c-.491-.164-50.938-15.56-93.851 8.845-26.288 14.987-44.387 41.602-53.886 78.946l-8.435-14.086c-.492-.657-1.393-.902-2.048-.493z"></path>
                </g>
            </svg>

            <div className="text-section8">
                <span style={{ fontSize: '24px', color: '#fff' }}>
                    <strong>ENTENDA COMO É FÁCIL </strong>
                USAR A PLATAFORMA MAIS COMPLETA DO BRASIL
                
            </span>
            </div>



            <ReactPlayer
                style={{ marginBottom: '30px' }}
                url="https://www.youtube.com/watch?v=OBAXqWDC0n8&feature=emb_logo"
            />
              </div>
        </section>
    )
}