import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'

import './security.css'
import secu from './secu.svg'
import lock from './lock2.svg'

function Security() {
    return (
        <div className="home-security">
            <div className="wrapper">
                <div className="images" data-aos="zoom-out-down">
                    <img src={secu} alt="securgence" />
                    <img src={lock} alt="lock" />
                </div>
                <div className="contain">
                    <img src={secu} alt="securgence" />
                    <h1 className='text-orange'>Lorem ipsum dolor site amet consectetur adipisicing sequi!</h1>
                    <h3>Vivamus ut fermentum quam, eget egestas mauris. Phasellus in tellus.</h3>
                    <div className="tags">
                        <Tag label="Contrôle d'accès" />
                        <Tag label="Caméra de surveillance" />
                        <Tag label="Système d'alarme" />
                        <Tag label="Alarme Incendie" />
                        <Tag label="Appel de Garde" />
                        {/* <Tag label="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Tag = ({ label, details }) => {
    return (
        <div className="tag" data-aos="zoom-out-down">
            <div className="">
                <BsShieldFillCheck color='#E8B012' size={50} />
            </div>
            <div className="tag-text">
                <h2>{ label }</h2>
                Illum rerum hic quo Commodi nesciunt egestas mauris.
            </div>
        </div>
    )
}

export default Security