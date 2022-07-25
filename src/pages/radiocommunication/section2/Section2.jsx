import React from 'react'

import './section2.css'
import radio from './radio.svg'
import onde from './onde.png'
import tel from './tel.svg'
import couverture from './couverture.svg'

function Section2() {
  return (
    <div className="section2">
        <div className="wrapper">
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
            </p>
            <div className="blocks">
                <Block titre="Vente et Location de Radio" text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" img={radio} />
                <Block titre="Temps d'onde" text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" img={onde} />
                <Block titre="Accès Téléphonique" text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" img={tel} />
                <Block titre="Couverture" text="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi" img={couverture} />
            </div>
        </div>
    </div>
  )
}

const Block=({titre, text, img})=>{
    return (
        <div className="block">
            <div className="head"></div>
            <div className="block-content">
                <div className="icon">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h3>{titre}</h3>
                    <p>{text}</p>
                </div>
                <div className="over"></div>
            </div>
        </div>
    )
}

export default Section2