import window from 'window-or-global';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import ReactGA from 'react-ga';
ReactGA.initialize('UA-80001368-1');

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

window.addEventListener('load', () => {
  requestAnimationFrame(() => {
    const { hash } = window.location || {};
    if (hash) {
      const id = hash.substr(1);
      const doc = window.document;
      const target = doc.querySelector(`[name=${id}]`) || doc.getElementById(id);
      if (target) {
        target.scrollIntoView();
      }
    }
  });
});

ReactDOM.render(
  <Fragment>
    <Router history={browserHistory} onUpdate={logPageView} routes={routes} />
    <input type="text" className="bx--visually-hidden" />
  </Fragment>,
  document.getElementById('root'),
);
