import React, { PureComponent } from "react";
import './main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Categories from "../../components/categories/categories";
import Questions from "../../components/questions/questions";
import GameSummary from "../../components/gameSummary/gameSummary";


export default class Main extends PureComponent {



    render() {
        return (

            <Router>
                <Switch>
                    <Route path="/" exact component={Categories}></Route>
                    <Route path="/questions" component={Questions}></Route>
                    <Route path="/gameSummary" component={GameSummary}></Route>
                </Switch>
            </Router>
        );
    }

}   