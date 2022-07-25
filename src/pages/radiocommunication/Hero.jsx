import React from "react";

import './hero.css'
import hero from './hero.png'

function Hero() {
    return (
        <div className="radiocom-hero">
            <div className="wrapper">
                <div className="contain">
                    <div className="text">
                        <div className="">
                            <h1>Radiocommunication</h1>
                            <h3>La meilleure solution pour vos besoins</h3>
                        </div>
                        <div className="line" />
                    </div>
                    <div className="img">
                        <img src={hero} alt="image-telecom" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero