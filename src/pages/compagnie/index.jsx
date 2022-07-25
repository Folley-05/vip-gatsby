import React from 'react'
import AppRoot from '../../components/approot/AppRoot'

import Hero from './Hero'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
// import Section5 from './section5/Section5'
// import Section6 from './section6/Section6'
// import Section7 from './section7/Section7'

function index({ location }) {
    return (
        <AppRoot location={location}>
            <div className="company">
                <Hero />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </div>
        </AppRoot>
    )
}

export default index