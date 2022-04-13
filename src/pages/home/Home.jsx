import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './home.css'
import Hero from './hero/Hero'
import About from './about/About'
// import Sectors from './sectors/Sectors'
import Security from './security/Security'
import Telecom from './telecom/Telecom'
// import Radio from './radio/Radio'
// import Company from './company/Company'
// import Testimonials from './Testimonials/Testimonials'
// import Map from './map/Map'

function Home() {
    const {allMdx}=useStaticQuery(query)
    // console.log("the data ", allMdx.nodes)
    return (
        <div className='home'>
            <Hero data={allMdx.nodes[0]} />
            <About data={allMdx.nodes[1]}  />
            <Security />
            <Telecom />
            {/* <Radio />
            <Sectors />
            <Company />
            <Testimonials /> */}
            {/* <Map /> */}
        </div>
    )
}

const query = graphql`
{
    allMdx(filter: {frontmatter: {page: {eq: "home"}}}) {
      nodes {
        slug
        frontmatter {
          page
          titre
        }
        body
      }
    }
  }
`

export default Home

