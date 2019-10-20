/*
 * File: index.js
 * Project: template
 * Description:
 * Created By: Tao.Hu 2019-09-10
 * -----
 * Last Modified: 2019-09-10 05:13:57 pm
 * Modified By: Tao.Hu
 * -----
 */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';

import Home from '../pages/Home';
import History from '../pages/History';

function route() {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/history" component={History} />
    </div>
  );
}

function BaseRoute() {
  return (
    <Router>
      <Header content={route()} />
    </Router>
  );
}

export default BaseRoute;
