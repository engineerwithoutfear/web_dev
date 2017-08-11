import React from 'react';
import {Switch, Route} from 'react-router-dom'
import About from './About'
import Settings from './Settings'
import Quiz from './Quiz'
import '../css/main.css'

const Main = (props) => (
    <div className="main-island">
        <Switch >
            <Route
                exact
                path='/'
                render={() => (<Quiz index={props.index} {...props} guess={props.guess}/>)}/>

            <Route path='/about' component={About}/>
            <Route
                path='/settings'
                render={() => (<Settings
                toggleMode={props.toggleMode}
                toggleExam={props.toggleExam}
                toggleDisplayProgressIndicator={props.toggleDisplayProgressIndicator}
                {...props}/>)}/>
        </Switch>
    </div>
)

export default Main