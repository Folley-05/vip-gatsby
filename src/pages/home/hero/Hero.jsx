import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCube, Pagination, Autoplay } from "swiper"
import { useStaticQuery, graphql } from 'gatsby'

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-cube"
import "swiper/css/pagination"

import './hero.css'
import women from './assets/women.png'
import vip from '../../../assets/vip.png'
import secu from '../../../assets/secu.png'

function Hero() {
    const { mdx } = useStaticQuery(query)
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
                    <Slide1 data={mdx} />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide3 />
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
                    <h2 className='text-orange' data-aos="fade-right" data-aos-delay="300">
                        {data.frontmatter.sous_titre}
                    </h2>
                    <h1 data-aos="fade-right" >
                        {data.frontmatter.titre}
                    </h1>
                    <p data-aos="fade-right" data-aos-delay="500" >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptas consequatur architecto asperiores deserunt ea eum distinctio officiis in atque.
                    </p>
                    <button className="bt-st" data-aos="fade-right" data-aos-delay="1000" >
                        {data.frontmatter.button}
                    </button>
                </div>
            </div>
            <div className="images">
                <img src={women} alt="women" data-aos="fade-up" />
                {/* <div className="circle"></div> */}
            </div>
        </div>
    )
}

const Slide2 = () => {
    return (

        <div className="wrapper">
            <div className="images">
                <img src={vip} alt="women" />
            </div>
            <div className="presentation">
                <div className="text">
                    <h1>La solution de Telecommunication adaptee a vos besoins.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptas consequatur architecto asperiores deserunt ea eum distinctio officiis in atque.</p>
                    <button className="bt-st">Get a quote</button>
                </div>
            </div>
        </div>
    )
}
const Slide3 = () => {
    return (

        <div className="wrapper">
            <div className="presentation">
                <div className="text">
                    <h1>Pratiquer votre activite en toute Securite.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus voluptas consequatur architecto asperiores deserunt ea eum distinctio officiis in atque.</p>
                    <button className="bt-st">Get a quote</button>
                </div>
            </div>
            <div className="images">
                <img src={secu} alt="women" />
            </div>
        </div>
    )
}

const query = graphql`
  {
    mdx(frontmatter: {page: {eq: "home"}}, slug: {eq: "hero"}) {
      id
      slug
      frontmatter {
        page
        titre
        sous_titre
        button
      }
      body
    }
  }
`

export default Hero