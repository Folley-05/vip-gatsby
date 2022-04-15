import React from 'react'
import { BsShieldFillCheck } from 'react-icons/bs'
import { useStaticQuery, graphql } from 'gatsby'

import './security.css'
import secu from './secu.svg'
import lock from './lock2.svg'

function Security() {
    const data=useStaticQuery(query)
    const title=data.mdx.frontmatter
    const elts=data.allMdx.nodes
    console.log("the first query", title, elts)
    return (
        <div className="home-security">
            <div className="wrapper">
                <div className="images" >
                    <img src={secu} alt="securgence" />
                    <img src={lock} alt="lock" />
                </div>
                <div className="contain">
                    <img src={secu} alt="securgence" />
                    <h1 className='text-orange'>{title.titre}</h1>
                    <h3>{title.sous_titre}</h3>
                    <div className="tags">
                    {
                        elts.map(({frontmatter}, i)=><Tag label={frontmatter.titre} details={frontmatter.detail} key={`secu-${i}`} />)
                    }
                        {/* <Tag label="Contrôle d'accès" />
                        <Tag label="Caméra de surveillance" />
                        <Tag label="Système d'alarme" />
                        <Tag label="Alarme Incendie" />
                        <Tag label="Appel de Garde" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

const Tag = ({ label, details }) => {
    return (
        <div className="tag" >
            <div className="">
                <BsShieldFillCheck color='#E8B012' size={50} />
            </div>
            <div className="tag-text">
                <h2>{ label }</h2>
                {details}
            </div>
        </div>
    )
}

const query = graphql`
  {
    allMdx(filter: {slug: {ne: "security"}, frontmatter: {page: {eq: "security"}}}) {
      nodes {
        frontmatter {
          titre
          detail
        }
        slug
      }
    }
    mdx(frontmatter: {page: {eq: "security"}, role: {eq: "title"}}) {
      id
      slug
      frontmatter {
        page
        titre
        sous_titre
        button
        role
      }
    }
  }
`

export default Security