import React, { useState } from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import "swiper/css/grid"
import 'swiper/css/pagination'

import './section3.css'
import Title from '../../../components/title/Title'

import img1 from './img1.jpeg'

const Projects={
    security: [
        { title: "Security One" }, { title: "Security Two" }, { title: "Security Three" }, 
    ],
    telecom: [
        { title: "Telecom One" }, { title: "Telecom Two" }, { title: "Telecom Three" }, { title: "Telecom Four" } 
    ],
    radiocom: [
        { title: "Radiocom One" }, { title: "Radiocom Two" }
    ]
}

function Section3() {
    const [button, setButton]=useState(1)
    const [projects, setProjects]=useState("all")
    const takeProjects=()=>{
        switch (projects) {
            case "all":
            return [...Projects.security, ...Projects.telecom, ...Projects.radiocom]
            case "security":
            return Projects.security
            case "telecom":
            return Projects.telecom
            case "radiocom":
            return Projects.radiocom
            default:
            return [...Projects.security, ...Projects.telecom, ...Projects.radiocom]
        }
    }
    const changeList=(n, cat)=>{
        setButton(n)
        setProjects(cat)
    }
    return (
        <div className="section3">
            <div className="wrapper">
                <Title text="NOS REALISATIONS" />
                <div className="control">
                    <button className={ button===1 ? "focus" : "" } onClick={()=>changeList(1, "all")} >
                        Tous
                    </button>
                    <button className={ button===2 ? "focus" : "" } onClick={()=>changeList(2, "security")} >
                        Securite
                    </button>
                    <button className={ button===3 ? "focus" : "" } onClick={()=>changeList(3, "telecom")} >
                        Telecom
                    </button>
                    <button className={ button===4 ? "focus" : "" } onClick={()=>changeList(4, "radiocom")} >
                        Radiocom
                    </button>
                </div>
                <div className="projects">
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
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {
                            takeProjects().map(project=><SwiperSlide><Project data={project} /></SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

const Project = ({data}) => {
    return (
        <div className="project">
            <img src={img1} alt="" />
            <div className="text">
                <h4>{data.title}</h4>
                <p>
                    hloremnce citaudoprmeedn lor aturiome fretorisca impacta sonurioste fetghandk las devionuer teriblor impresionayer comuinytstrfehve is possibiliterare impactuosterous posibaliyteraffccv herrocticqueter terrobli etc tres terrrinlloer.
                </p>
            <div className="circle" />
            </div>
            <div className="see"> Voir Plus <BsArrowRightCircleFill /> </div>
        </div>
    )
}

export default Section3