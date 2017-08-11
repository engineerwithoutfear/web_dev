import React from 'react';
import ProgressPanel from './ProgressPanel'
import Hamburger from './Hamburger'

const Header = (props) => (
    <div className="header">
        <Hamburger {...props} toggleMenu={props.toggleMenu}/>
        <ProgressPanel {...props}/>

    </div>
)

export default Header