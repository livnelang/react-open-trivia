import React from "react";
import './App.css';
import Header from "../../components/header/header"
import Main from "../../components/main/main"

export default class App extends React.Component {

  componentWillMount() {

  }

  render() {
    return (
      <div id="wrapper" className="flexColumnCenter">
        <Header />
        <Main />
      </div>
    );
  }
}