import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCube, Pagination, Autoplay } from "swiper"
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cube"
import "swiper/css/pagination"

import './hero.css'
import women from './assets/women.png'
import vip from '../../../assets/vip.png'
import secu from '../../../assets/secu.png'

function Hero() {
    // const { mdx } = useStaticQuery(query)
    const { allMdx } = useStaticQuery(query2)
    // console.log("the root data ", mdx)
    return (
        <div className='hero'>
            <div className="bgi">
                <div className=""></div>
            </div>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 8000 }}
                loopedSlides={3}
                pagination={true}
                cubeEffect={{
                    shadow: false,
                }}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Slide1 data={allMdx.edges[0].node} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide2 data={allMdx.edges[1].node} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide3 data={allMdx.edges[2].node} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

const Slide1 = ({ data }) => {

    return (

        <div className="wrapper">
            <div className="presentation">
                <div className="text">
                    <h2 className='text-orange' >
                        {data.frontmatter.sous_titre}
                    </h2>
                    <h1>
                        {data.frontmatter.titre}
                    </h1>
                    <MDXRenderer>
                        {data.body}
                    </MDXRenderer>
                    {/* <p >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptas consequatur architecto asperiores deserunt ea eum distinctio officiis in atque.
                    </p> */}
                    <button className="bt-st" >
                        {data.frontmatter.button}
                    </button>
                </div>
            </div>
            <div className="images">
                <img src={women} alt="women" />
                {/* <div className="circle"></div> */}
            </div>
        </div>
    )
}

const Slide2 = ({ data }) => {
    return (

        <div className="wrapper">
            <div className="images">
                <img src={vip} alt="women" />
            </div>
            <div className="presentation">
                <div className="text">
                    <h1>{data.frontmatter.titre}</h1>
                    <MDXRenderer>{data.body}</MDXRenderer>
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptas consequatur architecto asperiores deserunt ea eum distinctio officiis in atque.</p> */}
                    <button className="bt-st">{data.frontmatter.button}</button>
                </div>
            </div>
        </div>
    )
}
const Slide3 = ({data}) => {
    return (

        <div className="wrapper">
            <div className="presentation">
                <div className="text">
                    <h1>{data.frontmatter.titre}</h1>
                    <MDXRenderer>{data.body}</MDXRenderer>
                    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptas consequatur architecto asperiores deserunt ea eum distinctio officiis in atque.</p> */}
                    <button className="bt-st">{data.frontmatter.button}</button>
                </div>
            </div>
            <div className="images">
                <img src={secu} alt="women" />
            </div>
        </div>
    )
}

// const query = graphql`
//   {
//     mdx(frontmatter: {page: {eq: "home"}}, slug: {eq: "hero"}) {
//       id
//       slug
//       frontmatter {
//         page
//         titre
//         sous_titre
//         button
//       }
//       body
//     }
//   }
// `

export const query2 = graphql`
{
  allMdx(
    filter: {frontmatter: {title: {eq: "hero-slides"}}}
    sort: {fields: slug, order: ASC}
  ) {
    edges {
      node {
        id
        frontmatter {
          button
          title
          titre
          sous_titre
        }
        body
      }
    }
  }
}
`

export default Hero