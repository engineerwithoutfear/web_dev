import React from 'react'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import '../css/fa/css/font-awesome.min.css'

const OffCanvasMenu = (props) => {
    let activeClass = "menu-container " + props.class;
    return ( < div className = "menu-wrapper" > < div id = "site-menu" className = {
        activeClass
    } > < div className = "site-menu-option" > < Link to = '/' onClick = {
        props.toggleMenu
    }
    className = "navLink" > < FontAwesome name = 'home' / > < div > return </div> < /Link> <
            /div > < div className = "site-menu-option site-menu-status" > < div className = "site-menu-status-exam" > < FontAwesome name = 'pencil-square-o' / > {
        props.exam
    } < /div> <
            /div > < div className = "site-menu-option" > < Link to = '/settings' onClick = {
        props.toggleMenu
    } > < FontAwesome name = 'gears' / > Settings < /Link> <
        /div > < div className = "site-menu-option" > < Link to = '/about' onClick = {
        props.toggleMenu
    } > < FontAwesome name = 'question' / > About < /Link> <
        /div > < /div> <
        /div >)
}

export default OffCanvasMenu