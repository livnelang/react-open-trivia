import React, { PureComponent } from "react";
import './categories.css';
import jsonData from './categories.json';
import axios from 'axios';
import { connect } from "react-redux";
import { setQuestions } from "../../actions/index";




class Categories extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'https://opentdb.com/api.php?amount=10&category=$categoryId&difficulty=easy',
            categories: jsonData.categories,
            cardsColors: ['indianred', 'cornflowerblue', 'cadetblue', 'lightcoral']
        };

    }

    categoryClick(value) {
        console.log('category click');
        this.fetchQuestions(value);
    }

    fetchQuestions(catergoryId) {
        let triviaUrl = this.state.baseUrl;
        triviaUrl = triviaUrl.replace("$categoryId", catergoryId);


        axios.get(triviaUrl)
            .then((response) => {
                if (response.data && response.data.results) {
                    this.props.setQuestions(response.data.results);
                    //todo: go to questions page
                    this.props.history.push('/questions');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="categoiresContainer">
                {this.state.categories.map(function (item, index) {
                    return <div className="categoryBox"
                        key={item.id}
                        value={item.id}
                        onClick={() => this.categoryClick(item.id)}>{item.name}</div>
                }, this)
                }
            </div>
        );
    }

}


// const mapStateToProps = (state) => {
//     return {
//         showGuessResult: state.showGuessResult,
//         score: state.score,
//         userFinishedGame: state.userFinishedGame
//     };
// };


const mapDispatchToProps = (dispatch) => {
    return {
        setQuestions: questions => dispatch(setQuestions(questions)),
    };
};

export default connect(null, mapDispatchToProps)(Categories);