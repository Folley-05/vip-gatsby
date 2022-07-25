import React from 'react'
// import { FiPlayCircle } from 'react-icons/fi'
// import { ImPlay2 } from 'react-icons/im'

import './hero.css'
import hero from './hero-image.png'

function Hero() {
    return (
        <div className="company-hero">
            <div className="wrapper">
                <div className="content">
                    <div className="img">
                        <img src={hero} alt="" />
                    </div>
                    <div className="text">
                        <h2>Bienvenue chez <span>SECURGENCE | VIP Telecom</span></h2>
                        <p>
                            Et voluptate esse accusantium accusamus natus reiciendis quidem voluptates similique aut.
                        </p>
                        <div className="control">
                            <button className="bt-st">
                                Get Started
                            </button>
                            {/* <div className="video">
                               <ImPlay2 size={30} color='#E8B012' /> &ensp; Watch video 
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero