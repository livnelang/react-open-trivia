import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import './scoreBoard.css';



class ScoreBoard extends PureComponent {


    render() {
        return (
            <div className="scoreBoard">
                <div className="scoreBox">
                    <div>{this.props.score} / {this.props.questionsLength}</div>
                    <p>Score</p>
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        score: state.score,
        questionsLength: state.questions.length,
    };
};


// const mapDispatchToProps = (dispatch) => {
//     return {
//         setQuestions: questions => dispatch(setQuestions(questions)),
//     };
// };


export default connect(mapStateToProps, null)(ScoreBoard);