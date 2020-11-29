import React from 'react'
import './Section6.css'
import Slash from '../../assets/slash.jpg'
import Girl6 from '../../assets/girl6.jpg'
import SlashBottom from '../../assets/slashbottom.jpg'
import Icon1 from '../../assets/icon1.jpg'
import Icon2 from '../../assets/icon2.jpg'
import Icon3 from '../../assets/icon3.jpg'
import Icon4 from '../../assets/icon4.jpg'
import Icon5 from '../../assets/icon5.jpg'

export default function Section6() {
    return (
        <section className="section6">
            <div className="bloco-section6">

           
            <div className="imgs-section6">
                <img src={Slash} alt="fundo" className="fundo-section6" />
                <img src={Girl6} alt="girl6" className="girl-section6" />
            </div>
            <div className="text-center-section6">
                <h2 style={{ color: "#8b28ff", fontWeight: "700", fontSize: '45px', margin: '150px 0px 0px 0px' }}> ESCOLHA</h2>
                <span style={{ fontSize: '25px', color: "#6e6e67", fontWeight: "700" }}>
                    A REDE SOCIAL QUE VOCÊ QUER
</span>
                <h2 style={{ color: "#8b28ff", fontWeight: "700", fontSize: '45px', margin: '0px 0px 50px 0px' }}>
                    IMPULSIONAR</h2>
                <span style={{ fontSize: "17px",fontWeight:'500'}}>

                    É um processo <strong>
                        totalmente  legal  </strong>e <strong>100% seguro</strong>.
Basta  <strong>escolher o pacote</strong> de sua preferência e seguir nossas <strong> etapas fáceis de checkout</strong>.
                    </span>
            </div>
            <div className="imgs-right-section6">
                <div className="group-midias">
                    <img src={Icon1} alt="midias sociais" />
                    <img src={Icon2} alt="midias sociais" />
                    <img src={Icon3} alt="midias sociais" />
                    <img src={Icon4} alt="midias sociais" />
                    <img src={Icon5} alt="midias sociais" />
                </div>
                <img src={SlashBottom} alt="bottom" className="slashbottom" />
            </div>
            </div>
        </section>
    )
}