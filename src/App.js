import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.changeChildName = this.changeChildName.bind(this);
    this.test = this.test.bind(this);
  }

  componentDidMount() {
    this.setState({ name: "billy" });
  }

  render() {
    return (
      <div className="App">
        <div class={"button"} onClick={this.test}>
          Change name of Child from App
        </div>

        <h3>Children:</h3>
        {this.state.name && (
          <Child name={this.state.name} callback={this.changeChildName} />
        )}
      </div>
    );
  }

  // This is needed as a middleman to avoid that onClick sends event and other stuff directly into changeChildName
  test() {
    this.changeChildName();
  }

  changeChildName(newName = "tommy") {
    console.log(newName);
    this.setState({ name: newName });
  }
}

export default App;

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    // This binding is necessary to make `this` work in the callback
    this.changeMyName = this.changeMyName.bind(this);
  }

  render() {
    return (
      <div>
        {this.props.name ? <div>child name: {this.props.name}</div> : "no name"}
        <div class={"button"} onClick={this.changeMyName}>
          Change name of Child from Child
        </div>
      </div>
    );
  }

  changeMyName() {
    this.props.callback("my new name");
  }
}
