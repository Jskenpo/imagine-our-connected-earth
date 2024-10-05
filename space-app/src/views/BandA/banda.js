import React from "react";
import Navbar from "../../components/navbar/navbar";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import './banda.css';

function BandA() {
    const FIRST_IMAGE = {
        imageUrl: '/assets/katlaB.jpg',
        alt: 'Katla before'
    };

    const SECOND_IMAGE = {
        imageUrl: '/assets/katlaA.jpg',
        alt: 'Katla after'
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
                        firstImage={FIRST_IMAGE}
                        secondImage={SECOND_IMAGE}
                        delimiterColor="#000"
                    />                    
                </div>
            </div>
        </div>
    );
}

export default BandA;
