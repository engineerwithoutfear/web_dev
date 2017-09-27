import React from 'react'
import {Switch, Route} from 'react-router-dom'
import About from './About'
import Settings from './Settings'
import Quiz from './Quiz'

const Main = (props) => (
    <div className={"main-island"}>
        <Switch >
            <Route
                exact
                path='/'
                render={() => (<Quiz {...props} handleGuess={props.handleGuess}/>)}/>
            <Route path='/about' component={About}/>
            <Route
                path='/settings'
                render={() => (<Settings
                toggleMode={props.toggleMode}
                toggleExam={props.toggleExam}
                {...props}/>)}/>
        </Switch>
    </div>
)

export default Main