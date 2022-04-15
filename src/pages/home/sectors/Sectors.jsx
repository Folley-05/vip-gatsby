import React from 'react'
import { BsCurrencyExchange, BsBuilding } from 'react-icons/bs'
import { FaIndustry, FaHospital } from 'react-icons/fa'
import { GiBurningForest, GiMineWagon } from 'react-icons/gi'
import 'swiper/css'
import "swiper/css/grid"
import 'swiper/css/pagination'


import './sectors.css'
import puz from './puz.svg'

function Sectors() {
	return (
		<div className="home-sectors">
			<div className="wrapper">
				<div className="contain">
					{/* <img src={secteurs} alt="secteurs" /> */}
					<h1>Secteurs D'Activites</h1>
					<h3>Vivamus ut ipsum dolor site amet consectetur adipisicing sequi fermentum quam, eget egestas mauris. Phasellus in tellus.</h3>
					<div className="tags">
						<Tag label="Industriel" >
							<FaIndustry color='#E8B012' size={40} />
						</Tag>
						<Tag label="Commercial" >
							<BsCurrencyExchange color='#E8B012' size={40} />
						</Tag>
						<Tag label="Immeubles" >
							<BsBuilding color='#E8B012' size={40} />
						</Tag>
						<Tag label="Forestier" >
							<GiBurningForest color='#E8B012' size={40} />
						</Tag>
						<Tag label="Hospitalier" >
							<FaHospital color='#E8B012' size={40} />
						</Tag>
						<Tag label="Minier" >
							<GiMineWagon color='#E8B012' size={40} />
						</Tag>
					</div>
				</div>
				<div className="images" >
					<img src={puz} alt="secteurs" />
				</div>
			</div>
		</div>
	)
}

const Tag = ({ label, details, children }) => {
	return (
		<div className="tag" >
			<div className="">
				{children}
			</div>
			<div className="tag-text">
				<h2>{label}</h2>
				Illum rerum hic quo Commodi nesciunt egestas mauris.
			</div>
		</div>
	)
}

export default Sectors

