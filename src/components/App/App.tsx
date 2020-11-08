import React from 'react';
import 'normalize.css';
import Header from '../Header/Header';
import {Redirect, Route, Switch } from 'react-router-dom';
import Movies from '../../pages/Movies';
import { Movie } from '../../pages/Movie/Movie';

const App: React.FC = () => {
  return (
      <div className="app">
        <div className="container">
          <Header />
          <Switch>
            <Route exact path='/movies' component={Movies} />
            <Route exact path='/movie/:id' component={Movie} />
            <Redirect to="/movies" />
          </Switch>
        </div>
      </div>
  );
}

export default App;
