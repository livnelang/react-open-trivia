import React, { PureComponent } from "react";
import './categories.css';
import jsonData from './categories.json';
import axios from 'axios';


export default class Categories extends PureComponent {
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
        // this.props.history.push('/questions');
    }

    fetchQuestions(catergoryId) {
        let triviaUrl = this.state.baseUrl;
        triviaUrl = triviaUrl.replace("$categoryId", catergoryId);


        axios.get(triviaUrl)
            .then((response) => {

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