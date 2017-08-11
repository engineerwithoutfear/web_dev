import React, {Component} from 'react'

class ProgressBar extends Component {
    // constructor(props) {     super(props); }
    render() {
        const style = {
            width: this.props.percent + "%"
        };
        return (
            <div className={"progressbar-container"}>
                <div className="progressbar-progress" style={style}></div>
                <div className="progressbar-text">
                    {this.props.completed + "/" + this.props.total}</div>
            </div>
        );
    }
}

export default ProgressBar