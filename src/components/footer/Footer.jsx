import React from 'react'

import './footer.css'
import Form from './Form'
import secu2 from './secu.svg'

function Footer() {
    React.useEffect(()=>{
        console.log("window ", window)
    }, [])
    return (
        <div className='footer'>
            <div className="wrapper">
                <img className='im1' src={secu2} alt="securgence" />
                <h1>Nous Contacter</h1>
                <div className="contain">
                    <div className="first">
                        <div className="perso">
                            <h2 className='leads'>LEADS</h2>
                            <h3>JEAN ROBITAILLE</h3>
                            <span className="role">(PROPRIETAIRE)</span>
                            <span>Tél : (418) 589-9998 </span>
                            <span>Poste: 1201</span>
                            <span className='email'>jrobitaille@vip-telecom.ca</span>
                        </div>
                        <div className="perso">
                            <h3>JULIEN NORMAND</h3>
                            <span className="role">(EXPERT EN SOLUTIONS D’AFFAIRES)</span>
                            <span>Tél : (418) 589-8001 </span>
                            <span>Poste: 1202</span>
                            <span className='email'>jnormand@vip-telecom.ca</span>
                        </div>
                        <div className="perso">
                            <h3>SEBASTIEN HOUDE</h3>
                            <span className="role">(DIRECTEUR DIVISION SECURITÉ)</span>
                            <span>Tél : (418) 589-9998 </span>
                            <span>Poste: 1224</span>
                            <span className='email'>shoude@securgence.com</span>
                        </div>
                    </div>
                    <div className="second">
                        <div className=""><img className='im2' src={secu2} alt="securgence" /></div>
                        <h3>Entreprise</h3>
                        <span><b>418-589-8001</b></span>
                        <span>info@vip-telecom.ca</span>
                        <div className="contacts">
                            <div className="contact">
                                <h3>Adresse 1</h3>
                                <span>359, rue de Puyjalon</span>
                                <span><b>Baie-Comeau</b>(Québec) G5C1M4</span>
                                <span><b>Tél : 418 589-9998</b></span>
                                <span>Télécopieur : 418 589-3759</span>
                            </div>
                            <div className="contact">
                                <h3>Adresse 2</h3>
                                <span>992, rue du Bouleau</span>
                                <span><b>Havre St-Pierre</b>(Québec) G0G 1B0</span>
                                <span>Tél : 418 538-2424</span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="third">
                        <Form />
                        {/* <div className="newlatter">
                            <input type="text" placeholder='Souscrivez a notre Newlatter' />
                            <button className="bt-st"> Souscrire </button>
                        </div> */}
                    </div>
                </div>
                <div className="foot" 
                    onClick={()=>window.scrollTo(0, 0)}
                >
                    <h4>© VIP TÉLÉCOM & SÉCURGENCE </h4>
                </div>
            </div>
        </div>
    )
}

export default Footer