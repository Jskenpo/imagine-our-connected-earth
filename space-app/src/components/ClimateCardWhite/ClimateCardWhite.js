import React from "react";
import './ClimateCardWhite.css';

function ClimateCardWhite({ videoSrc, content }) {

    return(
        <div id='climateCardWhite'>
            <div id='CCContent'>
                <p>{content}</p> {/* Muestra el contenido de texto */}
            </div>
            <div id='CCVideo'>
                <video id='CCVideo_src' autoPlay loop muted>
                    <source src={videoSrc} type='video/mp4' /> {/* Usa la dirección del video pasada como prop */}
                </video>
            </div>
        </div>
    )
}

export default ClimateCardWhite;
