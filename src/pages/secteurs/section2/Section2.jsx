import React from 'react'

import './section2.css'
import indus from './industriel1.jpg'

function Section2() {
    return (
        <div className="sectors-section2">
            <div className="wrapper">
                <h1 className='tl1'>Secteur Industriel</h1>
				<div className="left">
					<div className="">
						<img src={indus} alt="camera" />
					</div>
				</div>
				<div className="rigth">
					<h1 className='tl2'>Secteur Industriel</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, adipisci dicta tempora reiciendis aspernatur culpa repellendus? Molestiae quis iste dignissimos, odio non alias iusto. Nobis aspernatur molestiae tenetur dicta a.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat asperiores, expedita aut neque minima laudantium culpa explicabo exercitationem labore voluptatum perspiciatis! Nulla aperiam veniam voluptatum iste, voluptatibus magnam asperiores.
					</p>
					<button className='bt-st'>En Savoir Plus</button>
				</div>
            </div>
        </div>
    )
}

export default Section2