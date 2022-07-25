import React from 'react'

import './hero.css'
import hero from './hero.png'

function Hero() {
    return (
        <div className="sector-hero">
        <div className="wrapper">
            <div className="contain">
                <div className="text">
                    <div className="">
                        <h1>Nos Secteurs D'Activites</h1>
                        <h3> Industriel | Commercial | Immeubles et Locatifs | Forestiers | Hospitalier | Minier </h3>
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


{/* <div className="wrapper">
<div className="contain">
    <h1>Nos Secteurs D'activites</h1>
    <div className="sectors-details">
        <span className="sector">Industriel</span>
        <div className="divider" />
        <span className="sector">Commercial</span>
        <div className="divider" />
        <span className="sector">Immeubles Locatifs</span>
        <div className="divider" />
        <span className="sector">Forestiers</span>
        <div className="divider" />
        <span className="sector">Hospitalier</span>
        <div className="divider" />
        <span className="sector">Minier</span>
    </div>
</div>
</div> */}