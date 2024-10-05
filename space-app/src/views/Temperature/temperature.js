import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./temperature.css";
import ClimateCardWhite from "../../components/ClimateCardWhite/ClimateCardWhite";
import ClimateCardBlack from "../../components/ClimateCardBlack/ClimateCardBlack";
import ClimateSpiral from "../../assets/temperature_spiral.mp4";
import temperature_graph from "../../assets/temperature_graph.mp4";

function Temperature() {
    return (
        <div id='temperatureView'>
            <Navbar />
            <div id = 'temperatureViewTitle'>
                <h1>Climate change through time</h1>
            </div>
            <div id = 'temperatureViewIntro'>
                <p>Climate change is one of the most critical challenges humanity faces in the 21st century. As global temperatures rise and weather patterns shift, our planet is experiencing profound effects on its ecosystems, biodiversity, and human communities. This page aims to educate and raise awareness about the causes, effects, and solutions to mitigate climate change.
                <br></br>
                <br></br>
Through scientific information, updated news, and interactive resources, we will explore how human activities are driving these changes and what actions we can take, both individually and collectively, to reduce environmental impact. Climate change is neither a distant nor abstract issue; it affects everyone, and together we can make a difference.</p>
            </div>
            <div id='temperatureViewContent'>
                <ClimateCardWhite 
                    videoSrc={ClimateSpiral}
                    content='This video graphically illustrates the change in global temperatures from 1880 to 2022. It visually represents the increasing trend in temperatures over time, starting from the late 19th century when industrialization began to accelerate. As the years progress, the video highlights how the Earths temperature has gradually risen, with a marked and rapid increase in recent decades. The graphic vividly demonstrates the undeniable warming of our planet, emphasizing the urgency of addressing climate change as temperatures continue to rise at an alarming rate.' 
                />
                <ClimateCardBlack
                    videoSrc={temperature_graph}
                    content='This video graphically illustrates the change in global temperatures from 1880 to 2022. It visually represents the increasing trend in temperatures over time, starting from the late 19th century when industrialization began to accelerate. As the years progress, the video highlights how the Earths temperature has gradually risen, with a marked and rapid increase in recent decades. The graphic vividly demonstrates the undeniable warming of our planet, emphasizing the urgency of addressing climate change as temperatures continue to rise at an alarming rate.'
                />
                
            </div>
        </div>
    );
}

export default Temperature;
