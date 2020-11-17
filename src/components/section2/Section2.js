import React from "react";
import "./Section2.css";
//importe imgs
import Fundo from "../../assets/fundo.webp";
import Girl2 from "../../assets/girl2.webp";

export default function Section2() {
  return (
    <section className="section2">
      <div className="container-section2">
        <div className="section2-text">
          <span>
            AUMENTE O <strong>ENGAJAMENTO</strong> DAS SUAS{" "}
            <strong>REDES SOCIAIS</strong>
          </span>
          <span>
            <strong>
              CURTIDAS, SEGUIDORES, COMPARTILHAMENTOS E COMENTÁRIOS
            </strong>{" "}
            DE PESSOAS REAIS. AUMENTE A SUA PRESENÇA EM{" "}
            <strong>TODAS AS REDES SOCIAIS</strong>.{" "}
          </span>
          <svg
            preserveAspectRatio="xMidYMid meet"
            data-bbox="49.4 21.5 101.075 157.1"
            viewBox="49.4 21.5 101.075 157.1"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="tint"
            role="img"
            className="svg-mouse"
          >
            <g>
              <path
                d="M149.8 69.6c-.9-26-23.7-48.1-49.9-48.1s-49 22-49.9 48.1c-.8 24.5-.8 36.5 0 60.9.9 26 23.7 48.1 49.9 48.1s49-22 49.9-48.1c.9-24.6.9-36.5 0-60.9zm-4.1 60.7c-.8 23.9-21.7 43.9-45.7 43.9s-44.9-20.1-45.7-43.9c-.8-23.8-.8-36.2 0-60.6S76 25.8 100 25.8s44.9 20.1 45.7 43.9.8 36.2 0 60.6zm-43.6-70v30.5c.2 1.2-.6 2.3-1.7 2.5s-2.3-.6-2.5-1.7c-.1-.2-.1-.6 0-.8V60.3c-.2-1.2.6-2.3 1.7-2.5s2.3.6 2.5 1.7c.1.2.1.5 0 .8z"
                fill="#FFFFFF"
              ></path>
            </g>
          </svg>
        </div>
        <div className="section2-imgs">
          
            <img src={Fundo} alt="fundo-img" className="img-fundo" />
            <img src={Girl2} alt="girl2-img" className="img-girl2" />
       
        </div>
      </div>
    </section>
  );
}
