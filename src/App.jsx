import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './features/home/Home';
import Layout from './features/home/Layout';
import Peliculas from './features/peliculas/Peliculas';
import Cines from './features/cines/Cines';

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/peliculas">
            <Peliculas />
          </Route>
          <Route exact path="/cines">
            <Cines />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
