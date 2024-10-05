import React from "react";
import Navbar from "../../components/navbar/navbar";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './banda.css';

function BandA() {
    const FIRST_IMAGE_SLIDER1 = {
        imageUrl: '/assets/katlaB.jpg',
        alt: 'Katla before'
    };

    const SECOND_IMAGE_SLIDER1 = {
        imageUrl: '/assets/katlaA.jpg',
        alt: 'Katla after'
    };

    const FIRST_IMAGE_SLIDER2 = {
        imageUrl: '/assets/GlacierA.jpg',
        alt: 'Glacier before'
    };

    const SECOND_IMAGE_SLIDER2 = {
        imageUrl: '/assets/GlacierB.jpg',
        alt: 'Glacier after'
    };

    return (
        <div className="BandA">
            <div className="BandA-navbar">
                <Navbar />
            </div>
            <div className="BandA-content">
                <div className="BandA-title">
                    <h1>Before and After of Climate Change</h1>
                </div>

                <div className="BandA-slider">
                    <ReactBeforeSliderComponent
                        firstImage={FIRST_IMAGE_SLIDER1}
                        secondImage={SECOND_IMAGE_SLIDER1}
                        delimiterColor="#000"
                    />                    
                </div>

                <div className="BandA-description">
                    <p>More than half of Iceland's numerous ice caps and glaciers lie near or directly over volcanoes. Seen here 
                        is Mýrdalsjökull, Iceland's fourth largest ice cap, which covers the Katla volcano at the country's southern 
                        tip. In the 2014 image, the depressions at the southwest-central part of Mýrdalsjökull are ice cauldrons 
                        caused by geothermal heat from below. Along the northern part of the ice cap, ablation has exposed brown 
                        bands of ash from past eruptions. But not all of the changes are associated with volcanic activity. 
                        Most of the monitored glaciers have been shrinking since the 1990s.</p>
                </div>

                <br></br>
                <br></br>

                <div className="BandA-slider">
                    <ReactBeforeSliderComponent
                        firstImage={FIRST_IMAGE_SLIDER2}
                        secondImage={SECOND_IMAGE_SLIDER2}
                        delimiterColor="#000"
                    />                    
                </div>

                <div className="BandA-description">
                    <p>Spalte Glacier was a branch of a huge ice shelf in northeastern Greenland called Nioghalvfjerdsbrae, aka 79 N. 
                        But in late June 2020, Spalte broke off from its parent and fractured into numerous icebergs. Despite the 
                        loss of the 44-square-mile (114-square-kilometer) glacier, 79 N remains the Arctic's largest ice shelf, at 
                        about 43 miles (70 kilometers) long and 12 miles (20 kilometers) wide.</p>
                </div>
            </div>
        </div>
    );
}

export default BandA;
