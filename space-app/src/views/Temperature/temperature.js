import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./temperature.css";
import ClimateCardWhite from "../../components/ClimateCardWhite/ClimateCardWhite";
import ClimateCardBlack from "../../components/ClimateCardBlack/ClimateCardBlack";
import ClimateSpiral from "../../assets/temperature_spiral.mp4";
import temperature_graph from "../../assets/temperature_graph.mp4";
import polos_temperature from "../../assets/polos_temperature.mp4";
import ice_sea from "../../assets/ice_sea.mp4";

function Temperature() {
    return (
        <div id='temperatureView'>
            <Navbar />
            <div id = 'temperatureViewTitle'>
                <h1>Visualizing Climate Change: A Journey Through Time</h1>
            </div>
            <div id = 'temperatureViewIntro'>
                <p>Climate change presents an urgent challenge, and visual data helps us grasp the magnitude of its effects. This page features a series of impactful videos that illustrate the transformation of Earth's climate over the past century. The first video charts the alarming rise in global temperatures from 1880 to 2022, while the second highlights monthly temperature patterns, revealing July as the hottest month and showcasing the overall increase in heat.
<br></br>
<br></br>
The third video focuses on the polar regions, demonstrating the cycles of melting and freezing ice, particularly during the peak heat of mid-year, which leads to significant ice loss. Finally, a stark comparison of the Arctic from 2010 to its current state underscores the rapid decline of the North Pole. Together, these visualizations emphasize the urgent need for action to combat climate change, as the evidence is clear: our planet is warming, and its most vulnerable ecosystems are suffering the consequences.</p>
            </div>
            <div id='temperatureViewContent'>
                <ClimateCardWhite 
                    videoSrc={ClimateSpiral}
                    content='This video graphically illustrates the change in global temperatures from 1880 to 2022. It visually represents the increasing trend in temperatures over time, starting from the late 19th century when industrialization began to accelerate. As the years progress, the video highlights how the Earths temperature has gradually risen, with a marked and rapid increase in recent decades. The graphic vividly demonstrates the undeniable warming of our planet, emphasizing the urgency of addressing climate change as temperatures continue to rise at an alarming rate.' 
                />
                <ClimateCardBlack
                    videoSrc={temperature_graph}
                    content='This video presents the Earths temperature patterns across the months, highlighting July as the hottest month of the year. The visualization emphasizes the consistent peak in global temperatures during July, but it also shows a concerning trend: overall temperatures, especially in July, have been steadily rising. The video serves as a clear indication of how global warming is impacting seasonal temperature highs, with each year setting new records for heat, underscoring the ongoing climate crisis.'
                />

                <ClimateCardWhite
                    videoSrc={polos_temperature}
                    content='This video depicts the freezing and thawing cycles of the Earths polar regions. It highlights that mid-year, when the planet experiences its highest temperatures (as shown in the previous video), is when the most significant melting of polar ice occurs. The video clearly demonstrates that the polar ice does not fully recover during the freezing periods, resulting in a net loss of ice over time. This ongoing reduction in polar ice is a stark indicator of the impact of rising global temperatures on the Earths polar regions.'
                />

                <ClimateCardBlack
                    videoSrc={ice_sea}
                    content='This video provides a striking visual comparison of the Arctic region, contrasting its state in 2010 with the current conditions. The difference is dramatic and undeniable, with significant ice loss clearly visible. The video emphasizes how climate change is accelerating the melting of the Arctic ice cap, causing not only a reduction in its surface area but also a thinning and sinking effect. The rapid retreat of the polar ice highlights the urgent consequences of global warming, as the Arctic continues to diminish at an alarming rate, impacting ecosystems and global sea levels.'
                />


                
            </div>
        </div>
    );
}

export default Temperature;
