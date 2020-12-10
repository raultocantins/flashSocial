import React from "react";
import Whats from "../../assets/whats.jpg";
import "./Whats.css";
export default function Whatsapp() {
  return (
    <div>
      <a href="https://api.whatsapp.com/send/?phone=5563992432379&text&app_absent=0">
        <section className="whatsapp">
          <img src={Whats} alt="whats" />
          <span>Duvidas? Chame no WhatsApp</span>
        </section>
      </a>
    </div>
  );
}
