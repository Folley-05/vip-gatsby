import React from 'react'

import './section3.css'
import garde from './garde.jpg'

function Section3() {
    return (
        <div className="section3">
            <div className="wrapper">
                <div className="tl1">
                    <h2>Appel de garde</h2>
                    <p>
                        Repellendus sequi in quod consequuntur illum eaque dignissimos, omnis quo tempora vero obcaecati quam,
                    </p>
                </div>
                <div className="rigth">
                    <div className=""><img src={garde} alt="" /></div>
                </div>
                <div className="left">
                    <div className="tl2">
                        <h2>Appel de garde</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. incidunt ullam animi quae!
                        </p>
                    </div>
                    <h3>Necessitatibus, voluptates dolorum suscipit veritatis.</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi in quod consequuntur illum eaque dignissimos, omnis quo tempora vero obcaecati quam, laborum sed, eius sapiente voluptas ad recusandae unde!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod rerum accusantium molestiae itaque mollitia temporibus reiciendis culpa totam, vitae praesentium hic doloribus veniam delectus numquam obcaecati minima magni! Perferendis, aspernatur.
                    </p>
                    <button className='bt-st' >En savoir plus</button>
                </div>
            </div>
        </div>
    )
}

export default Section3