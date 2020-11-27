import React from "react";
import "./Section3.css";
import Smartphone from "../../assets/smartphone.webp";
export default function Section3() {
  return (
    <section className="section3">
      <div className="box-section3">
        <div className="img-section3">
          <img src={Smartphone} alt="img-section3" />
        </div>
        <div className="text-section3">
          <div className="text-box">
            <span style={{ fontSize: "30px", marginBottom: "20px" }}>
              A <strong>PLATAFORMA </strong>
              COMPLETA DE <strong>IMPULSIONAMENTO</strong> PARA MARKETING
              DIGITAL
            </span>
            <span style={{ textAlign: "left" }}>
              {" "}
              Quer você seja um{" "}
              <strong>
                artista independente, blogueiro, pequena empresa ou apenas um
                usuário{" "}
              </strong>
              regular do Instagram, Facebook, Youtube, a Flash Social é a sua
              melhor escolha de <strong>marketing em mídias sociais</strong> para conseguir o engajamento que você precisa.
            </span>
            <a href="/painel/signup" className="btn-section3">
              Cadastrar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
