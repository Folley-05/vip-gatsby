import React from 'react'

import './hero.css'
import hero from './hero.png'

function Hero() {
    return (
        <div className="telecom-hero">
            <div className="wrapper">
                <div className="contain">
                    <div className="text">
                        <div className="">
                            <h1>Telecommunication</h1>
                            <h3>La meilleure solution pour vos besoins</h3>
                        </div>
                        <div className="line" />
                    </div>
                    <div className="img">
                        <img src={hero} alt="telecom" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero