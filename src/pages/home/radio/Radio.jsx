import React from 'react'
import { MdRadio, MdTimeline, MdSpeakerPhone } from 'react-icons/md'
import { RiSignalTowerLine } from 'react-icons/ri'

import './radio.css'
import radio from './radio.svg'

function Radio() {
    return (
        <div className="radio">
            <div className="wrapper">
                <div className="images">
                    <img src={radio} alt="radiocom" />
                </div>
                <div className="contain">
                    <h1 className='text-orange'>Radiocommunication</h1>
                    <h3>Lorem ipsum dolor site amet consectetur. Vivamus ut fermentum quam, eget egestas mauris. Phasellus in tellus.</h3>
                    <div className="tags">
                        <Tag label="Vente et Location de Radio" >
                            <MdRadio color='#E8B012' size={50} />
                        </Tag>
                        <Tag label="Temps d'onde" >
                            <MdTimeline color='#E8B012' size={50} />
                        </Tag>
                        <Tag label="Accès Téléphonique" >
                            <MdSpeakerPhone color='#E8B012' size={50} />
                        </Tag>
                        <Tag label="Couverture" >
                            <RiSignalTowerLine color='#E8B012' size={50} />
                        </Tag>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Tag = ({ label, details, children }) => {
    return (
        <div className="tag">
            <div className="">
                { children }
            </div>
            <div className="tag-text">
                <h2>{label}</h2>
                Illum rerum hic quo Commodi nesciunt egestas mauris.
            </div>
        </div>
    )
}

export default Radio
