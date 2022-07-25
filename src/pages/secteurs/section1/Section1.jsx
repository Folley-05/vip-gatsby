import React from 'react'

import './section1.css'
import outils from './outils.png'

function Section1() {
    return (
        <div className="sectors-section1">
            <div className="wrapper">
                <div>
                    <img src={outils} alt="outils" />
                </div>
                <div>
                    <h1> Nous exercons dans plusieurs secteurs d'activites </h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint odit laboriosam sunt. Sed eum corporis illum, exercitationem,
                        aut beatae, minima numquam libero cum incidunt et pariatur doloremque ut doloribus saepe. <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero doloribus deserunt vel aspernatur nostrum eum provident
                        excepturi veritatis cum, illo ipsa velit labore nihil illum dignissimos dolorum nisi enim! Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Expedita, hic doloribus! Non dolorem totam sint beatae autem labore nulla aspernatur minus, ipsam nostrum exercitationem sed fugiat reiciendis? Et, velit enim.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section1