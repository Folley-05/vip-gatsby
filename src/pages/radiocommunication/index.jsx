import React from 'react'
import AppRoot from '../../components/approot/AppRoot'

import Hero from './Hero'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'

function index({location}) {
    return (
        <AppRoot location={location}>
            <div className="radiocom">
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