import React from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

import './App.css'
import './approot.css'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Actions from '../actions/Actions';

function AppRoot({ children, location }) {
    React.useEffect(() => {
        AOS.init({
            scrollContainer: "#approot",
            duration: 1000,
        })
    }, [])
    return (
        <div className='approot' id="approot">
            <title>Vip-Securgence</title>
            <Header location={location} />
            <div className="main">
                {children}
                <Actions />
            </div>
            <Footer />
        </div>
    )
}

export default AppRoot