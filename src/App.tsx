import React, { Component } from "react";
import "./App.css";
import IbanInput from "./payments/components/IbanInput";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <IbanInput />
        </div>
      </Provider>
    );
  }
}

export default App;
