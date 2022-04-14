import React from 'react'
import { graphql } from 'gatsby'

import AppRoot from '../components/approot/AppRoot'
import Home from './home/Home'

function Index({location, data}) {
    // console.log("the data ", data, location)
	return (
		<AppRoot location={location}>
			<Home />
		</AppRoot>
	)
}

export default Index


export const query = graphql`
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