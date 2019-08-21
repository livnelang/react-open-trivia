import React, { PureComponent } from "react";
import './question.css';
import { connect } from "react-redux";
import { incrementScore, setQuestionCounter } from "../../actions/index";


class Question extends PureComponent {


    onAnswerClick(isCorrect) {
        if (isCorrect) {
            this.props.incrementScore();
            if (!this.userWon()) {
                this.props.setQuestionCounter();
            }
        }
    }

    userWon() {
        return this.props.currentQuestion >= this.props.questionsLength;
    }


    render() {
        return (
            <div className="questionContainer">
                <p>{this.props.question.question}</p>
                <div className="answersContainer">
                    {this.props.question.answers.map(function (answer, index) {
                        return <div className="answerBox"
                            value={answer.value}
                            key={index}
                            onClick={() => this.onAnswerClick(answer.value)}
                        >{answer.text}</div>
                    }, this)
                    }
                </div>

            </div>
        );
    }

}



const mapStateToProps = (state) => {
    return {
        question: state.questions[state.currentQuestion],
        questionsLength: state.questionsLength,
        currentQuestion: state.currentQuestion
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        incrementScore: () => dispatch(incrementScore()),
        setQuestionCounter: () => dispatch(setQuestionCounter()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Question);