import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "views/Home/";
import Contact from "views/Contact/";


class Main extends Component {  
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
