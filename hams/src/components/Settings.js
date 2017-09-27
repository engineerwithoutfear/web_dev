import React from 'react'

const Settings = (props) => (
    <div className="settings-container">
        <div className="settings-title">
            <h1>Settings</h1>
        </div>

        <div className="setting">
            <div className="setting-description">Exam</div>
        </div>
        <div className="setting">
            <div
                data-exam="technician"
                onClick={props.toggleExam}
                className=
                {props.exam === "technician" ? "activeSetting setting-option" : "setting-option"}>Technician</div>
            <div
                data-exam="general"
                onClick={props.toggleExam}
                className={props.exam === "general"
                ? "activeSetting setting-option"
                : "setting-option"}>General</div>
            <div
                data-exam="extra"
                onClick={props.toggleExam}
                className={props.exam === "extra"
                ? "activeSetting setting-option"
                : "setting-option"}>Extra</div>
        </div>
        <div className="setting">
            <div className="setting-description">Question Progression</div>
        </div>
        <div className="setting">
            <div
                onClick={props.toggleMode}
                className={props.mode === "orderly"
                ? "activeSetting setting-option"
                : "setting-option"}>In Order</div>

            <div
                onClick={props.toggleMode}
                className={props.mode === "random"
                ? "activeSetting setting-option"
                : "setting-option"}>Random</div>
        </div>
    </div>

)

export default Settings
