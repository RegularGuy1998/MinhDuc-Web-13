import React, { Component } from 'react';
import './App.css';

import NewGame from './Component/Game/NewGame';
import PlayGame from './Component/Game/PlayGame';
import { Route, Switch } from 'react-router-dom';
import Header from './Component/Header';
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Container>
      <Header />
        <Switch>
          <Route exact path='/' component={NewGame} />
          <Route exact path='/game/:id' component={PlayGame} />
        </Switch>
      </Container>
    );
  }
}

export default App;
