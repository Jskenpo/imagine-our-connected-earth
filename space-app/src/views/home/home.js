import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/navbar";
import "./home.css";
import VideoHome from "../../assets/HOME1.mp4";

function Home() {
    const [textSettings, setTextSettings] = useState({ x: 24, y: 15, fontSize: 17 });

    useEffect(() => {
        const updateTextSettings = () => {
            const width = window.innerWidth;

            if (width <= 321) {
                setTextSettings({ x: 12, y: 10, fontSize: 10 });
            } else if (width <= 389) {
                setTextSettings({ x: 18, y: 12, fontSize: 12 });
            } else if (width <= 450) {
                setTextSettings({ x: 20, y: 13, fontSize: 14 });
            } else if (width <= 821) {
                setTextSettings({ x: 22, y: 14, fontSize: 16 });
            } else {
                setTextSettings({ x: 24, y: 15, fontSize: 17 });
            }
        };

        // Llamar la función de actualización en montaje y cada vez que cambia el tamaño de la ventana
        window.addEventListener('resize', updateTextSettings);
        updateTextSettings(); // Inicializa el valor en el montaje

        // Limpieza del event listener
        return () => window.removeEventListener('resize', updateTextSettings);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="home">
                <h1>
                    The 
                    <span className="liquid-effect">
                        <svg viewBox="0 0 100 20">
                            <defs>
                                <linearGradient id="gradient">
                                    <stop color="#000"/>
                                </linearGradient>
                                <pattern id="wave" x="0" y="-0.5" width="100%" height="100%" patternUnits="userSpaceOnUse">
                                    <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" fill="url(#gradient)">
                                        <animateTransform
                                            attributeName="transform"
                                            begin="0s"
                                            dur="1.5s"
                                            type="translate"
                                            from="0,0"
                                            to="40,0"
                                            repeatCount="indefinite" />
                                    </path>
                                </pattern>
                            </defs>
                            {/* Los valores de x, y y fontSize son controlados dinámicamente */}
                            <text 
                                text-anchor="middle" 
                                x={textSettings.x} 
                                y={textSettings.y} 
                                font-size={textSettings.fontSize} 
                                fill="white" 
                                fill-opacity="0.1">
                                World
                            </text>
                            <text 
                                text-anchor="middle" 
                                x={textSettings.x} 
                                y={textSettings.y} 
                                font-size={textSettings.fontSize} 
                                fill="url(#wave)"  
                                fill-opacity="1">
                                World
                            </text>
                        </svg>
                    </span> 
                     Changing...
                </h1>
                <video className="rotated-video" autoPlay muted loop>
                    <source src={VideoHome} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default Home;
