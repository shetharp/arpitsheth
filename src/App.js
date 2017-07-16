import React, { Component } from 'react';
import Header from "./components/Header/";
import RouterMain from './views/RouterMain';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RouterMain />
      </div>
    );
  }
}

export default App;
