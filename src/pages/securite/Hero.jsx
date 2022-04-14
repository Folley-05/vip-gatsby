import React from 'react'

import './hero.css'
// import hero from './hero.png'
import hero from './hero.svg'

function Hero() {
    return (
        <div className="security-hero">
            <div className="wrapper">
                <div className="contain">
                    <div className="text">
                        <div className="">
                            <h1>Securite</h1>
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