import React from 'react'
import { BsCheckAll } from 'react-icons/bs'

import './section1.css'
import Title from '../../../components/title/Title'
import Ball from '../../../components/balls/Ball'
import radio from './radio.svg'
import ondes from './ondes.svg'
import tel from './tel.svg'
import couverture from './couverture.svg'


const balls=[
    { label: "Vente et Location de Radio", img: radio }, { label: "Temps d'onde", img: ondes },
    { label: "Accès Téléphonique", img: tel }, { label: "Couverture", img: couverture }
]

function Section1() {
    return (
        <div className="section1">
            <div className="wrapper">
                <Title text="Nos competences en Radiocommunication" />
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
                <h2 className='text-orange'>Nos service en Radiocommunication</h2>
                <Ball data={balls} nb={4} />
                <p className='descript'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque aspernatur quas omnis molestiae adipisci! Inventore incidunt sunt alias facere delectus ducimus enim at corporis molestiae? Dolorum delectus illum hic.
                </p>
                
            </div>
        </div>
    )
}

export default Section1