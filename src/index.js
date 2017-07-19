import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-80001368-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

ReactDOM.render(
  <Router history={browserHistory} onUpdate={logPageView} routes={routes} />,
  document.getElementById('root'),
);
