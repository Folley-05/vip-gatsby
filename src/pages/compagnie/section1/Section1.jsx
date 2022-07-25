import React from 'react'

import './section1.css'
// import activites from './activites.svg'
import radio from './radio.svg'
import security from './security.svg'
import telecom from './telecom.svg'
import activites from './activites.png'

function Section1() {
	return (
		<div className="section1">
			<div className="wrapper">
				<div className="blocks">
					<Block title="Secteurs d'activite" img={ activites } />
					<Block title="Securite" img={ security } />
					<Block title="Telecommunication" img={telecom} />
					<Block title="Radiocommunication" img={ radio } />
				</div>
			</div>
		</div>
	)
}

const Block = ({ title, img, text }) => {
	return (
		<div className="block">
			<img src={ img } alt="radio" />
			<h3>{ title }</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita odio quae minus voluptatem consequatur nihil magni ducimus quas delectus pariatur. Corporis, quia! Quam at porro sunt totam consequatur animi quasi?
			</p>
		</div>
	)
}

export default Section1