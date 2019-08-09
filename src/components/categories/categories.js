import React, { PureComponent } from "react";
import './categories.css';
import jsonData from './categories.json';


export default class Categories extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            categories: jsonData.categories,
            cardsColors: ['indianred', 'cornflowerblue', 'cadetblue', 'lightcoral']
        };
    }

    render() {
        return (
            <div className="categoiresContainer">
                {this.state.categories.map(function (item, index) {
                    return <div className="categoryBox" key={item.id} value={item.id} >{item.name}</div>
                }, this)
                }
            </div>
        );
    }

}