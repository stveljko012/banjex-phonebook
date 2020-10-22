import React from 'react';
import Layout from './layout/Layout';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/views/Home';
import Contacts from './components/views/Contacts';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Layout>
        <Switch>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
