import React from 'react'
import { graphql } from 'gatsby'

import AppRoot from '../components/approot/AppRoot'
import Home from './home/Home'

function Index({data}) {
    console.log("the data ", data)
	return (
		<AppRoot>
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