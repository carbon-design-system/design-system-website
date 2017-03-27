import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import 'svgxuse';
// import * as CarbonComponents from 'carbon-components';

// console.log(CarbonComponents);

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root'),
);
