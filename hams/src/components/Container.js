import React, {Component} from 'react'
import Main from './Main'
import Header from './Header'
import OffCanvasMenu from './OffCanvasMenu'
import examTechnician from '../assets/json/qs_technician'
import examGeneral from '../assets/json/qs_general'
import examExtra from '../assets/json/qs_extra'
import '../css/main.css'

class Container extends Component {
    constructor(props) {
        super(props);
        let i = 0;
        let completed = 0;
        let dataset = examTechnician;
        this.state = {
            mode: "orderly",
            uniqueRandoms: [],
            correctAnswer: dataset.questions[i].answer,
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
            menuOpen: false
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
        this.toggleMenu = this
            .toggleMenu
            .bind(this)
        this.changeQuestionPool = this
            .changeQuestionPool
            .bind(this)
    }
    handleGuess(e) {
        e.preventDefault();
        this.setState({
            guess: e.target.dataset.letter
        }, this.isGuessCorrect);
    }
    isGuessCorrect() {
        this.setState({
            guessedCorrectly: this.state.answer === this.state.guess
                ? true
                : false
        }, this.notifyOfResult);
    }
    notifyOfResult() {
        if (this.state.guessedCorrectly) {
            this.setState({
                message: "Good job!"
            }, this.increment);
        } else {
            this.setState({message: "BEEP! Try again."});
        }
    }
    increment() {
        let inc;
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
        }, this.calculateCompletion);
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
        switch (this.state.exam) {
            case "extra":
                newExam = examExtra;
                break;
            case "general":
                newExam = examGeneral
                break;
            default:
                newExam = examTechnician;
        }
        this.setState({
            lastGuess: "",
            questions: newExam.questions,
            index: 0,
            data: newExam,
            total: newExam.questions.length,
            completed: 0,
            uniqueRandoms: []
        }, this.getNewQuestion)
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
        let numRandoms = this.state.total;
        let uniqueRandoms = this.state.uniqueRandoms;
        // refill the array if needed
        if (!uniqueRandoms.length) {
            for (let i = 0; i < numRandoms; i++) {
                uniqueRandoms.push(i);
            }
        }
        let index = Math.floor(Math.random() * uniqueRandoms.length);
        let uniqueIndex = uniqueRandoms[index];
        // now remove used up value from the array
        uniqueRandoms.splice(index, 1);
        return uniqueIndex;
    }
    render() {
        let className = this.state.menuOpen
            ? "show-nav"
            : "hide-nav";
        let overlay = this.state.menuOpen
            ? "overlay-active"
            : "overlay-dormant"
        let scooter = this.state.menuOpen
            ? "scoot-him"
            : "";
        let action;
        if (this.state.menuOpen) {
            action = this.toggleMenu
        }
        return (
            <div>
                <div id="site-wrapper">
                    <div><OffCanvasMenu
                        { ...this.state }
                        toggleMenu={this.toggleMenu}
                        class={className}/></div>
                    <div id="site-canvas" className={overlay}>
                        <div className="container" onClick={action}>
                            <Header { ...this.state } toggleMenu={this.toggleMenu}/>
                            <Main
                                { ...this.state }
                                handleGuess={this.handleGuess}
                                toggleMode={this.toggleMode}
                                toggleExam={this.toggleExam}/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container