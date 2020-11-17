import React from "react";
import "./Appbar.css";
import ImgAppbar from "../../assets/Logo Flash Social .webp";
export default function Appbar() {
  return (
    <section className="appbar">
      <div className="appbar-img">
        <img alt="imagem appbar" src={ImgAppbar} />
      </div>
      <div className="group-buttons-appbar">
        <a href="/login">Login</a>
        <a href="/comeceja">Começe Já</a>
      </div>
    </section>
  );
}
