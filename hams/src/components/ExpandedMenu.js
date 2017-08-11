import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import FontAwesome from 'react-fontawesome'
import '../css/fa/css/font-awesome.min.css'

class ExpandedMenu extends Component {
    render() {
        let activeClass = "menu-container " + this.props.class
        return (
            <div id="site-menu" className={activeClass}>

                <div className="site-menu-option">
                    <Link to='/' onClick={this.props.toggleMenu} className="navLink"><FontAwesome name='close'/></Link>
                </div>
                <div className="site-menu-option site-menu-status">
                    <div className="site-menu-status-exam"><FontAwesome name='pencil-square-o'/>{this.props.exam}</div>
                </div>
                <div className="site-menu-option">
                    <Link to='/settings' onClick={this.props.toggleMenu}><FontAwesome name='gears'/>
                        Settings</Link>
                </div>
                <div className="site-menu-option">
                    <Link to='/about' onClick={this.props.toggleMenu}><FontAwesome name='question'/>About</Link>
                </div>

            </div>
        )
    }
}

export default ExpandedMenu