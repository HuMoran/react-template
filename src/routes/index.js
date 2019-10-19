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

import Nvr from '../pages/Nvr';
import Alarm from '../pages/Alarm';

function route() {
  return (
    <div>
      <Route exact path="/" component={Nvr} />
      <Route exact path="/nvr" component={Nvr} />
      <Route exact path="/alarm" component={Alarm} />
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
