import React from 'react'
import ProgressBar from './ProgressBar'
import Hamburger from './Hamburger'

const Header = (props) => (
    <div className="header">
        <Hamburger toggleMenu={props.toggleMenu}/>
        <ProgressBar
            percent={props.percent}
            completed={props.completed}
            total={props.total}/>
    </div>
)

export default Header