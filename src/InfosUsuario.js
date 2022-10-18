import React from "react";
import "./styles.css";

 export default function InfosUsuario(props) {

    return(
        <div className="img-autor">
        <img className="autor" src={props.infoUsuario.img} alt="" />
        <p>{props.infoUsuario.nome}</p>
        </div>
    )
}