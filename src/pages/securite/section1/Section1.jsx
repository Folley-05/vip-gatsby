import React from 'react'

import './section1.css'
import Ball from '../../../components/balls/Ball'
import alarm from './alarm.svg'
import guard from './call-guard.svg'
import camera from './cctv-camera.svg'
import fingerprint from './fingerprint.svg'
import smoke from './smoke-detector.svg'

const balls=[
    { label: "Controle d'access", img: fingerprint }, { label: "Camera de surveillance", img: camera },
    { label: "Systeme d'alarme", img: alarm }, { label: "Systeme d'incendie", img: smoke },
    { label: "Appel de garde", img: guard },
]

function Section1() {
    return (
        <div className="section1">
            <div className="wrapper">
                <h2 className='text-orange'>Nous fournissons plusieurs services de securite</h2>
                <Ball data={balls} />
                {/* <div className="secs">
                    <div className="sec">
                        <div className=""><img src={fingerprint} alt="" /></div>
                        <h3>Controle d'access</h3>
                    </div>
                    <div className="sec">
                        <div className=""><img src={camera} alt="" /></div>
                        <h3>Camera de surveillance</h3>
                    </div>
                    <div className="sec">
                        <div className=""><img src={alarm} alt="" /></div>
                        <h3>Systeme d'alarme</h3>
                    </div>
                    <div className="sec">
                        <div className=""><img src={smoke} alt="" /></div>
                        <h3>Systeme d'incendie</h3>
                    </div>
                    <div className="sec">
                        <div className=""><img src={guard} alt="" /></div>
                        <h3>Appel de garde</h3>
                    </div>
                </div> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque aspernatur quas omnis molestiae adipisci! Inventore incidunt sunt alias facere delectus ducimus enim at corporis molestiae? Dolorum delectus illum hic.
                </p>
            </div>
        </div>
    )
}

export default Section1