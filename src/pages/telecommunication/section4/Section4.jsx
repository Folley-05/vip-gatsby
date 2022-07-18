import React from 'react'

import './section4.css'
import Title from '../../../components/title/Title'
import wifi from './wifi.svg'
import reseau from './reseau.svg'
import internet from './internet.svg'
import satellite from './satellite.svg'

function Section4() {
    return (
        <div className="section4">
            <div className="wrapper">
                <Title text="Nos autres services" />
                <p>
                    Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus, ad pro
                    quaestio laboramus. Ei ubique vivendum pro. At ius nisl accusam lorenta zanos paradigno tridexa panatarel.
                </p>
                <div className="blocks">
                    <Block title="Distribution Wi-Fi" icon={wifi} />
                    <Block title="Administration de réseau" icon={reseau} />
                    <Block title="Distribution Internet" icon={internet} />
                    <Block title="Telephonie Satellitaire" icon={satellite} />
                </div>
            </div>
        </div>
    )
}

const Block = ({title, icon}) => {
    return (
        <div className="block">
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <div className="text">
                <h3 className='text-orange'>{title}</h3>
                <p>
                    Voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident
                </p>
            </div>
        </div>
    )
}

export default Section4