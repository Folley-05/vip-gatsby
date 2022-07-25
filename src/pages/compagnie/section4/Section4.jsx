import React from 'react'
import { FaLinkedin, FaTwitter, FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import "swiper/css/grid"
import 'swiper/css/pagination'

import './section4.css'
import Title from '../../../components/title/Title'
import person1 from './person1.jpeg'

function Section4() {
    return (
        <div className="section4">
            <div className="wrapper">
                <Title text="OUR TEAM" />
                <p>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </p>
                <div className="team">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        autoplay={{ delay: 1000 }}
                        breakpoints={{
                            992: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1400: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        <SwiperSlide><Person /></SwiperSlide>
                        <SwiperSlide><Person /></SwiperSlide>
                        <SwiperSlide><Person /></SwiperSlide>
                        <SwiperSlide><Person /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

const Person = () => {
    return (
        <div className="person">
            <div className="img">
                <img src={person1} alt="" />
            </div>
            <div className="text">
                <h4>Jean Lambert</h4>
                <span className='poste'>Chief Executive Officer</span>
                <span className="line" />
                <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                </p>
                <div className="socials">
                    <div className="ico">
                        <FaLinkedin size={20} color="#E8B012" />
                    </div>
                    <div className="ico">

                        <FaTwitter size={20} color="#E8B012" />
                    </div>
                    <div className="ico">
                        <FaFacebookSquare size={20} color="#E8B012" />
                    </div>
                    <div className="ico">
                        <FaInstagramSquare size={20} color="#E8B012" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4