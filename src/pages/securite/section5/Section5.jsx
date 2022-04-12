import React from 'react'

import './section5.css'
import incendie from './incendie.jpg'

function Section5() {
    return (
        <div className="section5">
            <img src={incendie} alt="" />
            <div className="wrapper">
                <div className="contain">
                    <h2 className='text-orange'>Systeme d'incendie</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore beatae odio dicta iure maiores repudiandae quasi odit ipsum cum quo. Harum quia assumenda similique molestiae repudiandae numquam quae maxime illum?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea ex numquam 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section5