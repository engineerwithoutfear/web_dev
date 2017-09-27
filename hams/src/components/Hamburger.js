import React from 'react'
import FontAwesome from 'react-fontawesome'
import '../css/fa/css/font-awesome.min.css'

const Hamburger = (props) => (
    <div onClick={props.toggleMenu} className="hamburger-menu-container">
        <div className="hamburger-icon-container">
            <FontAwesome name='bars'/>
        </div>
    </div>
)
export default Hamburger
