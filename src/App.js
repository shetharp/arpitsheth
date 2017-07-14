import React, { Component } from 'react';
import './styles/App.css';
import Header from "./Header.js";
import Main from './Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
