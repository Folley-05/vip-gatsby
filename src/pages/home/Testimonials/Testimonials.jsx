import React, { Component } from 'react'
import { BsFillCircleFill } from 'react-icons/bs'

import './testimonials.css'
import Image1 from './testimonial-1.jpg'
import Image2 from './testimonial-5.jpg'
// import Image from './testimonial-1.jpg'

import List from './testimonialsList'
class Testimonials extends Component {
    state={
        id: 0
    }
    changeText=num=>this.setState({id: num})
    render() {
        
        return (
            <article className="testimonials" id="testimonials">
                    <div className="wrapper">
                        <h1 className='text-orange'>Temoignages</h1>
                        <div className="testimonial-container">
                            <p className="testimonial-text">
                                    {List[this.state.id].text}
                            </p>
                            <p><span className="client-name">AKLIMA </span> - COO, AMERIMAR ENTERPRISES, INC.</p>                
                            <div className="testimonial-images">
                                {
                                    List.map((testimomial, i)=>i%2 ?
                                        <TestimonialOne key={"testi"+i} image={Image1} id={testimomial.id} current={i===this.state.id} change={this.changeText} /> :
                                        <><TestimonialOne key={"testi"+i} image={Image2} id={testimomial.id} current={i===this.state.id} change={this.changeText} /> {!((i+1)%5) && <br key={i+'a'}/> } </> )
                                }
                            </div>
                        </div>
                    </div>
            </article>
        )
    }
}



class TestimonialOne extends Component {

    render() {
        const {image, id, current, change}=this.props
        return (
            <div className="image-container" onClick={()=>change(id)}>
                {current && <div className="circle"><BsFillCircleFill /></div> }
                <img src={image} alt="" />
            </div>
        )
    }
}

export default Testimonials
