import React from 'react'
import './Section3.css'
import Smartphone from '../../assets/smartphone.webp'
export default function Section3() {
    return (
        <section className="section3">
            <div className="box-section3">
                <div className="img-section3">
                    <img src={Smartphone} alt="img-section3" />
                </div>
                <div className="text-section3">
                    <div className="text-box">
                        <span style={{ fontSize: '25px', marginBottom: '20px' }}>A <strong>PLATAFORMA</strong>
MAIS COMPLETA DO BRASIL</span>
                        <span style={{ textAlign: 'left' }}> Quer você seja um <strong>artista independente, blogueiro,
                pequena empresa ou apenas um usuário </strong>regular do Instagram,
                Facebook, Youtube, a  Flash Social é a sua melhor escolha de marketing em
                    mídias sociais para conseguir as <strong style={{ color: "#9b28ff" }}>curtidas, comentários, seguidores, visualizações </strong>que você precisa.</span>
                        <a href="https://flashsocial.net/painel/signup" className="btn-section3" >Cadastrar</a>
                    </div>
                </div>
            </div>
        </section>
    )
}