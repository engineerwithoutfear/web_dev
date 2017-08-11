import React from 'react';

const Quiz = (props) => (
    <div className="questionContainer">
        <div className="question">{props.question}
        </div>
        <div className="choices">

            <div data-letter="A" onClick={props.guess} className="choice-a">{props.a}</div>
            <div data-letter="B" onClick={props.guess} className="choice-b">{props.b}</div>
            <div data-letter="C" onClick={props.guess} className="choice-c">{props.c}</div>
            <div data-letter="D" onClick={props.guess} className="choice-d">{props.d}</div>
        </div>
        <div className="answer">{props.message}</div>
    </div>
)

export default Quiz
