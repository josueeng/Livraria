import React from "react";

import Comunidade from "../../assets/comunidade.png";
import leitura from "../../assets/leitura.png";
import uniao from "../../assets/uniao.png";
import balanca from "../../assets/balanca.png";
import "./Motivos.scss";

export default function Motivos() {
    return (
        <div className="ContMot">
            <p className="TextPrinc">Por que devo doar?</p>
            <div className="Motivos">
                <div className="Motivo"> 
                    <img className="ImgMotivo" src={Comunidade} alt="" />
                    <p className="TextMotivo"> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                </div>
                <div className="Motivo"> 
                    <img className="ImgMotivo" src={leitura} alt="" />
                    <p className="TextMotivo"> Estimula o hábito da leitura e o aprendizado contínuo.</p>
                </div>
                <div className="Motivo"> 
                    <img className="ImgMotivo" src={uniao} alt="" />
                    <p className="TextMotivo"> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                </div>
                <div className="Motivo"> 
                    <img className="ImgMotivo" src={balanca} alt="" />
                    <p className="TextMotivo">Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                </div>
            </div>
        </div>
    );
}
