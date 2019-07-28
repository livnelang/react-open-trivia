import React, { PureComponent } from "react";
import './main.css';
import jsonData from './categories.json';


export default class Main extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            categories: jsonData.categories
        };
    }

    render() {
        return (
            <div>
                {this.state.categories.map(function (item, index) {
                    return <p key={index} value={item} />
                }, this)
                }
            </div>
            // null
        );
    }

}   