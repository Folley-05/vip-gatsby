import React from 'react'

import './section7.css'
import hopital from './hopital.jpg'
import mine from './mine.jpg'

function Section4() {
    return (
        <div className="sectors-section7">
            <div className="wrapper">
                <h1> Nous offrons egalement des services dans ces domaines </h1>
                <div className="contain">
                    <div className="block">
                        <img src={hopital} alt="hopital" />
                        <div className="">
                            <h2 className="text-orange">Hospitalier</h2>
                            <p>
                                Rerum dolorem nulla quasi. Voluptatibus mollitia blanditiis reprehenderit,
                                beatae nostrum fugit totam, perferendis dignissimos quae impedit excepturi.
                            </p>
                        </div>
                    </div>
                    <div className="block">
                        <img src={mine} alt="mine" />
                        <div className="">
                            <h2 className="text-orange">Minier</h2>
                            <p>
                                Rerum dolorem nulla quasi. Voluptatibus mollitia blanditiis reprehenderit,
                                beatae nostrum fugit totam, perferendis dignissimos quae impedit excepturi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4