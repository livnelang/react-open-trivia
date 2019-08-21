import React, { PureComponent } from "react";
import './questions.css';
import { connect } from "react-redux";
import Question from "../question/question";
import ScoreBoard from "../scoreBoard/scoreBoard";


class Questions extends PureComponent {


    render() {
        return (
            <div className="questionsContainer flexColumnCenter">
                <Question />
                <ScoreBoard />
            </div>
        );
    }

}



// const mapStateToProps = (state) => {
//     return {
//         questions: state.questions,
//         score: state.score
//     };
// };


// const mapDispatchToProps = (dispatch) => {
//     return {
//         setQuestions: questions => dispatch(setQuestions(questions)),
//     };
// };


export default connect(null, null)(Questions);