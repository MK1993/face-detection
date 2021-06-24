import React from 'react'
import Tilty from 'react-tilty'
import brain from './brain.png'
import './Logo.css'

function Logo() {
    return (
        <div className="ma4 mt0">
                <Tilty className="br2 shadow-2 Tilty" max={55} style={{ height: 130, width:130 }}>
                    <img style={{paddingTop: '25px'}} src={brain} alt="brain"/>
                </Tilty>
        </div>
    );
}
  
export default Logo;