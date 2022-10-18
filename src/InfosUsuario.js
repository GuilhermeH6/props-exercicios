import React from "react";
import "./styles.css";

 export default function InfosUsuario(props) {
    const usuario = "Guilherme Holanda"
    return(
        <div className="img-autor">
        <img className="autor" src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png" alt="" />
        <p>{usuario}</p>
        </div>
    )
}