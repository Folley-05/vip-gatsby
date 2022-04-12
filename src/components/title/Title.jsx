import React from 'react'

import './title.css'

function Title({text}) {
  return (
    <div className="comp-title">
        <h2>{text}</h2>
        <div className="line"><span /></div>
    </div>
  )
}

export default Title