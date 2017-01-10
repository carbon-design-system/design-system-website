import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Overview from './pages/Overview';
import Designers from './pages/Designers';
import Developers from './pages/Developers';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Overview} />
    <Route path="/designers" component={Designers} />
    <Route path="/developers" component={Developers} />
  </Route>
);
