import React, { PureComponent } from "react";
import './question.css';
import { connect } from "react-redux";


class Question extends PureComponent {


    render() {
        return (
            <div className="questionContainer">
                <p>{this.props.question.question}</p>
                <div className="answersContainer">
                    {this.props.question.incorrect_answers.map(function (wrongAnswer, index) {
                        return <div className="answerBox" key={index}>{wrongAnswer}</div>
                    }, this)
                    }
                </div>

            </div>
        );
    }

}



const mapStateToProps = (state) => {
    return {
        question: state.questions[state.currentQuestion]
    };
};


// const mapDispatchToProps = (dispatch) => {
//     return {
//         setQuestions: questions => dispatch(setQuestions(questions)),
//     };
// };


export default connect(mapStateToProps, null)(Question);