import React from "react";
import "./Appbar.css";
import ImgAppbar from "../../assets/Logo Flash Social .webp";
export default function Appbar() {
  return (
    <section className="appbar">
      <div className="appbar-img">
        <a href='/'>
        <img alt="imagem appbar" src={ImgAppbar}/>
        </a>
       
      </div>
      <div className="group-buttons-appbar">
        <a href="https://flashsocial.net/painel/signup">Login</a>
        <a href="https://flashsocial.net/painel/signup">Começe Já</a>
      </div>
    </section>
  );
}
