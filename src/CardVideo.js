import React from "react"
import InfosUsuario from "./InfosUsuario"



 export default function CardVideo(props) {

    const titulo = "Titulo do video"

    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
      }

    return(
        <div className="box-pagina-principal" onClick={reproduzVideo}>
            <h4>{props.infoVideo.nome}</h4>          
            <InfosUsuario/>            
        </div>
    )
}