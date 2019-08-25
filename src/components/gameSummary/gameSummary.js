import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import './gameSummary.css';
import playAgainImg from './playagain-btn-small.png';
import { resetGame } from "../../actions/index";






class GameSummary extends PureComponent {

    playAgain() {
        this.props.resetGame();
        this.props.history.push('/');
    }


    render() {
        return (
            <div className="summaryContainer flexColumnCenter">
                <div className="summaryHeader">
                    <p>Great game!</p>
                </div>
                <div>
                    <p> Your score is: {this.props.score}</p>
                </div>

                <div className="playAgain flexCenter">
                    <img src={playAgainImg} alt="" onClick={() => this.playAgain()} />
                </div>
            </div>
        );
    }
}



const mapStateToProps = (state) => {
    return {
        score: state.score
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        resetGame: () => dispatch(resetGame()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(GameSummary);