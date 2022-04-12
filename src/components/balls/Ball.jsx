import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import "swiper/css/grid"
import 'swiper/css/pagination'

import './ball.css'

function Ball({data, nb}) {

    return (
        <div className="comp-balls">
            <div className="secs">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    autoplay={{ delay: 1000 }}
                    // loop={true}
                    breakpoints={{
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        // when window width is >= 992px
                        992: {
                            slidesPerView: nb < 5 ? nb : 5,
                            spaceBetween: 20,
                        },
                    }}
                >
                    { data.map((ball, i)=><SwiperSlide><Item label={ball.label} img={ball.img} n={i+1} key={"ball-"+i} /></SwiperSlide>) }
                </Swiper>
            </div>
        </div>
    )
}

const Item = ({label, img, n}) => {
    console.log("the image ", img)
    return (
        <div className={"sec sec-"+n}>
            <div className="">
                <img className={"img-"+n} src={img} alt="" />
            </div>
            <h3>{label}</h3>
        </div>
    )
}

export default Ball