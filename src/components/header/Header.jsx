import React, { useEffect } from 'react'
import { Link } from 'gatsby'

import './header.css'
import './header2.css'
import enseigne from './enseigne.png'


function Header({ location }) {
    useEffect(() => {
        let approot = document.querySelector('#approot')
        // console.log(approot)
        approot.addEventListener('scroll', () => {
            // console.log(approot.scrollHeight, approot.scrollTop)
            if (approot.scrollTop >= 20) {
                document.querySelector('#header').classList.add('bg-white')
            } else document.querySelector('#header').classList.remove('bg-white')
            if (approot.scrollTop / approot.scrollHeight >= 1 / 2) {
                // console.log("scroll level hit", approot.scrollTop, approot.scrollHeight)
                document.querySelector('#totop').classList.remove("hide")
            } else {
                document.querySelector('#totop').classList.add("hide")
            }
        }, false)
    }, [])

    const toggleMenu = () => {
        console.log("toogle menu ", document.getElementById('wrapper'))
        document.getElementById('wrapper').classList.toggle('open')
    }
    const company = location.pathname === '/compagnie'
    const setClass = (url) => url === location.pathname ? "li-page" : ""
    console.log(location)
    return (
        <div className={company ? 'header-company' : 'header'} id='header'>
            <div className="wrapper" id='wrapper'>
                <div className="banners">
                    <img src={enseigne} alt="securgence-vip" />
                    <div className="comp-banner">
                        <h1>SECURGENCE | VIP TELECOM</h1>
                    </div>
                </div>
                <div className="navbar">
                    <ul>
                        <li className={setClass('/')}>
                            <Link to='/'>
                                Accueil
                            </Link>
                        </li>
                        <li className={setClass('/securite')} >
                            <Link to='/securite'>
                                Securite
                                <div className="submenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>
                        <li className={setClass('/telecommunication')} >
                            <Link to='/telecommunication'>
                                Telecom
                                <div className="submenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>
                        <li className={setClass('/radiocommunication')} >
                            <Link to='/radiocommunication'>
                                Radiocom
                                <div className="submenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>
                        <li className={setClass('/secteurs')} >
                            <Link to='/secteurs'>
                                Secteurs
                                <div className="submenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>
                        <li className={setClass('/compagnie')} >
                            <Link to='/compagnie'>
                                Compagnie
                                {/* <BiChevronDown />  */}
                                <div className="submenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="line" />
                    <span className="line" />
                    <span className="line" />
                </div>
            </div>

        </div>
    )
}

export default Header