import React, { PureComponent } from "react";
import './categories.css';
import jsonData from './categories.json';
import axios from 'axios';
import { connect } from "react-redux";
import { setQuestions } from "../../actions/index";
import Loader from '../loader/loader';




class Categories extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            baseUrl: 'https://opentdb.com/api.php?amount=10&category=$categoryId&difficulty=easy',
            categories: jsonData.categories,
            cardsColors: ['indianred', 'cornflowerblue', 'cadetblue', 'lightcoral'],
            loading: false
        };

    }

    categoryClick(value) {
        this.fetchQuestions(value);
    }

    fetchQuestions(catergoryId) {
        let triviaUrl = this.state.baseUrl;
        triviaUrl = triviaUrl.replace("$categoryId", catergoryId);


        this.setState({ loading: true });
        axios.get(triviaUrl)
            .then((response) => {
                if (response.data && response.data.results) {
                    this.enrichQuestions(response.data.results);

                    this.props.setQuestions(response.data.results);
                    this.setState({ loading: false });

                    //todo: go to questions page
                    this.props.history.push('/questions');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }



    enrichQuestions(questions) {
        questions.forEach(question => {
            question.answers = [];
            switch (question.type) {

                case 'boolean': {
                    question.answers.push({ "text": question['correct_answer'].toLowerCase(), "value": question['correct_answer'].toLowerCase() });
                    question.answers.push({ "text": question['incorrect_answers'][0].toLowerCase(), "value": question['incorrect_answers'][0].toLowerCase() })
                    break;
                }

                default: {
                    question.answers.push({ "text": question['correct_answer'], "value": true });
                    question['incorrect_answers'].forEach(answer => {
                        question.answers.push({ "text": answer, "value": false });
                    });
                    this.arrayShuffle(question.answers);
                    // while
                    break;
                }
            }
        });
    }


    arrayShuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    render() {
        return (

            <div className="categories flexColumnCenter">
                {this.state.loading ? <Loader /> :
                    <div className="flexColumnCenter">
                        <p>Go on, start by selecting your category!</p>
                        <div className="categoiresContainer">
                            {this.state.categories.map(function (item, index) {
                                return <div className="categoryBox"
                                    key={item.id}
                                    value={item.id}
                                    onClick={() => this.categoryClick(item.id)}>{item.name}</div>
                            }, this)
                            }
                        </div>
                    </div>
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