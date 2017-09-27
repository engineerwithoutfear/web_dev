import React from 'react'

const Quiz = (props) => (
    <div className="question-container">
        <div className="question">{props.question}
        </div>
        <div className="choices">
            <div data-letter="A" onClick={props.handleGuess} className="choice-a">{props.a}</div>
            <div data-letter="B" onClick={props.handleGuess} className="choice-b">{props.b}</div>
            <div data-letter="C" onClick={props.handleGuess} className="choice-c">{props.c}</div>
            <div data-letter="D" onClick={props.handleGuess} className="choice-d">{props.d}</div>
        </div>
        <div className="status">
            <div className="message">{props.message}</div>
        </div>
    </div>
)

export default Quiz
