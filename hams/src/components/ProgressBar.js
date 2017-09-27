import React from 'react'

const ProgressBar = (props) => {
    const style = {
        width: props.percent + "%"
    }
    return (
        <div className={"progressbar-container"}>
            <div className="progressbar-progress" style={style}></div>
            <div className="progressbar-text">
                {props.completed + "/" + props.total}</div>
        </div>
    );
}

export default ProgressBar