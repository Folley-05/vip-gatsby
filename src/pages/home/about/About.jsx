import React from 'react'

import './about.css'
import secu from '../../../assets/secu.png'
import vip from '../../../assets/vip.png'
import child from './assets/child.png'

function About() {
    return (
        <div className="about">
            <div className="wrapper">
                <h1 className="title text-orange">A PROPOS DE NOUS</h1>
                <h1 className="short-title">Lorem est facilis hic laudantium tenetur voluptatum!</h1>
                <div className="contain" >
                    <div className="description">
                        <div className="vip">
                            <div className="vip-img"><img src={vip} alt="" /></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis ipsum, molestias aut deleniti odio reiciendis eaque praesentium veniam quam.</p>
                        </div>
                        <div className="secure">
                            <div className="secu-img"><img src={secu} alt="" /></div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nobis ipsum, molestias aut deleniti odio reiciendis eaque praesentium veniam quam.</p>
                        </div>
                    </div>
                    <div className="image" data-aos="fade-left" >
                        <img src={child} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About