import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from "views/Home";
import Contact from "views/Contact";


class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
      </main>
    );
  }
}

export default Main;
