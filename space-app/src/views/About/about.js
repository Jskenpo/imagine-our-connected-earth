import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./about.css";

import { Fieldset } from 'primereact/fieldset';
import gif from '../../assets/about.gif'

function About() {
    return (
        <div id="aboutContainer">
            <Navbar />
            <h1>About</h1>
            <div className="blackSquare"></div>

            <img 
                id="aboutGifBackground"
                src={gif}
                alt="Animación de la Tierra" 
                className="about-image" 
            />
            <div className="about-field-container">
                <Fieldset className="customFieldset">
                    <p className="m-0">
                        At the Earth Information Center, we believe in the importance of understanding the delicate balance of Earth’s
                        systems to address the challenges our planet faces. Our mission is to illustrate these intricate connections
                        through engaging and accessible platforms.
                    </p>
                </Fieldset>

                <Fieldset legend="Global Interconnections of Earth’s Systems" className="customFieldset" toggleable>
                    <p className="m-0">
                        Earth’s systems (like the atmosphere, oceans, and ecosystems) are interconnected on a global scale. Changes in one area
                        often lead to significant impacts on another. For example, climate change not only raises temperatures but also causes
                        prolonged droughts, which in turn increase the frequency and intensity of wildfires. These wildfires degrade air quality
                        and reshape ecosystems by influencing forest regeneration and succession.
                    </p>
                </Fieldset>
                <Fieldset legend="Our Work" className="customFieldset" toggleable>
                    <p className="m-0">
                        We bring these interconnections to life through interactive physical exhibits and an innovative online platform. Our work 
                        is powered by data and imagery from NASA’s Earth-observing satellites, showcasing real-world examples of how environmental 
                        systems influence one another. We aim to make these complex interactions accessible, sparking curiosity and awareness in 
                        people of all ages and backgrounds.
                    </p>
                </Fieldset>
                <Fieldset legend="Collaboration and Creativity" className="customFieldset" toggleable>
                    <p className="m-0">
                        We believe in the power of creativity and collaboration. Our goal is to explore innovative ways of communicating Earth’s 
                        interconnections. Whether it’s through animation, immersive experiences, or other multimedia tools, we encourage new ideas 
                        that can help us share these vital messages.
                    </p>
                </Fieldset>
                <Fieldset legend="Our Visiony" className="customFieldset" toggleable>
                    <p className="m-0">
                        By fostering a deeper understanding of Earth’s interconnected systems, we hope to inspire action and informed decision-making 
                        for a healthier, more sustainable future.
                    </p>
                </Fieldset>
                <Fieldset legend="Our team" className="customFieldset" toggleable>
                    <p className="m-0">
                        <div >
                            <img 
                                id="aboutTeamImage"
                                src="https://private-user-images.githubusercontent.com/78128693/373893365-f32fb0d5-3771-4811-8bb9-3d99fe82ca10.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjgxNjg0MjMsIm5iZiI6MTcyODE2ODEyMywicGF0aCI6Ii83ODEyODY5My8zNzM4OTMzNjUtZjMyZmIwZDUtMzc3MS00ODExLThiYjktM2Q5OWZlODJjYTEwLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEwMDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMDA1VDIyNDIwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTVkODcxYjk3ZTk0MjdiOTJmNjlmZGY2MjEwYzQzODllMjNkYWQ1MDU3YTgxMjY0OTFjMTE5YTI4MWRmZjU1NzkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.V0iGQTQiAenYOKddkLDKJfCfvZvDvHuU0eVeWQI8yHY"
                                />
                        </div>   
                        <br /> 
                        Project Manager: Manuel Salvador Rodas<br />
                        Lead Developer: Jose Santiesteban<br />
                        Designer: Sebatian Solorzano<br />
                        Developer: Diego Valdez<br />
                        Developer: Sebastian Estrada<br />
                    </p>
                </Fieldset>
            </div>


        </div>
    );
}

export default About;