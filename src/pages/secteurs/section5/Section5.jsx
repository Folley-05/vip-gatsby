import React from 'react'

import './section5.css'
import foret from './foret.jpg'

function Section3() {
  return (
    <div className="sectors-section5">
        <div className="wrapper">
            <h1 className='tl1'>Secteur Forestier</h1>
            <div className="left">
                <div className="">
                    <img src={foret} alt="camera" />
                </div>
            </div>
            <div className="rigth">
                <h1 className='tl2'>Secteur Forestier</h1>
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

export default Section3