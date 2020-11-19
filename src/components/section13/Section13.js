import React from "react";
import "./Section13.css";

import Facebook from "../../assets/icon2.png";
import Instagram from "../../assets/icon3.png";
import Youtube from "../../assets/icon5.png";

export default function Section13() {
  return (
    <section className="section13">
      <div className="bloco-section13">
        <div className="text-section13">
          <div className="spans">
            <span
              style={{ fontSize: "45px", color: "#9b28ff", fontWeight: "bold" }}
            >
              PREÇOS
            </span>
            <span
              style={{
                fontSize: "16px",
                backgroundColor: "#6e6e67",
                color: "#fff",
                fontWeight: "700",
                width: "auto",
              }}
            >
              DE ALGUNS PACOTES DE SERVIÇOS
            </span>
            <span
              style={{ fontSize: "45px", color: "#9b28ff", fontWeight: "bold" }}
            >
              INCRÍVEIS
            </span>
          </div>
          <div className="text-right">
            <span>
              Na plataforma, você <strong>escolhe a quantidade desejada</strong>{" "}
              do serviço, pagando por lotes. Cada lote, de cada serviço, possui
              um valor. Conheça alguns:
            </span>
            <a href="/signup" className="btn-conhecer">
              Conhecer todos os pacotes
            </a>
          </div>
        </div>
        <div className="groups-boxs-section13">
          <div className="bloco1-section13-facebook">
            <div className="box1-section13">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#9b28ff",
                }}
              >
                1000 SEGUIDORES BRASILEIROS
              </span>
              <span
                style={{ fontSize: "16px", fontWeight: "700", color: "#000" }}
              >
                REAIS PARA FACEBOOK
              </span>
              <span
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                  color: "#9b28ff",
                  width: "100%",
                }}
              >
                90 REAIS
              </span>
              <a href="/signup" className="btn-box">
                Comprar
              </a>
            </div>

            <img src={Facebook} alt="facebook" />
            <span
              style={{ fontSize: "24px", color: "#6e6e67", fontWeight: "700" }}
            >
              Facebook
            </span>
          </div>
          <div className="bloco1-section13-youtube">
            <div className="box2-section13">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#9b28ff",
                }}
              >
                1000 INSCRITOS
              </span>
              <span
                style={{ fontSize: "16px", fontWeight: "700", color: "#000" }}
              >
                REAIS PARA CANAL DO YOUTUBE
              </span>
              <span
                style={{
                  fontSize: "45px",
                  fontWeight: "bold",
                  color: "#9b28ff",
                  width: "100%",
                }}
              >
                275 REAIS
              </span>
              <a href="/signup" className="btn-box">
                Comprar
              </a>
            </div>
            <img src={Youtube} alt="Youtube" />
            <span
              style={{ fontSize: "24px", color: "#6e6e67", fontWeight: "700" }}
            >
              Youtube
            </span>
          </div>
          <div className="bloco1-section13-instagram">
            <div className="box3-section13">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#9b28ff",
                }}
              >
                1000 SEGUIDORES BRASILEIROS
              </span>
              <span
                style={{ fontSize: "16px", fontWeight: "700", color: "#000" }}
              >
                REAIS PARA INSTAGRAM
              </span>
              <span
                style={{
                  fontSize: "3.0rem",
                  fontWeight: "bold",
                  color: "#9b28ff",
                  width: "100%",
                }}
              >
                54 REAIS
              </span>
              <a href="/signup" className="btn-box">
                Comprar
              </a>
            </div>
            <img src={Instagram} alt="Instagram" />
            <span
              style={{ fontSize: "24px", color: "#6e6e67", fontWeight: "700" }}
            >
              Instagram
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
