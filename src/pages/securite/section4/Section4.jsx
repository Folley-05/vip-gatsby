import React from 'react'

import './section4.css'
import ctrl from './ctrl.jpg'

function Section4() {
    return (
        <div className="section4">
            <div className="wrapper">
                <div className="right">
                    <h2 className="text-orange">Controle d'access</h2>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, consequuntur reprehenderit atque iusto laudantium deleniti. Quisquam culpa eligendi odit vero error reiciendis temporibus. Consectetur, neque. Doloribus nostrum non voluptatum ab.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, nostrum quod perspiciatis quam deserunt ratione vel laborum. Aut maiores minus laborum labore accusamus natus cum beatae repellat. Illum, in officiis! <br />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus minima dignissimos, ratione quia explicabo veniam consequatur, quibusdam porro possimus, eius molestias dolores repudiandae minus aut. Rem, at ratione. Dolor, consequatur?
                    </p>
                    <button className='bt-st'>En savoir plus</button>
                </div>
                <div className="left">
                    <div className=""><img src={ctrl} alt="controle" /></div>
                </div>
            </div>
        </div>
    )
}

export default Section4