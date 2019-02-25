import React, { Component } from "react";
import "./App.css";
import IbanInput from "./payments/components/IbanInput";

class App extends Component {
  render() {
    return (
      <div className="App">
        <IbanInput />
      </div>
    );
  }
}

export default App;
