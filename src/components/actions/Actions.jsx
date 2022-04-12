import React from 'react'
import { MdFacebook } from 'react-icons/md'
// import { BiChevronUp } from 'react-icons/bi'
import { FaChevronCircleUp } from 'react-icons/fa'

import './actions.css'

function Actions() {
	const scrollToTop = () => {
		document.querySelector('#approot').scrollTo(0, 0)
	}
	return (
		<div className="actions">
			<div className="action totop hide" id="totop" onClick={scrollToTop}>
				<FaChevronCircleUp size={45} />
			</div>
			<a href="https://web.facebook.com/viptelecomsecurgence/?_rdc=1&_rdr" target="_blank">
				<div className="action facebook">
					<MdFacebook size={50} />
				</div>
			</a>
		</div>
	)
}

export default Actions