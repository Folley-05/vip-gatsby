import React from 'react'
import { MdOutlineCable } from 'react-icons/md'

import './company.css'
import man from './man.png'

function Company() {
    return (
        <div className="company">
            <div className="wrapper">
                <h1 className='text-orange'>Company</h1>
                <div className="contain">
                    <div className="left">
                        <Item label="Nos réalisations" text={text} />
                        <Item label="Notre équipe" text={text} />
                        <Item label="À propos" text={text} />
                        <Item label="Carrière" text={text} />
                        <Item label="Nous joindre" text={text} />
                        <Item label="Blog" text={text} />
                    </div>
                    <div className="right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex correpellat culpa quam dolorem!
                        sit amet consectetur adipisicing elit. Ex correpellat culpa quam
                        </p>
                        <img src={man} alt="company" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Item = ({ label, text }) => {
    return (
        <div className="item">
            <div className="icon"><MdOutlineCable size={50} /></div>
            <h2>{label}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Company

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, hic quae tenetur ducimus accusamus"
