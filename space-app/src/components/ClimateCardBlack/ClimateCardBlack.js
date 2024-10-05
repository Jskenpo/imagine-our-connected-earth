import React from "react";
import './ClimateCardBlack.css';

function ClimateCardBlack({ videoSrc, content }) {
    
        return(
            <div id='climateCardBlack'>
                <div id='CCBVideo'>
                    <video id='CCBVideo_src' autoPlay loop muted>
                        <source src={videoSrc} type='video/mp4' /> {/* Usa la dirección del video pasada como prop */}
                    </video>
                </div>
                <div id='CCBContent'>
                    <p>{content}</p> {/* Muestra el contenido de texto */}
                </div>
            </div>
        )
    }

export default ClimateCardBlack;