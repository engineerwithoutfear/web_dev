import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import '../css/fa/css/font-awesome.min.css'

class Menu extends Component {
    render() {

        return (
            <div className="menu-container">
                <nav onClick={this.props.toggleMenu} className="compactMenu">
                    <FontAwesome name='bars'/></nav>
            </div>
        )
    }
}
export default Menu

// spin style = {{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}