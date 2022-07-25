import React from 'react'
import { GiMaterialsScience, GiTeamIdea } from 'react-icons/gi'
import { BsPatchCheckFill } from 'react-icons/bs'

import './section2.css'
import Title from '../../../components/title/Title'

function Section2() {
	return (
		<div className="section2">
			<div className="wrapper">
				<Title text="A PROPOS" />
				<div className="content">
					<div className="left">
						<h3>Informations</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti illum omnis iure, a accusantium vitae dicta facere maiores placeat odit minus, veniam, labore obcaecati dolores ea recusandae expedita adipisci minima.
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a cupiditate distinctio suscipit eos quidem quod molestias, iusto placeat architecto! Sunt dignissimos atque fuga ratione qui velit! Maxime, corrupti impedit!
						</p>
					</div>
					<div className="rigth">
						<h3>Nos valeurs</h3>
						<p>
							Consectetur adipisicing elit. Aut excepturi illum Deserunt quam laudantium eaque quasi explicabo voluptatem corporis.
						</p>
						<div className="pillars">
							<div className="pillar">
								<GiMaterialsScience size={40} />
								<b> Creativite</b>
							</div>
							<div className="pillar">
								<BsPatchCheckFill size={40} />
								<b> Qualite de service</b>
							</div>
							<div className="pillar">
								<GiTeamIdea size={40} />
								<b> Travail d'equipe</b>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Section2