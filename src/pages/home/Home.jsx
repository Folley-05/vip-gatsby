import React from 'react'

import './home.css'
import Hero from './hero/Hero'
import About from './about/About'
import Security from './security/Security'
import Telecom from './telecom/Telecom'
// import Radio from './radio/Radio'
// import Sectors from './sectors/Sectors'
// import Company from './company/Company'
// import Testimonials from './Testimonials/Testimonials'
// import Map from './map/Map'

function Home() {
    return (
        <div className='home'>
            <Hero />
            <About />
            <Security />
            <Telecom />
            {/* <Radio />
            <Sectors />
            <Company /> */}
            {/* <Testimonials /> */}
            {/* <Map /> */}
        </div>
    )
}

export default Home

