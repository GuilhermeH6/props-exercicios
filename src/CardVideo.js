import React from "react"
import InfosUsuario from "./InfosUsuario"



 export default function CardVideo(props) {

    const infoUsuario = {
            nome: "Guilherme Holanda",
            img: "https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png"
        }
        
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <img className="img-card" src={props.infoVideo.img} alt="" />
            <h4>{props.infoVideo.nome}</h4>          
            <InfosUsuario
            infoUsuario={infoUsuario}
            />            
        </div>
    )
}