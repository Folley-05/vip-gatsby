import React from 'react'
import { BsCheckAll } from 'react-icons/bs'

import './section1.css'
import Title from '../../../components/title/Title'
import Ball from '../../../components/balls/Ball'
import cable from './cable.svg'
import fibre from './fibre.svg'
import onde from './onde.svg'
import reseau from './reseau.svg'
import wifi from './wifi.svg'
import internet from './internet.svg'
import ip from './ip.svg'
import satellite from './satellite.svg'

const balls=[
    { label: "Cablage structure", img: cable }, { label: "Fibre Optique", img: fibre }, { label: "Téléphonie IP", img: ip },
    { label: "Liaison micro-onde", img: onde }, { label: "Administration de réseau", img: reseau }, { label: "Distribution Wifi", img: wifi },
    { label: "Distribution Internet", img: internet }, { label: "Téléphonie Satellitaire", img: satellite }
]

function Section1() {
    return (
        <div className="section1">
            <div className="wrapper">
                <Title text="Notre offre" />
                <div className="text">
                    <div className="">
                        <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Iure, sit fugiat adipisci,  qui ut ducimus quae assumenda.
                        </p>
                        <button className='bt-st'>En savoir plus</button>
                    </div>
                    <div className="">
                        <p>Consectetur adipisicing elit. Aut excepturi illum Deserunt quam laudantium eaque quasi explicabo voluptatem corporis.</p>
                        <ul>
                            <li> <BsCheckAll color='#E8B012' size={40} /> &ensp; <b> Ullamco laboris nisi ut aliquip ex ea commodo consequat</b></li>
                            <li> <BsCheckAll color='#E8B012' size={40} /> &ensp; <b> Duis aute irure dolor in reprehenderit in voluptate velit</b></li>
                            <li> <BsCheckAll color='#E8B012' size={40} /> &ensp; <b> Ullamco laboris nisi ut aliquip ex ea commodo consequat</b></li>
                        </ul>
                    </div>
                </div>
                <h2 className='text-orange'>Nos service en Telecommunication</h2>
                <Ball data={balls} />
                <p className='descript'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque aspernatur quas omnis molestiae adipisci! Inventore incidunt sunt alias facere delectus ducimus enim at corporis molestiae? Dolorum delectus illum hic.
                </p>
                
            </div>
        </div>
    )
}

export default Section1