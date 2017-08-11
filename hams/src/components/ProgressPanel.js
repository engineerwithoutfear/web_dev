import React, {Component} from 'react'
import ProgressBar from './ProgressBar'

class ProgressPanel extends Component {
    render() {
        return <ProgressBar {...this.props}/>;
    }
}
export default ProgressPanel