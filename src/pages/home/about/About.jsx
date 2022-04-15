import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import './about.css'
import secu from '../../../assets/secu.png'
import vip from '../../../assets/vip.png'
import child from './assets/child.png'

function About() {
    const {mdx}=useStaticQuery(query)
    // console.log(mdx)
    return (
        <div className="about">
            <div className="wrapper">
                <h1 className="title text-orange">{mdx.frontmatter.titre_section}</h1>
                <h1 className="short-title">{mdx.frontmatter.titre}</h1>
                <div className="contain" >
                    <div className="description">
                        <div className="vip">
                            <div className="vip-img"><img src={vip} alt="" /></div>
                            <p>{mdx.frontmatter.vip_text}</p>
                        </div>
                        <div className="secure">
                            <div className="secu-img"><img src={secu} alt="" /></div>
                            <p>{mdx.frontmatter.secur_text}</p>
                        </div>
                    </div>
                    <div className="image" >
                        <img src={child} alt="about" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const query = graphql`
  {
    mdx(frontmatter: {page: {eq: "home"}}, slug: {eq: "apropos"}) {
      id
      slug
      frontmatter {
        page
        titre_section
        titre
        vip_text
        secur_text
      }
      body
    }
  }
`

export default About