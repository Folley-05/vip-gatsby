import React from 'react'

import './section2.css'
import cable from './cable.png'
import fibre from './fibre.png'
import onde from './onde.png'
import ip from './ip.svg'

function Section2() {
  return (
    <div className="section2">
        <div className="wrapper">
            <p>
                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit.
                Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas
            </p>
            <div className="blocks">
                <Block title="Cablage structure" img={cable} text="" />
                <Block title="Fibre optique" img={fibre} text="" />
                <Block title="Telephonie IP" img={ip} text="" />
                <Block title="Liaison micro-ond" img={onde} text="" />
            </div>
        </div>
    </div>
  )
}

const Block=({ title, img, text })=>{
    return (
        <div className="block">
            <div className="head"></div>
            <div className="block-content">
                <div className="icon">
                    <img src={img} alt="" />
                </div>
                <div className="text">
                    <h3>{ title }</h3>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                </div>
                <div className="over"></div>
            </div>
        </div>
    )
}

export default Section2