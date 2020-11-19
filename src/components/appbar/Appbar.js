import React from "react";
import "./Appbar.css";
import ImgAppbar from "../../assets/Logo Flash Social.png";
export default function Appbar() {
  return (
    <section className="appbar">
      <div className="appbar-img">
        <a href='/'>
        <img alt="imagem appbar" src={ImgAppbar}/>
        </a>       
      </div>      
      <div className="group-buttons-appbar">
        <a href="https://flashsocial.net/painel/signup" id="login">Login</a>
        <a href="https://flashsocial.net/painel/signup" id="comece">Começe Já</a>
      </div>
    </section>
  );
}
