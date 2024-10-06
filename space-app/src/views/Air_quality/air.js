import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./air.css";
import Video1 from "../../assets/Video1.mp4";
import Video2 from "../../assets/Video2.mp4";
import Video3 from "../../assets/Video3.mp4";
import Video4 from "../../assets/Video4.mp4";

function Air() {
    return (
        <div>
            <Navbar />
            <div className="Air_Container">
                <h1>Air Quality</h1>
                <div className="Video_Row">
                    <video autoPlay loop muted controls={false} className="Video_Air">
                        <source src={Video1} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted controls={false} className="Video_Air">
                        <source src={Video2} type="video/mp4" />
                    </video>
                </div>
                <div className="Video_Row">
                    <video autoPlay loop muted controls={false} className="Video_Air">
                        <source src={Video3} type="video/mp4" />
                    </video>
                    <video autoPlay loop muted controls={false} className="Video_Air">
                        <source src={Video4} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="Air_CandE">
                <h1>Cause and Effect</h1>
                <p className="Cande">
                Air quality is a growing global concern, directly impacting human health, ecosystems, and climate change. Pollution, primarily caused by human activities like fossil fuel combustion, vehicular traffic, industrial operations, and intensive agriculture, has reached alarming levels in many regions. Harmful pollutants such as carbon dioxide (CO₂), carbon monoxide (CO), nitrogen oxides (NOx), sulfur dioxide (SO₂), and particulate matter are released into the atmosphere, posing serious risks. 
                </p>

                <div className="Cause_Effect_Container">
                    <div className="Cause_List">
                        <h2>Causes</h2>
                        <ul>
                            <li>Burning of fossil fuels</li>
                            <li>Vehicular emissions</li>
                            <li>Industrial activities</li>
                            <li>Agricultural practices</li>
                            <li>Deforestation</li>
                        </ul>
                    </div>

                    <div className="Effect_List">
                        <h2>Effects</h2>
                        <ul>
                            <li>Respiratory diseases</li>
                            <li>Cardiovascular problems</li>
                            <li>Global warming</li>
                            <li>Water acidification</li>
                            <li>Damage to ecosystems and wildlife</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Air;
