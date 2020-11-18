import React from "react";
import "./Section12.css";
import Slash from "../../assets/slash.webp";
import Man from "../../assets/man.webp";

export default function Section12() {
  return (
    <section className="section12">
          <span style={{fontWeight:"700"}}>
          ESCOLHA SERVIÇOS PARA{" "}
          <strong style={{color:"#9b28ff"}}>
            FACEBOOK, INSTAGRAM, TIKTOK, YOUTUBE, TWITTER, SPOTFY, TWITCH,
            TELEGRAM E SOUNDCLOUD
          </strong>
        </span>
      <div className="box-section12">
      
        <div className="imgs-section12">
          <img src={Slash} alt="fundo-section12" />
          <img src={Man} alt="man-section12" />
        </div>
      </div>
    </section>
  );
}
