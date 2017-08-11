import React, {Component} from 'react'
import FontAwesome from 'react-fontawesome'
import '../css/fa/css/font-awesome.min.css'

class Hamburger extends Component {
    render() {

        return (
            <div onClick={this.props.toggleMenu} className="hamburger-menu-container">
                <div className="hamburger-icon-container">
                    <FontAwesome name='bars'/></div>
            </div>
        )
    }
}
export default Hamburger

// spin style = {{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}