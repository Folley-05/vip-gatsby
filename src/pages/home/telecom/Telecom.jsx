import React from 'react'

import './telecom.css'
import vip from './vip.png'
import telecom2 from './telecom.svg'
import cable from './cable.svg'
import fibre from './fibre.svg'
import internet from './internet.svg'
import ip from './ip.svg'
import onde from './onde.svg'
import reseau from './reseau.svg'
import satellite from './satellite.svg'
import wifi from './wifi.svg'

function Telecom() {
    return (
        <div className="home-telecom">
            <div className="wrapper">
                <div className="contain">
                    <h1 className='text-orange'>Telecommunication</h1>
                    <h3>Vivamus ut fermentum quam, eget egestas mauris. Phasellus in tellus. Lorem ipsum dolor site amet consectetur adipisicing sequi!</h3>
                    <div className="tags">
                        <Tag label="Cablage Structuré" image={cable} />
                        <Tag label="Téléphonie IP" image={ip} />
                        <Tag label="Distribution Wi-Fi" image={wifi} />
                        <Tag label="Distribution Internet" image={internet} />
                        <Tag label="Fibre Optique" image={fibre} />
                        <Tag label="Liaison Micro-Onde" image={onde} />
                        <Tag label="Administration Reaseau" image={reseau} />
                        <Tag label="Telephonie Satellitaire" image={satellite} />
                    </div>
                </div>
                <div className="images" data-aos="zoom-out-down">
                    <img src={telecom2} alt="telecom" />
                    <img src={vip} alt="vip" />
                </div>
            </div>
        </div>
    )
}

const Tag = ({ label, details, image }) => {
    return (
        <div className="tag" data-aos="zoom-out-down">
            <div className="">
                <img src={image} alt="cable" />
            </div>
            <div className="tag-text">
                <h2>{label}</h2>
                Illum rerum hic quo Commodi nesciunt egestas mauris.
            </div>
        </div>
    )
}

export default Telecom

