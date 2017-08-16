import React, {Component} from 'react';
import Main from './Main'
import Header from './Header'
import ExpandedMenu from './ExpandedMenu'
import examTechnician from '../assets/json/qs_technician'
import examGeneral from '../assets/json/qs_general'
import examExtra from '../assets/json/qs_extra'
import '../css/main.css'

// reset index on exam change and also the progress

class Container extends Component {
    constructor(props) {
        super(props);
        var i = 0;
        let dataset = examTechnician;
        this.state = {
            mode: "orderly",
            uniqueRandoms: [],
            correctAnswer: dataset.questions[i].answer,
            progressBarColor: "#0BD318",
            progressBarHeight: 50,
            completed: 0,
            total: dataset.questions.length,
            percent: 0,
            index: i,
            data: dataset,
            exam: "technician",
            question: dataset.questions[i].question,
            questions: dataset.questions,
            a: dataset.questions[i].choices.a,
            b: dataset.questions[i].choices.b,
            c: dataset.questions[i].choices.c,
            d: dataset.questions[i].choices.d,
            answer: dataset.questions[i].answer,
            message: "",
            lastGuess: "",
            displayProgressIndicator: true,
            menuOpen: false,
            subMenuOpen: false
        };

        this.handleGuess = this
            .handleGuess
            .bind(this);
        this.toggleMode = this
            .toggleMode
            .bind(this)
        this.toggleExam = this
            .toggleExam
            .bind(this)
        this.toggleDisplayProgressIndicator = this
            .toggleDisplayProgressIndicator
            .bind(this)
        this.toggleMenu = this
            .toggleMenu
            .bind(this)
        this.changeQuestionPool = this
            .changeQuestionPool
            .bind(this)
    }
    toggleMenu() {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }
    toggleExam(e) {
        let newExam = e.target.dataset.exam;
        this.setState({
            exam: newExam
        }, this.changeQuestionPool)

    }
    changeQuestionPool() {
        let newExam;
        if (this.state.exam === "technician") {
            newExam = examTechnician
        } else if (this.state.exam === "general") {
            newExam = examGeneral
        } else {
            newExam = examExtra
        }
        this.setState({
            lastGuess: "",
            questions: newExam.questions,
            index: 0,
            data: newExam,
            total: newExam.questions.length,
            completed: 0,
            uniqueRandoms: []
        }, this.update)
    }
    toggleDisplayProgressIndicator() {
        this.setState({
            displayProgressIndicator: (this.state.displayProgressIndicator === true
                ? false
                : true)
        })
    }
    toggleMode() {
        this.setState({
            mode: (this.state.mode === "orderly"
                ? "random"
                : "orderly"),
            completed: 0
        })
    }
    fetchRandomIndex() {
        var numRandoms = this.state.total;
        var uniqueRandoms = this.state.uniqueRandoms;
        // refill the array if needed
        if (!uniqueRandoms.length) {
            for (var i = 0; i < numRandoms; i++) {
                uniqueRandoms.push(i);
            }
        }
        var index = Math.floor(Math.random() * uniqueRandoms.length);
        var uniqueIndex = uniqueRandoms[index];
        // now remove that value from the array
        uniqueRandoms.splice(index, 1);
        return uniqueIndex;
    }
    update() {
        this.calculateCompletion();
        this.getNewQuestion();
    }
    calculateCompletion() {
        this.setState({
            percent: this.state.completed / this.state.total * 100
        });
    }
    getNewQuestion() {
        let i = this.state.index;
        this.setState({
            question: this.state.questions[i].question,
            a: this.state.questions[i].choices.a,
            b: this.state.questions[i].choices.b,
            c: this.state.questions[i].choices.c,
            d: this.state.questions[i].choices.d,
            answer: this.state.questions[i].answer,
            guess: "",
            guessedCorrectly: false
        });
    }
    increment() {
        var inc;
        if (this.state.mode === "orderly") {
            inc = this.state.index + 1

        } else {
            inc = this.fetchRandomIndex()
        }
        this.setState({
            completed: this.state.completed + 1,
            index: inc
        }, this.update);
        if (this.state.completed + 1 > this.state.total) {
            this.setState({
                completed: 1
            }, this.calculateCompletion);
        }

        this.getNewQuestion();
    }
    click(e) {
        e.preventDefault();
        this.increment();
    }
    isGuessCorrect() {
        this.setState({
            guessedCorrectly: this.state.answer === this.state.guess
                ? true
                : false
        }, this.continueOn);
    }
    continueOn() {
        if (this.state.guessedCorrectly) {
            this.increment();
        }
        this.notifyOfResult();
    }
    notifyOfResult() {
        if (this.state.guessedCorrectly) {
            this.setState({
                message: "Good job!",
                lastGuess: "The answer was: '" + this.state[(this.state.guess.toLowerCase())] + ".'"
            });
        } else {
            this.setState({
                message: "BEEP! Try again.",
                lastGuess: "It's not: '" + this.state[(this.state.guess.toLowerCase())] + ".'"
            });
        }
    }
    handleGuess(e) {
        e.preventDefault();

        this.setState({
            guess: e.target.dataset.letter
        }, this.isGuessCorrect);
    }

    render() {
        let className = this.state.menuOpen
            ? "show-nav"
            : "hide-nav";
        let action;
        if (this.state.menuOpen) {
            action = this.toggleMenu
        }
        return (
            <div id="site-wrapper">
                <div id="site-canvas">
                    <ExpandedMenu {...this.state} toggleMenu={this.toggleMenu} class={className}/>
                    <div className="container" onClick={action}>
                        <Header {...this.state} toggleMenu={this.toggleMenu}/>
                        <Main
                            index={this.state.index}
                            {...this.state}
                            guess={this.handleGuess}
                            toggleMode={this.toggleMode}
                            toggleExam={this.toggleExam}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container