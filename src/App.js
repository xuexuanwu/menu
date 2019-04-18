import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Item from "./components/Item";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      detail: [],
      shortName: ""
    };
  }
  componentDidMount() {
    axios
      .get("https://stream-restaurant-menu-svc.herokuapp.com/category")
      .then(res => this.setState({ list: res.data }))
      .catch(err => console.log(err));
  }
  handleClick = sm => {
    axios
      .get(
        `https://stream-restaurant-menu-svc.herokuapp.com/item?category=${sm}`
      )
      .then(res => this.setState({ detail: res.data }))
      .catch(err => console.log(err));
    this.setState({ shortName: sm });
  };
  render() {
    return (
      <div className="App">
        <h3>Menu Categories</h3>
        <div className="container">
          <ul>
            {this.state.list.map(ele => (
              <li onClick={() => this.handleClick(ele.short_name)}>
                {ele.name}-({ele.short_name})
              </li>
            ))}
          </ul>
          <div className="item">
            <Item detail={this.state.detail} shortName={this.state.shortName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
